import {
  StateGraph,
  MessagesAnnotation,
  END,
  START,
  Annotation,
  NodeInterrupt,
} from "@langchain/langgraph";
import { ToolMessage } from "@langchain/core/messages";
import { PromptTemplate } from "@langchain/core/prompts";
import { v4 as uuidv4 } from "uuid";

import { z } from "zod";
import { llm } from "../../../shared/lib/llm_models.js";
import { ProcessedTool, SourceConfig, Sumarios } from "../types/types.js";
import { processToolWithSources, summarizeArticles } from "./research_utils.js";
import { logError } from "./error_handling.js";
import { translateText } from "../services/google/google_translate.js";

// STATE ANNOTATIONS FOR RESEARCH SUBGRAPH
const ResearchStateAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec, // Include basic messages
  originalQuery: Annotation<string>(),
  enhancedQueries: Annotation<string[][]>(),
  attemptCount: Annotation<number>(),
  maxAttempts: Annotation<number>(),
  retrievedLinks: Annotation<string[]>(),
  additionalInfo: Annotation<any>(),
  summaries: Annotation<Sumarios[]>(),
  isRelevant: Annotation<boolean>(),
  relevanceScore: Annotation<number>(),
  additionalQueriesNeeded: Annotation<boolean>(),
  toolName: Annotation<string>(),
  toolArgs: Annotation<any>(),
  toolCallId: Annotation<string>(),
  sourceConfig: Annotation<SourceConfig>(),
  finalToolMessage: Annotation<ToolMessage>(),
  hasError: Annotation<boolean>({
    reducer: (_, newValue) => newValue,
    default: () => false,
  }),
  errorDetails: Annotation<string>(),
});

// 1. EVALUATE RELEVANCE NODE
const evaluateRelevanceNode = async (
  state: typeof ResearchStateAnnotation.State
) => {
  const { summaries, toolArgs, attemptCount } = state;
  console.log(
    `\n*********** Evaluating Research Relevance (Attempt ${attemptCount}) ***********\n`
  );

  // Skip evaluation if we don't have summaries yet
  if (!summaries || summaries.length === 0) {
    console.log("No summaries available for evaluation");
    return {
      isRelevant: false,
      relevanceScore: 0,
      additionalQueriesNeeded: true,
    };
  }

  const { query_goal } = toolArgs;

  // Define a schema without constraints like 'minimum'
  const RelevanceEvaluator = z.object({
    overallRelevanceScore: z
      .number()
      .describe(
        "A score from 0-10 indicating how relevant the retrieved information is to the original query"
      ),
    coverageScore: z
      .number()
      .describe(
        "A score from 0-10 indicating how well the retrieved information covers all aspects of the query"
      ),
    isRelevant: z
      .boolean()
      .describe(
        "Boolean indicating if the information is relevant enough to answer the query"
      ),
    needsAdditionalQueries: z
      .boolean()
      .describe(
        "Boolean indicating if additional queries would help gather more relevant information"
      ),
    suggestedQueries: z
      .array(z.string())
      .describe(
        "2-4 suggested queries that would help fill the information gaps if any were identified"
      ),
    reasoning: z
      .string()
      .describe("Reasoning behind the evaluation and suggestions"),
  });

  // Generate the evaluation prompt
  const evaluationPrompt = PromptTemplate.fromTemplate(`
    You are a research evaluation expert. Your job is to evaluate if the retrieved information is 
    relevant and sufficient to answer the original query.
    
    Original query: {query_goal}
    
    Retrieved information summaries:
    {summaries}
    
    Critically evaluate how well the retrieved information answers the original query.
    Consider:
    1. Relevance - Does the information directly address the query?
    2. Comprehensiveness - Does it cover all aspects of the query?
    3. Specificity - Is the information detailed enough?
    4. Currency - Is the information recent enough (if applicable)?
    
    For overallRelevanceScore and coverageScore, provide a number from 0 to 10, where:
    - 0-3: Poor relevance/coverage
    - 4-6: Moderate relevance/coverage
    - 7-10: Good to excellent relevance/coverage
    
    Set isRelevant to true if the overallRelevanceScore is 7 or higher.
    
    If the information is insufficient, suggest 2 queries that would help fill the gaps. These queries shoud have max 6 words and be thoughtful for an optimized and fast google search.
  `);

  try {
    const model = llm({ modelName: "gemini-2.0-flash-lite" });

    if (model && typeof model.withStructuredOutput === "function") {
      var modelWithStructure = model.withStructuredOutput(RelevanceEvaluator);
    } else {
      throw new Error("Model or method withStructuredOutput is undefined");
    }

    const chain = evaluationPrompt.pipe(modelWithStructure);

    const evaluation = await chain.invoke({
      query_goal,
      summaries: JSON.stringify(summaries),
    });

    console.log(
      `Evaluation results: Relevance=${evaluation.overallRelevanceScore}, Coverage=${evaluation.coverageScore}`
    );
    console.log(
      `Is Relevant: ${evaluation.isRelevant}, Needs Additional Queries: ${evaluation.needsAdditionalQueries}`
    );

    if (evaluation.needsAdditionalQueries) {
      console.log("Suggested queries:", evaluation.suggestedQueries);
    }

    // Consider prioritizing query strategies:
    const prioritizedQueries = evaluation.suggestedQueries
      .sort((a, b) => {
        // Prefer shorter, more specific queries
        return a.length - b.length;
      })
      .slice(0, 2); // Use fewer queries but make them count

    if (evaluation.overallRelevanceScore >= 8) {
      console.log("Found high-quality results, skipping additional searches");
      return {
        isRelevant: true,
        relevanceScore: evaluation.overallRelevanceScore,
        additionalQueriesNeeded: false,
      };
    }

    return {
      isRelevant: evaluation.isRelevant,
      relevanceScore: evaluation.overallRelevanceScore,
      additionalQueriesNeeded: evaluation.needsAdditionalQueries,
      attemptCount: attemptCount + 1,
      enhancedQueries:
        prioritizedQueries.length > 0 ? [prioritizedQueries] : [[]],
    };
  } catch (error) {
    const errorLog = logError(
      "evaluateRelevanceNode",
      "Error in relevance evaluation",
      error
    );
    console.error("Error in relevance evaluation:", error);

    return {
      isRelevant: false,
      relevanceScore: 0,
      additionalQueriesNeeded: false,
      enhancedQueries: [[]],
      hasError: true,
      errorDetails: errorLog.message,
    };
  }
};

// 2. SEARCH WITH ENHANCED QUERIES NODE
const searchWithEnhancedQueriesNode = async (
  state: typeof ResearchStateAnnotation.State
) => {
  const { enhancedQueries, attemptCount, sourceConfig, toolName, toolArgs } =
    state;

  console.log(
    `\n*********** Searching with Enhanced Queries (Attempt ${attemptCount}) ***********\n`
  );

  // Get the current round's queries
  const currentRoundQueries = enhancedQueries[enhancedQueries.length - 1];

  if (!currentRoundQueries || currentRoundQueries.length === 0) {
    console.log("No enhanced queries available, using default processing");
    return { retrievedLinks: [] };
  }

  // Use Promise.all to handle all translations concurrently
  const translatedQueries = await Promise.all(
    currentRoundQueries.map(async (query) => {
      // Translate the query to the source language
      const translated = await translateText({
        text: query,
        target: "en",
      });
      return translated;
    })
  );

  console.log("Using enhanced queries:", translatedQueries);

  // Create a modified tool call with the enhanced queries
  const enhancedToolCall = {
    name: toolName,
    args: {
      ...toolArgs,
      queries: translatedQueries,
    },
  };

  // Process the tool call with the enhanced queries
  try {
    const processedItems = await processToolWithSources(
      enhancedToolCall,
      sourceConfig
    )

    console.log(
      `Retrieved ${processedItems.length} items with enhanced queries`
    )

    return { retrievedLinks: processedItems }
  } catch (error) {
    const errorLog = logError('searchWithEnhancedQueriesNode', 'Error in enhanced search', error)
    console.error('Error in enhanced search:', error)
    
    return { 
      retrievedLinks: [],
      hasError: true,
      errorDetails: errorLog.message
    }
  }
};

// 3. SUMMARIZE ARTICLES NODE
const summarizeArticlesNode = async (
  state: typeof ResearchStateAnnotation.State
) => {
  const { retrievedLinks, originalQuery } = state;

  console.log(
    `\n*********** Summarizing Articles (${retrievedLinks.length} items) ***********\n`
  );

  if (!retrievedLinks || retrievedLinks.length === 0) {
    console.log("No links to summarize");
    return { summaries: [] };
  }

  try {
    // Instead of waiting for all summaries, return initial results quickly
    const quickSummaries = await Promise.race<Sumarios[]>([
      summarizeArticles(retrievedLinks.slice(0, 3), originalQuery),
      new Promise<Sumarios[]>((resolve) => setTimeout(() => resolve([]), 5000)),
    ]);

    if (quickSummaries.length > 0) {
      // Start with quick results
      return {
        summaries: quickSummaries,
        isPartialResult: true,
      };
    }

    const summaries = await summarizeArticles(retrievedLinks, originalQuery);

    console.log(`Generated ${summaries.length} summaries`);

    return {
      summaries,
      // Add a flag if we have fewer summaries than links (indicating some failed)
      hasPartialFailures: summaries.length < retrievedLinks.length,
    };
  } catch (error) {
    const errorLog = logError(
      "summarizeArticlesNode",
      "Error summarizing articles",
      error
    );
    console.error("Error summarizing articles:", error);

    return {
      summaries: [],
      hasError: true,
      errorDetails: errorLog.message,
    };
  }
};

// 4. PREPARE FINAL OUTPUT NODE
const prepareFinalOutputNode = async (
  state: typeof ResearchStateAnnotation.State
) => {
  const {
    summaries,
    isRelevant,
    relevanceScore,
    attemptCount,
    maxAttempts,
    toolName,
    toolCallId,
    additionalInfo
  } = state;

  console.log(`\n*********** Preparing Final Output ***********\n`);

  if (!summaries || summaries.length === 0) {
    // No results found
    return {
      finalOutput: [],
      documents: [],
      summaries: [],
      finalMessage:
        "No relevant information could be found after multiple search attempts.",
    };
  }

  if (isRelevant || attemptCount >= maxAttempts) {
    // We have good results or we've exhausted all attempts

    // If we have results but they're not great, add a notice
    let qualityMessage = "";
    if (!isRelevant && summaries.length > 0) {
      qualityMessage = `Note: The information retrieved may not fully address your query (relevance score: ${relevanceScore}/10).`;
    }

    const addendum =  JSON.stringify(additionalInfo);

    // Create tool message with the final summaries
    const uuid = uuidv4();
    const toolMessage = new ToolMessage({
      id: uuid,
      content: 'Summaries: ' + JSON.stringify(summaries) + '\nAdditional Information: ' + addendum,
      name: toolName,
      tool_call_id: toolCallId,
    });

    return {
      finalOutput: summaries,
      documents: summaries, // Make sure we return summaries as documents too
      summaries: summaries, // Keep summaries in the returned state
      finalMessage: qualityMessage,
      finalToolMessage: toolMessage,
      messages: [toolMessage], // Add to messages for the parent graph
    };
  }

  // This should never happen due to our edge conditions, but just in case
  return {
    finalOutput: [],
    documents: [],
    summaries: [],
    finalMessage: "Research process ended without clear resolution.",
  };
};

// ROUTER FUNCTIONS FOR THE SUBGRAPH

// Decide whether to continue research or return results
const shouldContinueResearch = (
  state: typeof ResearchStateAnnotation.State
) => {
  const {
    isRelevant,
    attemptCount,
    maxAttempts,
    additionalQueriesNeeded,
    hasError,
  } = state;

  console.log(
    `\n*********** Research Decision Point (Attempt ${attemptCount}/${maxAttempts}) ***********\n`
  );
  console.log(
    `Is Relevant: ${isRelevant}, Additional Queries Needed: ${additionalQueriesNeeded}`
  );

  // If there's an error, go directly to final output
  if (hasError) {
    console.log("Error detected in research process, skipping to final output");
    return "PrepareFinalOutput";
  }

  // If we have relevant information or maxed out attempts, end the research
  if (isRelevant || attemptCount >= maxAttempts) {
    return "PrepareFinalOutput";
  }

  // If we need additional queries, continue with enhanced search
  if (additionalQueriesNeeded) {
    return "SearchWithEnhancedQueries";
  }

  // Default to ending research
  return "PrepareFinalOutput";
};

// BUILD THE RESEARCH SUBGRAPH
const researchSubgraph = new StateGraph(ResearchStateAnnotation)
  .addNode("EvaluateRelevance", evaluateRelevanceNode)
  .addNode("SearchWithEnhancedQueries", searchWithEnhancedQueriesNode)
  .addNode("SummarizeArticles", summarizeArticlesNode)
  .addNode("PrepareFinalOutput", prepareFinalOutputNode)

  // Define the flow
  .addEdge(START, "EvaluateRelevance")
  .addConditionalEdges("EvaluateRelevance", shouldContinueResearch, [
    "SearchWithEnhancedQueries",
    "PrepareFinalOutput",
  ])
  .addEdge("SearchWithEnhancedQueries", "SummarizeArticles")
  .addEdge("SummarizeArticles", "EvaluateRelevance")
  .addEdge("PrepareFinalOutput", END);

export const researchGraph = researchSubgraph.compile();

// INTEGRATION WITH MAIN GRAPH
// Modify your existing researchSourcesToolNode to use this subgraph
