import { cacheRepository } from "../services/cache/cache_config.js";
import { Article, Sumarios } from "../types/types.js";

/**
 * Cache service that uses the repository pattern
 */
export class CacheService {
  private static instance: CacheService;

  private constructor() {}

  public static getInstance(): CacheService {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService();
    }
    console.log("CacheService instance:", CacheService.instance);
    return CacheService.instance;
  }

  /**
   * Generates a consistent cache key for a query
   */
  public generateQueryCacheKey(queries: string[], sourceType: string): string {
    const sortedQueries = [...queries].sort();
    // Always prefix with the sourceType for consistency
    const cacheKey = `${sourceType}:${sortedQueries.join("|")}`;
    console.log(`[CACHE] Generated key for ${sourceType}: ${cacheKey}`);
    return cacheKey;
  }

  /**
   * Normalizes a query string for comparison
   * - Converts to lowercase
   * - Removes punctuation and extra spaces
   * - Removes accents (diacritics)
   */
  private normalizeQuery(query: string): string {
    return query
      .toLowerCase()
      .replace(/[.,?!;:(){}[\]"']/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Remove diacritics
  }

  /**
   * Calculates Levenshtein distance between two strings
   * (lower means more similar)
   */
  private calculateLevenshteinDistance(str1: string, str2: string): number {
    const m = str1.length;
    const n = str2.length;

    // Create matrix
    const dp: number[][] = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));

    // Fill first row and column
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    // Fill dp matrix
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1]; // No operation
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1, // Deletion
            dp[i][j - 1] + 1, // Insertion
            dp[i - 1][j - 1] + 1 // Substitution
          );
        }
      }
    }

    return dp[m][n];
  }

  /**
   * Calculates simple similarity score between two strings (0-1)
   * Higher score means more similar
   */
  private calculateStringSimilarity(str1: string, str2: string): number {
    // First handle the "query:" prefix that appears in some keys
    const cleanStr1 = str1.replace(/^query:/, "");
    const cleanStr2 = str2.replace(/^query:/, "");

    const normalized1 = this.normalizeQuery(cleanStr1);
    const normalized2 = this.normalizeQuery(cleanStr2);

    // Calculate Levenshtein distance
    const distance = this.calculateLevenshteinDistance(
      normalized1,
      normalized2
    );

    // Calculate max possible distance
    const maxDistance = Math.max(normalized1.length, normalized2.length);

    // Convert to similarity score (0-1)
    return maxDistance === 0 ? 1.0 : 1 - distance / maxDistance;
  }

  /**
   * Find the most similar cached query result
   * @param query The query to find a similar match for
   * @param sourceType The cache source type (e.g., "revisor")
   * @param similarityThreshold Minimum similarity score (0-1) required for a match
   * @returns The cached result or null if no similar query found
   */
  /**
   * Find the most similar cached query result
   */
  public async findSimilarQueryResult(
    query: string,
    sourceType: string,
    similarityThreshold: number = 0.85
  ): Promise<any | null> {
    console.log(
      "\n[CACHE] *********** Searching for similar queries in cache ***********\n"
    );
    console.log(`[CACHE] Original query: "${query}"`);
    console.log(`[CACHE] Source type: ${sourceType}`);
    console.log(`[CACHE] Similarity threshold: ${similarityThreshold}`);

    // Get all cache keys for the specified source type (now with correct prefix)
    const searchPattern = `${sourceType}:*`;
    console.log(
      `[CACHE] Searching for keys matching pattern: ${searchPattern}`
    );

    const allKeys = await cacheRepository.getAllKeys(searchPattern);
    console.log(`[CACHE] Found ${allKeys.length} potential matches in cache`);

    let bestMatch = null;
    let highestScore = 0;

    for (const key of allKeys) {
      // Extract the query portion from the key (everything after sourceType:)
      const cachedQueryPart = key.replace(`${sourceType}:`, "");
      // If using multiple queries joined with |, use the first one or all
      const cachedQuery = cachedQueryPart.split("|")[0];

      console.log(`[CACHE] Comparing to cached query: "${cachedQuery}"`);

      const similarityScore = this.calculateStringSimilarity(
        query,
        cachedQuery
      );

      console.log(`[CACHE] Similarity score: ${similarityScore.toFixed(2)}`);

      if (
        similarityScore > similarityThreshold &&
        similarityScore > highestScore
      ) {
        highestScore = similarityScore;
        console.log(
          `[CACHE] New best match found (score: ${highestScore.toFixed(2)})`
        );

        // Get the cached result for this key
        console.log(`[CACHE] Retrieving cached result for key: ${key}`);
        const cachedResult = await cacheRepository.getQueryResult(key);

        if (cachedResult) {
          console.log(`[CACHE] Retrieved cached result successfully`);
          console.log(`[CACHE] Result type: ${typeof cachedResult}`);
          console.log(`[CACHE] Has documents: ${!!cachedResult.documents}`);

          bestMatch = {
            result: cachedResult.result || cachedResult,
            documents: cachedResult.documents || [],
            originalQuery: cachedQuery,
            similarityScore: highestScore,
          };
        } else {
          console.log(`[CACHE] No cached result found for key: ${key}`);
          bestMatch = {
            result: null,
            originalQuery: cachedQuery,
            similarityScore: highestScore,
            key: key,
          };
        }
      }
    }

    if (bestMatch) {
      console.log(
        `[CACHE] Best match found: "${
          bestMatch.originalQuery
        }" with score: ${highestScore.toFixed(2)}`
      );
    } else {
      console.log(
        `[CACHE] No suitable match found above threshold ${similarityThreshold}`
      );
    }

    return bestMatch;
  }

  /**
   * Get cached full query result
   */
  public async getQueryResult(key: string): Promise<any | null> {
    return await cacheRepository.getQueryResult(key);
  }

  /**
   * Store full query result in cache
   */
  public async setQueryResult(key: string, data: any): Promise<void> {
    await cacheRepository.setQueryResult(key, data);
  }

  /**
   * Get cached URL content
   */
  public async getUrlContent(url: string): Promise<any | null> {
    return await cacheRepository.getUrlContent(url);
  }

  /**
   * Store URL content in cache
   */
  public async setUrlContent(url: string, data: any): Promise<void> {
    await cacheRepository.setUrlContent(url, data);
  }

  /**
   * Get cached summary
   */
  public async getSummary(url: string): Promise<Article | null> {
    return await cacheRepository.getSummary(url);
  }

  /**
   * Store summary in cache
   */
  public async setSummary(
    url: string,
    summary: Article
  ): Promise<void> {
    await cacheRepository.setSummary(url, summary);
  }

  /**
   * Generate a hash for content to use as a cache key
   */
  public generateContentHash(content: any): string {
    return cacheRepository.generateContentHash(content);
  }

  /**
   * Clear all caches
   */
  public async clearAllCaches(): Promise<void> {
    await cacheRepository.clearAllCaches();
  }
}

// Export a singleton instance
export const cacheService = CacheService.getInstance();
