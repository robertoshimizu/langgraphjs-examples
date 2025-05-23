import { ToolNode } from "@langchain/langgraph/prebuilt";
import {
  END,
  START,
  StateGraph,
  Annotation,
} from "@langchain/langgraph";
import { AIMessage, HumanMessage, BaseMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

const webSearchTool = new TavilySearchResults({
  maxResults: 4,
});
const tools = [webSearchTool];

const toolNode = new ToolNode(tools);

// State annotation that accepts just text input
const TextInputAnnotation = Annotation.Root({
  input: Annotation<string>({
    reducer: (x, y) => y ?? x ?? "",
    default: () => "",
  }),
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => y ?? x ?? [],
    default: () => [],
  }),
});

const callModel = async (state: typeof TextInputAnnotation.State) => {
  const { input, messages } = state;
  
  // On first call, convert input to HumanMessage
  const currentMessages = messages.length === 0 ? [new HumanMessage(input)] : messages;

  const llmWithTools = llm.bindTools(tools);
  const result = await llmWithTools.invoke(currentMessages);

  return { messages: [...currentMessages, result] };
};

const shouldContinue = (state: typeof TextInputAnnotation.State) => {
  const { messages } = state;

  const lastMessage = messages[messages.length - 1];
  if (
    lastMessage._getType() !== "ai" ||
    !(lastMessage as AIMessage).tool_calls?.length
  ) {
    // LLM did not call any tools, or it's not an AI message, so we should end.
    return END;
  }
  return "tools";
};

/**
 * Simple workflow that accepts just text input.
 * Use: "Your message here" (plain string)
 */
const workflow = new StateGraph(TextInputAnnotation)
  .addNode("agent", callModel)
  .addEdge(START, "agent")
  .addNode("tools", toolNode)
  .addEdge("tools", "agent")
  .addConditionalEdges("agent", shouldContinue, ["tools", END]);

export const graph = workflow.compile({
  // The LangGraph Studio/Cloud API will automatically add a checkpointer
  // only uncomment if running locally
  // checkpointer: new MemorySaver(),
});
