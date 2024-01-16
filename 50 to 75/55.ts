export interface Cache<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => void;
  // You can fix this by only changing the line below !
  // clone: (transform : (elem: unknown) => unknown) => Cache<unknown>
  //ans
  clone: <U>(transform: (elem: T) => U) => Cache<U>;
}

const createCache = <T>(initialCache?: Record<string, T>): Cache<T> => {
  const cache: Record<string, T> = initialCache || {};
  return {
    get: key => cache[key],
    set: (key, value) => {
      cache[key] = value;
    },
    clone: <U>(transform: (elem: T) => U) => {
      const newCache: Record<string, U> = {};
      
      for (const key in cache) {
        newCache[key] = transform(cache[key]);
      }
      return createCache(newCache);
    },
  };
};
