import { ChatOpenAI, AzureChatOpenAI } from "@langchain/openai";
import { BedrockChat } from "@langchain/community/chat_models/bedrock";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatAnthropic } from "@langchain/anthropic";
import { ChatGroq } from "@langchain/groq";
import { ChatDeepSeek } from "@langchain/deepseek";
import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { Runnable } from "@langchain/core/runnables";

interface LlmProps {
  modelName: string;
}
/**
 * llm function to return model
 * @param param0 modelName: string
 * @returns model
 *
 */
const llm = ({ modelName }: LlmProps) => {
  let model;
  let endpoint: string;
  let apiKey: string;
  let apiVersion: string;
  let deployment: string;
  switch (modelName) {
    case "o3-mini":
      model = new ChatOpenAI({
        model: "o3-mini",
      });
      return model;
    case "o4-mini":
      model = new ChatOpenAI({
        model: "o4-mini",
      });
      return model;
    case "o1-mini":
      model = new ChatOpenAI({
        model: "o1-mini",
      });
      return model;
    case "gpt-4o-mini":
      model = new ChatOpenAI({
        model: "gpt-4o-mini",
        temperature: 0,
      });
      return model;
    case "gpt-4.1-mini":
      model = new ChatOpenAI({
        model: "gpt-4.1-mini",
        temperature: 0,
      });
      return model;
    case "gpt-4.1-nano":
      model = new ChatOpenAI({
        model: "gpt-4.1-nano",
        temperature: 0,
      });
      return model;
    case "gpt-4o":
      model = new ChatOpenAI({
        model: "gpt-4o",
        temperature: 0,
      });
      return model;
    case "deepseek-reasoner":
      model = new ChatDeepSeek({
        model: "deepseek-reasoner",
        temperature: 0,
      });
      return model;
    case "haiku-3.5":
      model = new ChatAnthropic({
        model: "claude-3-5-haiku-20241022",
        temperature: 0,
      });
      return model;
    case "bedrock-haiku-3.5":
      model = new BedrockChat({
        model: "us.anthropic.claude-3-5-haiku-20241022-v1:0",
        region: process.env.AWS_REGION_NAME,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY!,
          secretAccessKey: process.env.AWS_SECRET_KEY!,
        },
      });
      return model;
    case "bedrock-sonnet-3.5":
      model = new BedrockChat({
        model: "anthropic.claude-3-5-sonnet-20240620-v1:0",
        region: process.env.AWS_REGION_NAME,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY!,
          secretAccessKey: process.env.AWS_SECRET_KEY!,
        },
      });
      return model;
    case "sonnet-3.5":
      model = new ChatAnthropic({
        model: "claude-3-5-sonnet-20241022",
        temperature: 0,
      });
      return model;
    case "llama3.3-70b":
      model = new ChatGroq({
        apiKey: process.env.GROQ_API_KEY,
        model: "llama-3.3-70b-versatile", // context window 32k
      });
      return model;
    case "bedrock-llama3.3-70b":
      model = new BedrockChat({
        model: "us.meta.llama3-3-70b-instruct-v1:0",
        region: process.env.AWS_REGION_NAME,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY!,
          secretAccessKey: process.env.AWS_SECRET_KEY!,
        },
      });
      return model;
    case "azure-gpt-4o":
      endpoint = process.env["AZURE_OPENAI_BASE_PATH_4o"] || "<endpoint>";
      apiKey = process.env["AZURE_OPENAI_API_KEY_4o"] || "<api key>";
      apiVersion = process.env["AZURE_OPENAI_API_VERSION_4o"] || "";
      deployment = process.env["AZURE_OPENAI_API_DEPLOYMENT_NAME_4o"] || ""; //This must match your deployment name.
      model = new AzureChatOpenAI({
        azureOpenAIApiKey: apiKey || "",
        azureOpenAIApiVersion: apiVersion,
        azureOpenAIBasePath: endpoint || "",
        azureOpenAIApiDeploymentName: deployment,
        temperature: 0,
      });
      return model;
    case "azure-gpt-4o-mini":
      endpoint = process.env["AZURE_OPENAI_BASE_PATH_4o-mini"] || "<endpoint>";
      apiKey = process.env["AZURE_OPENAI_API_KEY_4o-mini"] || "<api key>";
      apiVersion = process.env["AZURE_OPENAI_API_VERSION_4o-mini"] || "";
      deployment = process.env["AZURE_OPENAI_DEPLOYMENT_4o-mini"] || ""; //This must match your deployment name.
      model = new AzureChatOpenAI({
        azureOpenAIApiKey: apiKey || "",
        azureOpenAIApiVersion: apiVersion,
        azureOpenAIBasePath: endpoint || "",
        azureOpenAIApiDeploymentName: deployment,
        temperature: 0,
      });
      return model;
    case "gemini-2.0-flash":
      model = new ChatGoogleGenerativeAI({
        model: "gemini-2.0-flash",
        apiKey: process.env.GOOGLE_API_KEY,
      });
      return model;
    case "gemini-2.0-flash-lite":
      return new ChatGoogleGenerativeAI({
        model: "gemini-2.0-flash-lite", // "gemma-3-27b-it" 'gemini-2.0-flash' "gemini-2.0-flash-lite"
        apiKey: process.env.GEMINI_API_KEY,
      });
    case "gemma-3-27b-it":
      return new ChatGoogleGenerativeAI({
        model: "gemma-3-27b-it", // "gemma-3-27b-it" 'gemini-2.0-flash' "gemini-2.0-flash-lite"
        apiKey: process.env.GEMINI_API_KEY,
      });
    default:
      model = new ChatOpenAI({
        model: "gpt-4o-mini",
        temperature: 0,
      });
      return model;
  }
};

interface LlmWithToolsProps {
  modelName: string;
  tools: any[];
  tool_choice?: string;
}

/**
 *  llmWithTools function to return modelWithTools
 * @param param0  modelName: string, tools: any[]
 * @returns  modelWithTools
 */
const llmWithTools = ({
  modelName,
  tools,
  tool_choice,
}: LlmWithToolsProps): Runnable => {
  let modelWithTools: Runnable;
  let endpoint: string;
  let apiKey: string;
  let apiVersion: string;
  let deployment: string;
  switch (modelName) {
    case "o3-mini":
      modelWithTools = new ChatOpenAI({
        model: "o3-mini",
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    case "o4-mini":
      modelWithTools = new ChatOpenAI({
        model: "o4-mini",
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    case "gpt-4o-mini":
      modelWithTools = new ChatOpenAI({
        model: "gpt-4o-mini",
        temperature: 0,
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    case "gpt-4.1-nano":
      modelWithTools = new ChatOpenAI({
        model: "gpt-4.1-nano",
        temperature: 0,
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    case "gpt-4.1-mini":
      modelWithTools = new ChatOpenAI({
        model: "gpt-4.1-mini",
        temperature: 0,
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    case "gpt-4o":
      modelWithTools = new ChatOpenAI({
        model: "gpt-4o",
        temperature: 0,
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    case "azure-gpt-4o":
      endpoint = process.env["AZURE_OPENAI_BASE_PATH_4o"] || "<endpoint>";
      apiKey = process.env["AZURE_OPENAI_API_KEY_4o"] || "<api key>";
      apiVersion = process.env["AZURE_OPENAI_API_VERSION_4o"] || "";
      deployment = process.env["AZURE_OPENAI_API_DEPLOYMENT_NAME_4o"] || ""; //This must match your deployment name.
      modelWithTools = new AzureChatOpenAI({
        azureOpenAIApiKey: apiKey || "",
        azureOpenAIApiVersion: apiVersion,
        azureOpenAIBasePath: endpoint || "",
        azureOpenAIApiDeploymentName: deployment,
        temperature: 0,
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    case "azure-gpt-4o-mini":
      endpoint = process.env["AZURE_OPENAI_BASE_PATH_4o-mini"] || "<endpoint>";
      apiKey = process.env["AZURE_OPENAI_API_KEY_4o-mini"] || "<api key>";
      apiVersion = process.env["AZURE_OPENAI_API_VERSION_4o-mini"] || "";
      deployment = process.env["AZURE_OPENAI_DEPLOYMENT_4o-mini"] || ""; //This must match your deployment name.
      modelWithTools = new AzureChatOpenAI({
        azureOpenAIApiKey: apiKey || "",
        azureOpenAIApiVersion: apiVersion,
        azureOpenAIBasePath: endpoint || "",
        azureOpenAIApiDeploymentName: deployment,
        temperature: 0,
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    case "haiku-3.5":
      modelWithTools = new ChatOpenAI({
        model: "claude-3-5-sonnet-20241022",
        temperature: 0,
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    case "gemini-2.0-flash":
      modelWithTools = new ChatGoogleGenerativeAI({
        model: "gemini-2.0-flash",
        apiKey: process.env.GOOGLE_API_KEY,
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    case "gemini-2.0-flash-lite":
      modelWithTools = new ChatGoogleGenerativeAI({
        model: "gemini-2.0-flash-lite", // "gemma-3-27b-it" 'gemini-2.0-flash' "gemini-2.0-flash-lite"
        apiKey: process.env.GEMINI_API_KEY,
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
    default:
      modelWithTools = new ChatOpenAI({
        model: "gpt-4o-mini",
        temperature: 0,
      }).bindTools(tools, {
        tool_choice,
      });
      return modelWithTools;
  }
};

export { llm, llmWithTools };
