import {
  StateGraph,
  MessagesAnnotation,
  END,
  START,
  Annotation,
} from "@langchain/langgraph";
import {
  ToolMessage,
  SystemMessage,
  AIMessageChunk,
  RemoveMessage,
  AIMessage,
  BaseMessage,
} from "@langchain/core/messages";
import { PromptTemplate } from "@langchain/core/prompts";
import { z } from "zod";
import { llm, llmWithTools } from "./agent_utils/llm_models.js";
import {
  baseType,
  filterMessages,
  messagesToKeep,
} from "./agent_utils/langchain_utils.js";
import { tools, toolsByName } from "./agent_utils/medical_tools.js";
import { v4 as uuidv4 } from "uuid";
import { researchGraph } from "./agent_utils/research_subgraph.js";
import { Sumarios } from "./agent_utils/types.js";
import { toolSourceConfigs } from "./agent_utils/tools_sources.js";
import { cacheService } from "./agent_utils/cache_service.js";
import {
  getUserErrorMessage,
  logError,
} from "./agent_utils/error_handling.js";
import { cacheRepository } from "./agent_utils/cache_config.js";

// Removed unused InputStateAnnotation

// STATE ANNOTATIONS
const OverallStateAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec, // Spread in the messages state
  isMedicine: Annotation<boolean>(),
  hasHallucinated: Annotation<boolean>(),
  hallucinationReason: Annotation<string>(),
  hallucinationCounter: Annotation<number>(),
  hasbeenRevised: Annotation<boolean>(),
  documents: Annotation<Sumarios[]>(),
  generation: Annotation<string>(),
  query: Annotation<string>(),
  hasError: Annotation<boolean>(),
  errorDetails: Annotation<string>(),
});

// Update existing functions with error handling

const routeMedicine = async (state: typeof OverallStateAnnotation.State) => {
  const { messages } = state;
  const lastMessage = messages[messages.length - 1];
  const message_type = baseType(lastMessage);
  console.log("\n*********** RouteTopics ***********\n", message_type);
  console.log("Message: ", lastMessage);
  if (message_type === "HumanMessage") {
    const ResponseFormatter = z.object({
      isMedicine: z.boolean().describe(
        `Determine if the conversation's query is about medicine (healthcare) by using the following chain-of-thought process:

    1. **Analyze the Last Human Message:**
       - Examine the final human message in isolation. Does it mention a medical condition, treatment, diagnosis, medication, or any healthcare-related topic?

    2. **Examine the Conversation Context:**
       - Review previous human messages to understand the overall topic of the conversation.
       - Determine whether the last message continues the existing medical discussion or represents a change of subject (e.g., greetings, thanks, or unrelated content).

    3. **Decide the Classification:**
       - **True:** If the last human message is clearly medical or is a continuation of a previous medical discussion.
       - **False:** If the last human message is off-topic (e.g., casual conversation, greetings, thanks) or indicates a shift away from the medical context.
       - If uncertain or lacking enough evidence, default to **false**.

    **Examples:**
    - "What is the best treatment for diabetes?" -> true
    - "What is the best way to cook pasta?" -> false
    - "What is the best way to treat a cold?" -> true
    - "What is the best way to cook a steak?" -> false
    - "What is the posology of amoxicillin?" -> true
    - "Patient with pain in chest" -> true
    - "John Lennon?" -> false
    - "Person has headache" -> true
    - "art basel" -> false
    - "obrigado" -> false (if the last message indicates the conversation is ending or shifting away from the medical context)

    **IMPORTANT:**
    Always include a reason for your answer that explains your chain-of-thought process. For example, if previous messages were medical but the last message simply says "obrigado", explain that the final message signals a change of subject, thus resulting in false.`
      ),
      query_goal: z
        .string()
        .describe(
          "In a short sentence restate the query in English language, in a way we can maximize chances of finding information on google search."
        ),
      reason: z.string().optional().describe("Reason for the answer."),
    });
    const model = llm({ modelName: "gemini-2.0-flash-lite" });
    try {
      // const view_prompt = await ResponseFormatter.invoke
      const modelWithStructure = model.withStructuredOutput(ResponseFormatter);

      let invoke_messages = [lastMessage];

      // Pegar as ultimas 3 mensagens para entender melhor o contexto
      if (messages.length > 2) {
        invoke_messages = messages.slice(-3);
      }

      const structuredOutput = await modelWithStructure.invoke(invoke_messages);

      // structuredOutput should now have an object { isMedicine: boolean }
      console.log("\nROUTEMEDICINE Structure output: ", structuredOutput);

      return {
        isMedicine: structuredOutput.isMedicine,
        query: structuredOutput.query_goal,
      };
    } catch (error) {
      console.error("Error:", error);
      return { messages, isMedicine: false };
    }
  }
  return { messages, isMedicine: false };
};

const researchSourcesToolNode = async (
  state: typeof OverallStateAnnotation.State
) => {
  const { messages, query, hasError } = state;
  try {
    const lastMessage = messages[messages.length - 1];

    console.log("\n*********** ResearchToolNode ***********\n");

    if (baseType(lastMessage) !== "AIMessageChunk") {
      return { messages };
    }

    const aiMessage = lastMessage as AIMessageChunk;
    const tool_calls = aiMessage.tool_calls;

    if (!tool_calls || tool_calls.length === 0) {
      console.log("No tool calls found.");
      return { messages };
    }

    try {
      // Process all tool calls in parallel
      const researchPromises = tool_calls.map(async (tool_call) => {
        const { name, args, id } = tool_call as {
          name: string | undefined;
          args: Record<string, unknown>;
          id: string;
          type: string;
        };

        console.log(`Processing tool call: ${name} and args: ${JSON.stringify(args, null, 2)}`);

        // Get the appropriate source configuration for this tool
        const sourceConfig =
          toolSourceConfigs[name || "default"] || toolSourceConfigs.default;

        // Generate a cache key for the entire research operation
        const queriesArray = Array.isArray(args.queries)
          ? args.queries
          : [args.queries].filter(Boolean);

        // Check if we have a complete cached research result
        // const cachedResult = cacheService.getQueryResult(cacheKey);
        // if (cachedResult) {
        //   console.log(
        //     `Cache hit for complete research operation: ${name} with queries ${queriesArray}`
        //   );
        //   return {
        //     ...cachedResult,
        //     toolName: name || "research_topic",
        //     toolCallId: id,
        //   };
        // }

        // Initial research state for this tool call
        const initialResearchState = {
          originalQuery: query,
          enhancedQueries: [queriesArray], // Use the same normalized array
          attemptCount: 0,
          maxAttempts: 3,
          toolName: name || "research_topic",
          toolArgs: args,
          toolCallId: id,
          sourceConfig,
          hasError: hasError,
        };

        const result = await researchGraph.invoke(initialResearchState, {
          configurable: {
            threadId: id,
          },
        });

        return result;
      });

      // Wait for all research processes to complete
      const researchResults = await Promise.all(researchPromises);

      // Combine all results
      let allDocuments: Sumarios[] = [];

      // Add all tool messages to the conversation
      for (const result of researchResults) {
        if (result.finalToolMessage) {
          //console.log("\nFinal tool message:", result);
          messages.push(result.finalToolMessage);

          // Add summaries to documents collection
          if (result.summaries && result.summaries.length > 0) {
            allDocuments = [...allDocuments, ...result.summaries];
          }
        } else {
          // Handle empty results for this tool call
          const noResultsMessage = new ToolMessage({
            id: uuidv4(),
            content: [],
            name: result.toolName,
            tool_call_id: result.toolCallId,
          });
          messages.push(noResultsMessage);
        }
      }

      if (allDocuments.length === 0) {
        return {
          messages,
          documents: allDocuments,
          additionalInfo: [],
          hasError: true,
        };
      }

      return {
        messages,
        documents: allDocuments,
      };
    } catch (error) {
      console.error("Error in research processes:", error);
      const errorLog = logError(
        "researchSourcesToolNode",
        "Error in research sources tool function",
        error
      );

      // Handle error with empty results for all tool calls
      for (const tool_call of tool_calls) {
        messages.push(
          new ToolMessage({
            id: uuidv4(),
            content: [],
            name: tool_call.name,
            tool_call_id: tool_call.id ?? uuidv4(),
          })
        );
      }

      return {
        messages,
        documents: [],
        hasError: true,
        errorDetails: errorLog.message,
      };
    }
  } catch (error) {
    const errorLog = logError(
      "researchSourcesToolNode",
      "Error in research sources tool function",
      error
    );
    console.error("Error in researchSourcesToolNode:", error);

    // Return minimal state with error flag
    return {
      messages: state.messages,
      hasError: true,
      errorDetails: errorLog.message,
      documents: [],
    };
  }
};

const shouldContinueResearchLinks = (
  state: typeof MessagesAnnotation.State
) => {
  const { messages } = state;
  const lastMessage = messages[messages.length - 1];
  console.log("\n*********** ShouldContinueResearchLinks ***********\n");
  //console.log("Last message:", lastMessage);
  if (
    "tool_calls" in lastMessage &&
    Array.isArray(lastMessage.tool_calls) &&
    lastMessage.tool_calls?.length
  )
    return "ResearchSourcesTool";
  if (baseType(lastMessage) === "AIMessage") return "Finalize";
  return "FinalRedaktor";
};

const determineTopics = async (
  state: typeof OverallStateAnnotation.State
) => {
  try {
    const { messages, query } = state;
    const lastMessage = messages[messages.length - 1];
    const message_type = baseType(lastMessage);

    console.log("\n*********** Topic Router ***********\n");

    // Check cache for similar queries if this is a human message
    if (message_type === "HumanMessage") {

      console.log("Query:", query); 

      // Check if we have a cached response
      const cachedResult = await cacheService.findSimilarQueryResult(
        query,
        "revisor",
        0.85
      );

      //console.log("Cached result CARALHO!:", cachedResult);

      if (cachedResult && cachedResult.result) {
        console.log("\n*********** Cache Hit! ***********\n");
        console.log("Found cached response for:", query);

        // Create AI response with cached content
        const response = new AIMessage({
          content: cachedResult.result,
          name: "IntelliDoctor",
          id: uuidv4(),
        });

        //console.log("Cached response:", response);

        // Add cached response to conversation
        messages.push(response);

        return {
          messages,
          query, // Also make sure this is an array
          documents: cachedResult.documents || [],
          hallucinationCounter: 0,
          hasbeenRevised: true, // Skip revisor since this was already verified
        };
      }

      console.log("No cache hit for query:", query);
    }
    // FInal version - gpt-4o and mini have better behavior to dedice on calling tools. Do not need to force.
    const modelWithTools = llmWithTools({
      modelName: "gpt-4o",
      tools
    });

    if (message_type === "ToolMessage") {
      //console.log('Tool message:', lastMessage.name)
      if (
        Array.isArray(lastMessage.content) &&
        lastMessage.content.length === 0
      ) {
        messages.push(
          new SystemMessage(
            "No results found in research. Therefore, you should say so and conclude the conversation."
          )
        );

        const response = await modelWithTools.invoke(messages);
        return { messages: [...messages, response] };
      } else {
        return { links: lastMessage.content };
      }
    } else if (message_type === "HumanMessage") {
      // Aqui é critico quando se muda de assunto

      const upd_messages = filterMessages(messages);

      // add system message to the beginning of the messages
      //upd_messages.unshift(intellidoctorSystemMessage);

      //console.log('Messages:', upd_messages)
      // Need to specifiy in the prompt to avoid re run previous steps
      const response = await modelWithTools.invoke(upd_messages);

      if (response instanceof AIMessageChunk) {
        const tool_calls = response.tool_calls;

        if (tool_calls) {
          // Create a map to track the occurrence of each tool by name
          const toolOccurrences = new Map<string, number>();
          
          // Create a new filtered array of tool_calls keeping only first occurrence of getSecondOpinion
          const filteredToolCalls = tool_calls.filter((tool_call) => {
            const toolName = tool_call.name as string;
            
            // If this is getSecondOpinion tool
            if (toolName === 'getSecondOpinion') {
              // Check if we've seen this tool before
              const count = toolOccurrences.get(toolName) || 0;
              toolOccurrences.set(toolName, count + 1);
              
              // Only keep the first occurrence of getSecondOpinion
              return count === 0;
            }
            
            // Keep all other tool calls
            return true;
          });
          
          // Replace the original tool_calls with our filtered version
          response.tool_calls = filteredToolCalls;
          
          // Log the tools being used
          for (const tool_call of filteredToolCalls) {
            const selectedTool =
              toolsByName[tool_call.name as keyof typeof toolsByName];
            console.log("\n Selected Tool: \n", selectedTool.name);
          }
        } else {
          console.log("No tool calls found.");
        }

        
      }

      messages.push(response);
      return { messages, query, hallucinationCounter: 0 };
    }
    
    // Default return for any unhandled cases
    return { messages: state.messages };
  } catch (error) {
    const errorLog = logError(
      "determineTopics",
      "Error in determine topics function",
      error
    );
    console.error("Error in determineTopics:", error);
    return {
      messages: state.messages,
      hasError: true,
      errorDetails: errorLog.message,
    };
  }
};

const finalRedaktor = async (state: typeof OverallStateAnnotation.State) => {
  const {
    messages,
    documents,
    hasHallucinated,
    query,
    hallucinationReason,
    hallucinationCounter,
    hasError,
  } = state;

  console.log("\n*********** FinalRedaktor ***********\n");

  //console.log("Documents:", documents);


  // Check for error condition first
  if (hasError) {
    console.log("Error detected, providing error message to user");

    // In the finalRedaktor function, add this fallback
    const errorMessage =
      typeof getUserErrorMessage === "function"
        ? getUserErrorMessage("pt")
        : "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde ou reformule sua pergunta.";

    // Create AI response with error message
    const response = new AIMessage({
      content: errorMessage,
      name: "IntelliDoctor",
      id: uuidv4(),
    });

    // Add error message to conversation
    messages.push(response);

    // Return state with error message and reset error flags
    return {
      messages,
      hasHallucinated: false,
      hallucinationReason: "",
      hallucinationCounter: 0,
      hasbeenRevised: true, // Skip revisor
      generation: null,
      documents: [],
    };
  }

  const lastMessage = messages[messages.length - 1];
  const message_type = baseType(lastMessage);
  console.log('Last message:', lastMessage, message_type)

  if (message_type === "ToolMessage") {
    

    let model = llm({ modelName: "gemma-3-27b-it" });
    let addendum = "";

    if (hasHallucinated) {
      model = llm({ modelName: "gemini-2.0-flash" });
      addendum = `You have hallucinated last time, and this is the feedback <<<${hallucinationReason}>>>. This is unnaceptable. Try to do better this time. ` +
        `If the sources do not give you information to answer, then you should apologize and say that you have not found trustworthy information ` +
        `to answer the query. Keep it simple, adhere to the sources, do not invent`;

      if (hallucinationCounter >= 2) {
        const response = new AIMessage(
          "Infelizmente, não consegui responder a sua pergunta com segurança. Tente repeti-la ou simplificá-la para que eu possa ajudar."
        );

        messages.push(response);
        return {
          messages,
          hasHallucinated: false,
          hallucinationReason: "",
          hallucinationCounter: 0,
          generation: null,
          documents: [],
          links: [],
          query: null,
          tool_retrievers: [],
          isMedicine: false,
          toolConfirmed: false,
          hasError: false,
          errorDetails: "",
          hasbeenRevised: true, // Skip revisor
        };
      }
    }

    if (lastMessage.name === "getSecondOpinion") {
      // Handle second opinion tool message
    }


    try {
      const prompt_template = PromptTemplate.fromTemplate(
        `${addendum} \n
      	1. Scope and Sources
          • You must only use the information provided in the attached summaries ("Sources" or "Summaries")
          • In other words, your answer must be supported by the content of those summaries. This is crucial to ensure the accuracy and reliability of the information.
          • If the user’s question asks for details not covered by those summaries, you must explicitly state that you do not have sufficient information to answer.
          • You must not invent or rely on knowledge outside the provided summaries.
          • Unless otherwise stated, the response should be in Brazillian Portuguese.

        2. Answer Requirements
          • Write your answer in the same language as the user’s query.
          • Aim for 400-800 words total.
          • Use Markdown formatting, with headings or subheadings if needed.
          • Include in-text citations in brackets, e.g., "[1]".
          • End with a References section that lists the sources in the order they were cited, matching the same numbering in your text.
          • If you did not use a particular source in your answer, still list it in the References (keeping the original numbering) but do not cite it in the text.

        3. Citation Rules
          • For every statement, fact, or data point directly derived from a source, include an in-text citation referencing the source index in the Summaries.
          • Example: "Segundo dados recentes, XYZ… [1]".
          • Do not generate references beyond those explicitly provided.
          • Do not mismatch citation numbers. If you cite "[3]" in the text, reference #3 in the References section must be the correct source from the Summaries.
          • Use only the url in the source field to make the clickable link.

        4. Handling Summaries with 'CONTENT NOT RETRIEVED'
          • If a summary is labeled "CONTENT NOT RETRIEVED" or "CONTENT NOT RELEVANT," you may omit details from it since it provides no meaningful text for the answer.
          • BUT still list its source in the References section with its original numbering.

        5. Legal/Medical Disclaimer
          • At the end of your response, include this legal disclaimer in the user’s language (e.g., Portuguese):
            *Disclaimer: IntelliDoctor.ai é uma ferramenta baseada em IA e pode cometer erros. As informações fornecidas devem ser usadas com cautela e verificadas de forma independente antes do cuidado ao paciente. Lembre-se, esta ferramenta é um suporte e não substitui o julgamento clínico humano.*

        6. No Extraneous Details or Conclusions
          • Provide the answer to the query with precision and in-depth factual content as requested.
          • If the user only wants a short, direct answer (e.g., "Quais são os nomes comerciais de um medicamento?"), keep it short. Otherwise, provide more detail as needed.
          • Do not include a "final conclusion" paragraph. Conclude once you have answered and listed references plus the disclaimer.
          Query: <<<{query}>>>
          Summaries: <<<{documents}>>>
        `
      );

      const prompt = await prompt_template.invoke({
        query: query,
        documents: documents,
      });

      const response = await model.invoke(prompt);
      messages.push(response);

      return { generation: response.content, messages };
    } catch (error) {
      logError(
        "finalRedaktor",
        "Error during text generation",
        error
      );
      console.error("Error Inference:", error);

      // Create an error response
      const errorMessage = getUserErrorMessage("pt");
      const response = new AIMessage({
        content: errorMessage,
        name: "IntelliDoctor",
        id: uuidv4(),
      });

      messages.push(response);

      return {
        messages,
        hasHallucinated: false,
        hallucinationReason: "",
        hallucinationCounter: 0,
        generation: null,
        documents: [],
        hasError: false,
        errorDetails: "",
        hasbeenRevised: true, // Skip revisor
      };
    }
  }

  if (message_type === "AIMessage") {
    // That means the last message is an AI message and it has not hallucinated
    console.log("Last message:", message_type);
    console.log("Resseting all ...");

    const messages2Keep = messagesToKeep(messages);

    return {
      messages: messages2Keep,
    };
  }

  if (message_type === "HumanMessage") {
    const model = llm({ modelName: "gemini-2.0-flash-lite" });
    const response = await model.invoke(messages);

    messages.push(response);

    return {
      messages,
      hasHallucinated: false,
      hallucinationReason: "",
      hallucinationCounter: 0,
      generation: null,
      documents: [],
      links: [],
      query: null,
      tool_retrievers: [],
      isMedicine: false,
      toolConfirmed: false,
    };
  }
  
  // Default return for any unhandled message types
  return { messages: state.messages };
};

const shouldGoMedicine = (state: typeof OverallStateAnnotation.State) => {
  console.log("\n*********** ShouldGoMedicine ***********\n");

  // If there's an error, go directly to finalRedaktor
  if (state.hasError) {
    return "FinalRedaktor";
  }

  return state.isMedicine ? "TopicRouter" : "FinalRedaktor";
};

const revisor = async (state: typeof OverallStateAnnotation.State) => {
  try {
    const {
      generation,
      documents,
      query,
      messages,
      hallucinationCounter,
      hasError,
    } = state;

    console.log("\n*********** RevisorNode ***********\n");

    // Skip revision if there was an error
    if (hasError) {
      return {
        hasHallucinated: false,
        hasbeenRevised: true,
        hallucinationReason: "",
        hallucinationCounter: 0,
      };
    }

    // Define a simpler schema without complex validations
    const ResponseFormatter = z.object({
      hasHallucinated: z.boolean().describe(
        `Determine if the generated text is properly grounded in and supported by the provided summaries. 
        Check if in-text reference numbers match the references provided at the end of the text.
        Answer TRUE if the text contains information not supported by the summaries or has incorrect citations.
        Answer FALSE if the text is fully supported by the summaries and has correct citations.`
      ),
      reason: z
        .string()
        .describe("Provide a detailed explanation for your evaluation."),
    });

    const model = llm({ modelName: "gemini-2.0-flash" });
    const promptTemplate = PromptTemplate.fromTemplate(
      `You are a fact-checking expert evaluating if a generated text is properly grounded in the source materials.

        TASK: Determine if the generated text contains hallucinations (information not supported by the provided summaries).

        QUERY THAT WAS ANSWERED:
        {query}

        GENERATED TEXT TO EVALUATE:
        {generation}

        SOURCE SUMMARIES (The only information that should appear in the generated text):
        {documents}

        EVALUATION INSTRUCTIONS:
        1. Compare the generated text against the source summaries
        2. Check if ALL information in the generated text is supported by the summaries
        3. Verify that in-text citations (e.g., [1], [2]) match the correct source in the reference list
        4. Look for any statements, facts, figures, or claims that aren't directly from the summaries

        Return your evaluation with:
        - hasHallucinated: TRUE if any information is not supported by the summaries
        - reason: Detailed explanation identifying specific hallucinations or confirming accuracy`
    );

    const prompt = await promptTemplate.invoke({
      generation,
      documents,
      query,
    });

    try {
      const modelWithStructure = model.withStructuredOutput(ResponseFormatter);
      const structuredOutput = await modelWithStructure.invoke(prompt);

      console.log("\nREVISOR Structure output: ", structuredOutput);

      const { hasHallucinated, reason } = structuredOutput as z.infer<
        typeof ResponseFormatter
      >;

      if (hasHallucinated) {
        return {
          hasHallucinated: true,
          hallucinationReason:
            reason ||
            "The response contains information not supported by the provided sources.",
          hallucinationCounter: hallucinationCounter + 1,
          messages: messages
            .slice(-1)
            .filter((m) => m.id !== undefined)
            .map((m) => new RemoveMessage({ id: m.id as string })),
          hasbeenRevised: true,
        };
      }

      // Save the successful generation to the cache with the query
      // Save the successful generation to the cache with the query
      console.log(
        "\n[CACHE] *********** Saving Successful Generation in Cache ***********\n"
      );
      console.log(`[CACHE] Query to cache: "${query}"`);

      // Create a cache key based on the query - now with correct format
      const cacheKey = cacheService.generateQueryCacheKey(
        [query.toString()],
        "revisor"
      );

      console.log(`[CACHE] Generated cache key: ${cacheKey}`);

      // Prepare data structure for caching
      const cacheData = {
        result: generation, // Store the actual content
        documents: documents || [], // Store the supporting documents
        timestamp: Date.now(),
      };

      console.log(
        `[CACHE] Storing data with size: ${
          JSON.stringify(cacheData).length
        } characters`
      );

      // Cache the successful response
      await cacheService.setQueryResult(cacheKey, cacheData);

      // Verify storage worked by retrieving immediately
      const verifyData = await cacheRepository.getQueryResult(cacheKey);
      console.log(
        `[CACHE] Verification - data was stored successfully: ${!!verifyData}`
      );
      if (verifyData) {
        console.log(`[CACHE] Retrieved data type: ${typeof verifyData}`);
        console.log(
          `[CACHE] Retrieved data has result: ${!!verifyData.result}`
        );
        console.log(
          `[CACHE] Retrieved data has documents: ${!!verifyData.documents}`
        );
      }

      return {
        hasHallucinated: false,
        hasbeenRevised: true,
        hallucinationReason: "",
      };
    } catch (error) {
      console.error("Error in revisor node:", error);
      // Return a default value to prevent system failure
      return {
        hasHallucinated: false,
        hasbeenRevised: true,
        hallucinationReason: "",
      };
    }
  } catch (error) {
    const errorLog = logError("revisor", "Error during text revision", error);
    console.error("Error in revisor node:", error);

    // Return default values to prevent system failure
    return {
      hasHallucinated: false,
      hasbeenRevised: true,
      hallucinationReason: "",
      hasError: true,
      errorDetails: errorLog.message,
    };
  }
};

const shouldReviseFinalText = async (
  state: typeof OverallStateAnnotation.State
) => {
  const { generation, hasbeenRevised, hasHallucinated, hasError } = state;
  console.log("\n*********** ShouldReviseFinalText ***********\n");

  // Skip revision if there was an error
  if (hasError) {
    console.log("Error detected, skipping revision");
    return "Finalize";
  }

  if (!generation) {
    return "Finalize";
  }

  if (hasbeenRevised && !hasHallucinated) {
    console.log("Ending...");
    return "Finalize";
  }

  return "TextRevisor";
};

const eraseState = (state: typeof OverallStateAnnotation.State) => {
  console.log("\n*********** EraseState ***********\n");
  const { messages } = state;

  // Get the filtered messages (only HumanMessage and AIMessage)
  const filteredMessages = filterMessages(messages);

  // Create RemoveMessage objects for all messages not in the filtered set
  const messageIdsToKeep = new Set(
    filteredMessages.map((msg: BaseMessage) => msg.id as string)
  );

  // Create a new messages array that includes original messages to keep and RemoveMessage objects for others
  const updatedMessages = messages.map((msg: BaseMessage) =>
    messageIdsToKeep.has(msg.id as string)
      ? msg
      : new RemoveMessage({ id: msg.id as string })
  );

  console.log("Original messages count:", messages.length);
  console.log("Messages to keep count:", filteredMessages.length);

  return {
    ...state,
    messages: updatedMessages,
    hasHallucinated: false,
    hallucinationReason: "",
    hallucinationCounter: 0,
    hasbeenRevised: false,
    documents: [],
    generation: "",
    query: "",
    hasError: false,
    errorDetails: "",
  };
};

const workflow = new StateGraph(OverallStateAnnotation)
  .addNode("RouteMedicine", routeMedicine)
  .addNode("TopicRouter", determineTopics)
  .addNode("ResearchSourcesTool", researchSourcesToolNode)
  .addNode("FinalRedaktor", finalRedaktor)
  .addNode("TextRevisor", revisor)
  .addNode("Finalize", eraseState)
  .addEdge(START, "RouteMedicine")
  .addConditionalEdges("RouteMedicine", shouldGoMedicine, [
    "TopicRouter",
    "FinalRedaktor",
  ])
  .addConditionalEdges("TopicRouter", shouldContinueResearchLinks, [
    "ResearchSourcesTool",
    "FinalRedaktor",
    "Finalize",
  ])
  .addConditionalEdges("FinalRedaktor", shouldReviseFinalText, [
    "TextRevisor",
    "Finalize",
  ])
  .addEdge("TextRevisor", "FinalRedaktor")
  .addEdge("ResearchSourcesTool", "FinalRedaktor")
  .addEdge("Finalize", END);

export const graph = workflow.compile();
