type CacheEntry<T> = {
  expiresAt: number;
  value: T;
};

declare global {
  // eslint-disable-next-line no-var
  var _serverCacheStore: Map<string, CacheEntry<unknown>> | undefined;
  // eslint-disable-next-line no-var
  var _serverInflightStore: Map<string, Promise<unknown>> | undefined;
}

const cacheStore = globalThis._serverCacheStore ?? (globalThis._serverCacheStore = new Map<string, CacheEntry<unknown>>());
const inflightStore = globalThis._serverInflightStore ?? (globalThis._serverInflightStore = new Map<string, Promise<unknown>>());

export async function getOrSetCache<T>(key: string, ttlMs: number, loader: () => Promise<T>): Promise<T> {
  const now = Date.now();
  const cached = cacheStore.get(key) as CacheEntry<T> | undefined;

  if (cached && cached.expiresAt > now) {
    return cached.value;
  }

  // Deduplicate inflight requests for the same key to prevent cache stampede / duplicate MySQL queries
  const existingInflight = inflightStore.get(key) as Promise<T> | undefined;
  if (existingInflight) {
    return existingInflight;
  }

  const promise = (async () => {
    try {
      const value = await loader();
      cacheStore.set(key, {
        value,
        expiresAt: Date.now() + ttlMs,
      });
      return value;
    } finally {
      inflightStore.delete(key);
    }
  })();

  inflightStore.set(key, promise);
  return promise;
}

export function clearCacheByPrefix(prefix: string): void {
  for (const key of Array.from(cacheStore.keys())) {
    if (key.startsWith(prefix)) {
      cacheStore.delete(key);
      inflightStore.delete(key);
    }
  }
}
