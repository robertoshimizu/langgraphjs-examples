import { createClient, RedisClientType } from "redis";
import { createHash } from "crypto";
import { ICacheRepository } from "./redis_interface.js";
import { Article, Sumarios } from "../agent_utils/types.js";

/**
 * Redis implementation of Cache Repository
 */
export class RedisCacheRepository implements ICacheRepository {
  private client: RedisClientType;
  private connected: boolean = false;
  private readonly cacheLifetime: number = 24 * 60 * 60; // 24 hours in seconds

  constructor() {
    this.client = createClient({
      url: process.env.REDIS_URL || "redis://localhost:6379",
      // Configure for Upstash compatibility
      socket: {
        reconnectStrategy: false,
      },
    });

    this.client.on("error", (err: any) => {
      // Suppress CLIENT SETINFO errors for Upstash compatibility
      if (!err.message?.includes('CLIENT SETINFO')) {
        console.error("Redis Client Error", err);
      }
    });
    // Don't auto-connect in constructor
  }
  /**
   * Get all keys matching a specific pattern
   * @param pattern The Redis key pattern to match (e.g., "query:*")
   * @returns Array of matching keys
   */
  public async getAllKeys(pattern: string): Promise<string[]> {
    await this.connect();

    try {
      // For Redis client v4+, we need to use SCAN command
      const keys: string[] = [];
      let cursor = 0;
      
      do {
        // Use SCAN command to iterate through keys
        const scanResult = await this.client.scan(cursor.toString(), {
          MATCH: pattern,
          COUNT: 100
        });
        
        cursor = parseInt(scanResult.cursor.toString(), 10);
        keys.push(...scanResult.keys);
      } while (cursor !== 0);

      return keys;
    } catch (error) {
      console.error("Redis getAllKeys error:", error);
      return [];
    }
  }

  private async connect(): Promise<void> {
    if (!this.connected && !this.client.isOpen) {
      try {
        await this.client.connect();
        this.connected = true;
        console.log("Successfully connected to Redis");
      } catch (error) {
        // Check if error is about socket already opened
        if (error instanceof Error && error.message.includes('Socket already opened')) {
          this.connected = true; // Assume we're already connected
          console.log("Redis socket already connected");
        } else {
          console.error("Failed to connect to Redis:", error);
          this.connected = false;
        }
      }
    }
  }

/**
 * Get cached full query result
 */
public async getQueryResult(key: string): Promise<any | null> {
  await this.connect();

  try {
    // Preserve the original key format rather than forcing a prefix
    console.log(`[CACHE] Looking up query result with key: ${key}`);
    
    const data = await this.client.get(key);
    
    if (!data) {
      console.log(`[CACHE] No data found for key: ${key}`);
      return null;
    }

    console.log(`[CACHE] Hit for query result: ${key}`);
    console.log(`[CACHE] Retrieved data size: ${data.length} characters`);
    return JSON.parse(data);
  } catch (error) {
    console.error("[CACHE ERROR] Redis get error:", error);
    return null;
  }
}

/**
 * Store query result in cache - should respect the original prefix
 */
public async setQueryResult(key: string, data: any): Promise<void> {
  await this.connect();
  
  try {
    // Preserve the original key format
    console.log(`[CACHE] Storing data in cache with key: ${key}`);
    console.log(`[CACHE] Data size being stored: ${JSON.stringify(data).length} characters`);
    
    await this.client.set(key, JSON.stringify(data), {
      EX: this.cacheLifetime,
    });
    
    console.log(`[CACHE] Successfully stored data with key: ${key}`);
  } catch (error) {
    console.error("[CACHE ERROR] Redis set error:", error);
  }
}

  /**
   * Get cached URL content
   */
  public async getUrlContent(url: string): Promise<any | null> {
    await this.connect();

    try {
      const urlKey = `urlScrape:${url}`;
      const data = await this.client.get(urlKey);

      if (!data) return null;

      console.log(`Cache hit for URL scrape: ${url}`);
      return JSON.parse(data);
    } catch (error) {
      console.error("Redis get error:", error);
      return null;
    }
  }

  /**
   * Store URL content in cache
   */
  public async setUrlContent(url: string, data: any): Promise<void> {
    await this.connect();

    try {
      const urlKey = `urlScrape:${url}`;
      await this.client.set(urlKey, JSON.stringify(data), {
        EX: this.cacheLifetime,
      });
    } catch (error) {
      console.error("Redis set error:", error);
    }
  }

  /**
   * Get cached summary
   */
  public async getSummary(url: string): Promise<Article | null> {
    await this.connect();

    try {
      const data = await this.client.get(`summary:${url}`);
      if (!data) return null;

      console.log(`Cache hit for summary: ${url}`);
      return JSON.parse(data);
    } catch (error) {
      console.error("Redis get error:", error);
      return null;
    }
  }

  public async setSummary(
    url: string,
    summary: Article
  ): Promise<void> {
    await this.connect();

    try {
      await this.client.set(
        `summary:${url}`,
        JSON.stringify(summary),
        {
          EX: this.cacheLifetime,
        }
      );
    } catch (error) {
      console.error("Redis set error:", error);
    }
  }

  /**
   * Generate a hash for content to use as a cache key
   */
  public generateContentHash(content: any): string {
    return this.hashString(JSON.stringify(content));
  }

  /**
   * Create a SHA-256 hash of a string for consistent keys
   */
  private hashString(str: string): string {
    return createHash("sha256").update(str).digest("hex");
  }

  /**
   * Clear all caches
   */
  public async clearAllCaches(): Promise<void> {
    await this.connect();

    try {
      // Delete all keys with patterns
      await this.client.flushDb();
    } catch (error) {
      console.error("Redis flush error:", error);
    }
  }

  /**
   * Disconnect from Redis
   */
  public async disconnect(): Promise<void> {
    if (this.connected && this.client.isOpen) {
      try {
        await this.client.disconnect();
        this.connected = false;
        console.log("Disconnected from Redis");
      } catch (error) {
        console.error("Error disconnecting from Redis:", error);
      }
    }
  }

  /**
   * Check if Redis is connected
   */
  public isConnected(): boolean {
    return this.connected && this.client.isOpen;
  }
}
