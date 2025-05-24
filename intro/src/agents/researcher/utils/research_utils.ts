import { z } from "zod";
// Move helper functions to utils files
// agent_utils/research_utils.ts

import {
  extractCodeFromUrl,
  webScraper,
} from "../services/google/web_scraper.js";
import { Article, ProcessedTool, SourceConfig, Sumarios } from "../types/types.js";
import { PromptTemplate } from "@langchain/core/prompts";
import { llm } from "../../../shared/lib/llm_models.js";
import { google_search } from "../services/google/google_search.js";
import { toolSourceConfigs } from "./tools_sources.js";
import { translateText } from "../services/google/google_translate.js";
import { cacheService } from "./cache_service.js";
import { DynamicStructuredTool, StructuredTool } from "@langchain/core/tools";
import { logError } from "./error_handling.js";
import { getRelevantPieces } from "../services/vector/langchain-inmemory.js";
import { getAgent } from "../services/vector/intelli_vector.js";
import { tools, toolsByName } from "./medical_tools.js";
import { AIMessageChunk } from "@langchain/core/messages";

// Old in-memory cache is replaced by the CacheService
// const queryCache = new Map();

export async function cachedGoogleSearch({
  query,
  sources,
}: {
  query: string;
  sources: string[];
}) {
  try {
    // Create a consistent cache key
    const cacheKey = `${query}-${sources.join("|")}`;

    // Try to get from cache - await the Promise
    const cachedResult = await cacheService.getQueryResult(cacheKey);
    if (cachedResult) {
      console.log("Cache hit for Google search query:", query);
      return cachedResult;
    }

    // If not in cache, perform the search
    const results = await google_search({
      query,
      sources: sources.join(" OR "),
    });

    // Store in cache - await the Promise
    await cacheService.setQueryResult(cacheKey, results);
    return results;
  } catch (error) {
    logError("cachedGoogleSearch", "Error in cached Google search", error);
    console.error("Error in cachedGoogleSearch:", error);
    // Fallback to direct search if cache operations fail
    return await google_search({ query, sources: sources.join(" OR ") });
  }
}

// Helper function to remove duplicates
export function removeDuplicates(data: any[]): any[] {
  const uniqueLinks = new Set<string>();
  return data.filter((item) => {
    if (uniqueLinks.has(item.link)) {
      return false;
    }
    uniqueLinks.add(item.link);
    return true;
  });
}

export async function processScrapedContent(results: any[]): Promise<any[]> {
  console.log("\n*********** processScrapedContent ***********\n");
  // Process in batches of 5-10 instead of sequentially
  const batchSize = 5;
  const batches = [];

  for (let i = 0; i < results.length; i += batchSize) {
    batches.push(results.slice(i, i + batchSize));
  }

  const processedBatches = await Promise.all(
    batches.map(async (batch) => {
      return await Promise.all(
        batch.map(async (result) => {
          try {
            if (!result || !result.link) {
              return null;
            }
            const url = result.link;

            const hasCachedContent = await cacheService.getUrlContent(url);
            if (hasCachedContent) {
              return {
                text: hasCachedContent,
                title: result.title,
                url: url,
              };
            }

            const categoryInfo = extractCodeFromUrl(result);
            const category =
              categoryInfo != null ? categoryInfo.type : "others";

            // If not in cache, scrape the URL
            const scrapeData = await webScraper(category, url);

            if (!scrapeData) {
              return null;
            }

            // Store scraped content in cache - await the Promise
            await cacheService.setUrlContent(url, scrapeData);

            return {
              text: scrapeData,
              title: result.title,
              url: url,
            };
          } catch (error) {
            logError(
              "processScrapedContent",
              `Failed to process content for URL: ${result?.link}`,
              error
            );
            console.error(`Error processing URL ${result?.link}:`, error);
            return null;
          }
        })
      );
    })
  );

  // Filter out null results
  return processedBatches.flat().filter(Boolean);
}

// Separate function for summarizing articles
export async function summarizeArticles(
  items: any[],
  query: string
): Promise<Sumarios[]> {
  console.log("\n*********** summarizeArticles ***********\n");
  try {
    class ResponseFormatter extends StructuredTool {
      schema = z.object({
        article: z
          .object({
            summary: z
              .string()
              .describe(
                "Summary of the text no more than 3000 words. Your audience are physicians, so you should provide facts and evidences. YOU MUST stick to the original text please do not add information that is not in the text."
              ),
            query_answer: z
              .string()
              .describe(
                'Extraction from the text, content that answers the query, no more than 3000 words. If you do not find any information that answers the query, you should return - "CONTENT NOT RELEVANT".'
              ),
            source: z.string().describe("transcribe the entire url"),
            citation: z
              .string()
              .describe(
                'You should provide the citation of the source in APA format. If there is no author, you can return the source-url instead. This is just an example (not to be used): "Vaughn, V. M., Dickson, R. P., Horowitz, J. K., & Flanders, S. A. (2024). Community-Acquired Pneumonia: A Review. JAMA, 332(15), 1282–1295. https://doi.org/10.1001/jama.2024.14796". '
              ),
          })
          .describe("Article to be summarized."),
      });

      name = "response_formatter";

      description = "Format the response for the article.";

      async _call(_: z.infer<this["schema"]>): Promise<string> {
        return "response_formatter";
      }
    }
    // Use Promise.allSettled instead of Promise.all to handle individual failures
    const results = await Promise.allSettled(
      items.map(async (item, index) => {
        try {
          const cacheSummary = await cacheService.getSummary(item.url);
          if (cacheSummary) {
            return cacheSummary;
          }

          const prompt = PromptTemplate.fromTemplate(
            "This is the query: {query} and this is the text: {item}"
          );
          const model = llm({ modelName: "gemini-2.0-flash" });
          const tool = new ResponseFormatter();

          const modelWithTools = model.withStructuredOutput(tool.schema, {
            name: tool.name,
          });

          const chain = prompt.pipe(modelWithTools);

          // console.log('Summarizing article at index', index)
          // console.log('Item:', item)
          // console.log('Type query', typeof query)
          // console.log('Query:', query)

          // we are spliting big documents, so we can use smaller llms
          const check = await getRelevantPieces(item.text, item.url, query);

          const structuredOutput = await chain.invoke({
            query,
            item: JSON.stringify(check),
          });
          // Try to get summaries from cache - await the Promise

          const { query_answer, ...obj } = structuredOutput.article;

          const summary = obj as Article;

          await cacheService.setSummary(item.url, summary);

          return structuredOutput;
        } catch (error) {
          // Log individual article failures
          logError(
            "summarizeArticles",
            `Failed to summarize article at index ${index}`,
            error
          );
          console.error(`Error summarizing article at index ${index}:`, error);
          throw error; // Re-throw to be caught by Promise.allSettled
        }
      })
    );

    // Filter out failed results and keep successful ones
    const successfulSummaries = results
      .filter(
        (result): result is PromiseFulfilledResult<any> =>
          result.status === "fulfilled"
      )
      .map((result) => result.value);

    // Log information about failures
    const failedCount = results.filter(
      (result) => result.status === "rejected"
    ).length;
    if (failedCount > 0) {
      console.log(
        `${failedCount} out of ${items.length} article summaries failed, but continuing with ${successfulSummaries.length} successful summaries`
      );
    }

    return successfulSummaries;
  } catch (error) {
    logError(
      "summarizeArticles",
      "Error in summarize articles function",
      error
    );
    console.error("Error in summarizeArticles:", error);
    // Return empty array if the entire function fails
    return [];
  }
}

// Generic tool processing function
export async function processToolWithSources(
  toolCall: any,
  sourceConfig: SourceConfig = toolSourceConfigs.default
): Promise<any[]> {
  console.log("\n*********** processToolWithSources ***********\n");
  try {
    //console.log("Tool Call", toolCall);
    const { name, args } = toolCall;
    const { queries } = args;

    // Ensure queries is always an array
    const queryArray = Array.isArray(queries) ? queries : [queries];

    // Perform translation if needed
    const translatedQueries = await Promise.all(
      queryArray.map(async (query: string) => {
        // Only translate if language is 'en' or we detect non-English
        if (sourceConfig.language === "en") {
          return await translateText({
            text: query,
            target: "en",
          });
        }
        return query;
      })
    );
    console.log("\n************* Importante ****************");
    console.log("Args", args);
    //console.log("Queries", queryArray);
    //console.log("Translated Queries", translatedQueries);
    //console.log("Source Config", sourceConfig);

    // Get primary sources (typically English sources)
    const primaryResults = await Promise.all(
      translatedQueries.map(async (query) => {
        return await google_search({
          query,
          sources: sourceConfig.primary.join(" OR "),
        });
      })
    );

    // Get secondary sources if provided (typically local language sources)
    let secondaryResults: any[] = [];
    if (sourceConfig.secondary && sourceConfig.secondary.length > 0) {
      secondaryResults = await Promise.all(
        queryArray.map(async (query) => {
          return await google_search({
            query,
            sources: sourceConfig.secondary!.join(" OR "),
          });
        })
      );
    }

    // Combine and deduplicate results
    const allResults = [...primaryResults, ...secondaryResults].flat();
    const uniqueResults = removeDuplicates(allResults);

    // Process the scraped content
    const processedResults = await processScrapedContent(uniqueResults);

    console.log("******************* END. *******************\n");

    return processedResults;
  } catch (error) {
    logError(
      "processToolWithSources",
      "Error in process tool with sources function",
      error
    );
    console.error("Error in processToolWithSources:", error);
    // Return empty array if the function fails
    return [];
  }
}

async function researchDUT(args: any) {
  // Additional RAGs
  let output = null;

  const dutSearchTerms = new DynamicStructuredTool({
    name: "getDUTSearchTerms",
    description: `
      Analisa um texto clínico e extrai procedimentos médicos e condições de saúde mencionados para pesquisa nas 
      Diretrizes de Utilização (DUTs) da ANS. O resultado é uma lista estruturada em formato JSON com os termos
      que devem ser verificados quanto à cobertura e indicações nas regulamentações da ANS.
      Use esta ferramenta quando precisar identificar procedimentos e diagnósticos relevantes em um caso clínico 
      para verificação de cobertura por planos de saúde segundo as normativas da ANS.
      `,
    schema: z.object({
      listTerms: z
        .array(z.string().describe("name of term to be queried in ANS DUT"))
        .describe("List of terms to be queried in ANS DUT"),
    }),
    func: async ({}) => {
      console.log("getDUTSearchTerms");
    },
  });
  const tools = [dutSearchTerms];

  const model = llm({ modelName: "gpt-4o-mini" });
  const llmWithTools = model.bindTools(tools, {
    tool_choice: "auto",
  });

  const res = (await llmWithTools.invoke(
    `${args.medicalProcedure} e ${args.query_goal}`
  )) as AIMessageChunk;
  const listTerms = res?.tool_call_chunks?.[0]?.args;
  console.log("listTerms", listTerms);

  const agent = getAgent();
  await agent.initializeAgent();
  // Ensure listTerms is a string before passing it to executeAgent
  if (listTerms) {
    output = await agent.executeAgent(String(listTerms));
    console.log(output);
    // enviar output para redaktor
  } else {
    console.log("No listTerms found to execute agent with");
  }
}
