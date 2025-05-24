import { InMemoryCacheRepository } from '../redis/in-memory.js';
import { ICacheRepository } from '../redis/redis_interface.js';
import { RedisCacheRepository } from '../redis/upstash.js';

// Define the available cache implementation types
export type CacheImplementation = 'memory' | 'redis';

/**
 * Determine which implementation to use based on environment variables
 * Defaults to 'memory' if not specified
 */
const cacheImplementation = 
  (process.env.CACHE_IMPLEMENTATION as CacheImplementation) || 'memory';

/**
 * Create and export the appropriate cache repository implementation
 */
export const cacheRepository: ICacheRepository = 
  cacheImplementation === 'redis' 
    ? new RedisCacheRepository() 
    : new InMemoryCacheRepository();

// Log which cache implementation is being used
console.log(`Using ${cacheImplementation} cache implementation`);
// Also export interface for type checking
export type { ICacheRepository } from '../redis/redis_interface.js';