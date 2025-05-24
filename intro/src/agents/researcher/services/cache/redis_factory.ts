import { InMemoryCacheRepository } from "./in-memory.js";
import { ICacheRepository } from "./redis_interface.js";
import { RedisCacheRepository } from "./upstash.js";

export type CacheImplementation = 'memory' | 'redis';

/**
 * Factory for creating cache repository instances
 */
export class CacheRepositoryFactory {
  private static instance: ICacheRepository;
  
  /**
   * Get cache repository instance
   * @param implementation Which cache implementation to use
   */
  public static getRepository(implementation: CacheImplementation = 'memory'): ICacheRepository {
    if (CacheRepositoryFactory.instance) {
      return CacheRepositoryFactory.instance;
    }
    
    switch (implementation) {
      case 'redis':
        CacheRepositoryFactory.instance = new RedisCacheRepository();
        break;
      case 'memory':
      default:
        CacheRepositoryFactory.instance = new InMemoryCacheRepository();
        break;
    }
    
    return CacheRepositoryFactory.instance;
  }
}