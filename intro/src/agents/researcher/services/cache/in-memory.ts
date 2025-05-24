import { Article } from "../../types/types.js";
import { ICacheRepository } from "./redis_interface.js";

/**
 * In-Memory implementation of Cache Repository
 */
export class InMemoryCacheRepository implements ICacheRepository {
  /**
   * Get all keys that match a specific pattern
   * @param pattern String pattern to match keys against
   * @returns Array of matching keys
   */
  async getAllKeys(pattern: string): Promise<string[]> {
    // Create a RegExp from the pattern with glob-like functionality
    const regexPattern = new RegExp(pattern
      .replace(/\*/g, '.*') // Convert * to .*
      .replace(/\?/g, '.') // Convert ? to .
    );
    
    // Collect all keys from all caches
    const allKeys: string[] = [
      ...Array.from(this.queryResultCache.keys()),
      ...Array.from(this.urlContentCache.keys()),
      ...Array.from(this.summaryCache.keys())
    ];
    
    // Filter keys by pattern
    return allKeys.filter(key => regexPattern.test(key));
  }
  // Level 1: Query Result Cache - stores complete results for queries
  private queryResultCache: Map<string, any> = new Map();
  
  // Level 2: URL Content Cache - stores scraped content from URLs
  private urlContentCache: Map<string, any> = new Map();
  
  // Level 3: Summary Cache - stores generated summaries
  private summaryCache: Map<string, { data: Article, timestamp: number }> = new Map();

  // Cache configuration
  private cacheLifetime: number = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  private maxCacheSize: number = 1000; // Maximum number of entries per cache
  
  /**
   * Get cached full query result
   */
  public async getQueryResult(key: string): Promise<any | null> {
    const cacheEntry = this.queryResultCache.get(key);
    if (!cacheEntry) return null;
    
    // Check if cache entry is expired
    if (Date.now() - cacheEntry.timestamp > this.cacheLifetime) {
      this.queryResultCache.delete(key);
      return null;
    }
    
    console.log(`Cache hit for query result: ${key}`);
    return cacheEntry.data;
  }

  /**
   * Store full query result in cache
   */
  public async setQueryResult(key: string, data: any): Promise<void> {
    // Manage cache size
    if (this.queryResultCache.size >= this.maxCacheSize) {
      const oldestKey = this.queryResultCache.keys().next().value;
      if (oldestKey !== undefined) {
        this.queryResultCache.delete(oldestKey);
      }
    }
    
    this.queryResultCache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  /**
   * Get cached URL content
   */
  public async getUrlContent(url: string): Promise<any | null> {
    const cacheEntry = this.urlContentCache.get(url);
    if (!cacheEntry) return null;
    
    // Check if cache entry is expired
    if (Date.now() - cacheEntry.timestamp > this.cacheLifetime) {
      this.urlContentCache.delete(url);
      return null;
    }
    
    console.log(`Cache hit for URL content: ${url}`);
    return cacheEntry.data;
  }

  /**
   * Store URL content in cache
   */
  public async setUrlContent(url: string, data: any): Promise<void> {
    // Manage cache size
    if (this.urlContentCache.size >= this.maxCacheSize) {
      const oldestKey = this.urlContentCache.keys().next().value;
      if (oldestKey !== undefined) {
        this.urlContentCache.delete(oldestKey);
      }
    }
    
    this.urlContentCache.set(url, {
      data,
      timestamp: Date.now()
    });
  }

  /**
   * Get cached summary
   */
  public async getSummary(key: string): Promise<Article | null> {
    const result = this.summaryCache.get(key);
    if (!result) return null;
    
    // Convert Sumarios[] to Article format if it's an array
    if (Array.isArray(result)) {
      return {
        summary: result.map(s => s.toString()).join('\n'),
        source: key, // use the key as source
        citation: ''
      };
    }
    
    // If it's already an Article, return it
    return result.data;
  }
  
  public async setSummary(url: string, summary: Article): Promise<void> {
    // Manage cache size
    if (this.summaryCache.size >= this.maxCacheSize) {
      const oldestKey = this.summaryCache.keys().next().value;
      if (oldestKey !== undefined) {
        this.summaryCache.delete(oldestKey);
      }
    }
    
    this.summaryCache.set(url, {
      data: summary,
      timestamp: Date.now()
    });
  }
  
  /**
   * Generate a hash for content to use as a cache key
   */
  public generateContentHash(content: any): string {
    // Simple string hash function
    const str = JSON.stringify(content);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return String(Math.abs(hash));
  }
  
  /**
   * Clear all caches
   */
  public async clearAllCaches(): Promise<void> {
    this.queryResultCache.clear();
    this.urlContentCache.clear();
    this.summaryCache.clear();
  }
}