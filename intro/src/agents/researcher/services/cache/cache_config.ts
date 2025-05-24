import { InMemoryCacheRepository } from './in-memory.js';
import { ICacheRepository } from './redis_interface.js';
import { RedisCacheRepository } from './upstash.js';

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
 * with fallback to in-memory if Redis fails
 */
let cacheRepository: ICacheRepository;

try {
  if (cacheImplementation === 'redis') {
    cacheRepository = new RedisCacheRepository();
    console.log(`Using ${cacheImplementation} cache implementation`);
  } else {
    cacheRepository = new InMemoryCacheRepository();
    console.log(`Using ${cacheImplementation} cache implementation`);
  }
} catch (error) {
  console.warn(`Failed to initialize ${cacheImplementation} cache, falling back to memory:`, error);
  cacheRepository = new InMemoryCacheRepository();
  console.log(`Using memory cache implementation (fallback)`);
}

export { cacheRepository };
// Also export interface for type checking
export type { ICacheRepository } from '../redis/redis_interface.js';