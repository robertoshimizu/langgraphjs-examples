import { z } from 'zod'

export interface Article {
  summary: string
  source: string
  citation: string
}


export interface Articler {
  title: string
  content: string
  url: string
}


export type ProcessedTool = {
  processedLinks: Array<{
    title: string;
    url: string;
    text: string;
  }>,
  processedOthers: any
}



// Create a unified source configuration strategy for tools
// agent_utils/types.ts
/**
 * Interface for the documents STATE
 *
 * @interface Sumarios
 */
export interface Sumarios {
  article: Articler
}

/**
 * Interface for cache entries
 */
export interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export interface SourceConfig {
  primary: string[] // Primary sources to search
  secondary?: string[] // Optional secondary sources
  language: 'en' | 'pt' | 'auto' // Language to search in
  maxResults?: number // Max results to return
}


// Define the evaluation schema
export const RelevanceEvaluator = z.object({
  overallRelevanceScore: z
    .number()
    .min(0)
    .max(10)
    .describe(
      'A score from 0-10 indicating how relevant the retrieved information is to the original query'
    ),

  coverageScore: z
    .number()
    .min(0)
    .max(10)
    .describe(
      'A score from 0-10 indicating how well the retrieved information covers all aspects of the query'
    ),

  isRelevant: z
    .boolean()
    .describe(
      'Boolean indicating if the information is relevant enough (score >= 7) to answer the query'
    ),

  needsAdditionalQueries: z
    .boolean()
    .describe(
      'Boolean indicating if additional queries would help (true if scores < 7 and we have suggestions)'
    ),

  suggestedQueries: z
    .array(z.string())
    .describe(
      '2-4 suggested queries that would help fill the information gaps if any were identified'
    ),

  reasoning: z
    .string()
    .describe('Reasoning behind the evaluation and suggestions')
})


