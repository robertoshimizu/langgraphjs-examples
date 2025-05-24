import { Article } from "../../types/types.js";

/**
 * Cache Repository Interface
 * Defines the contract for all cache implementations
 */
export interface ICacheRepository {
  // Query results
  getQueryResult(key: string): Promise<any | null>;
  setQueryResult(key: string, data: any): Promise<void>;

  // URL content
  getUrlContent(url: string): Promise<any | null>;
  setUrlContent(url: string, content: any): Promise<void>;

  // Summaries
  getSummary(url: string): Promise<Article | null>;
  setSummary(url: string, summary: Article): Promise<void>;

  /**
   * Get all keys matching a pattern
   */
  getAllKeys(pattern: string): Promise<string[]>;

  // Utility methods
  generateContentHash(content: any): string;
  clearAllCaches(): Promise<void>;
}
