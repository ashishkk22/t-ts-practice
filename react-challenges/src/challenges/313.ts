//generic local storage hook problem

/**
 * 1. Figure out a way to make this work using generics
 */

export const useLocalStorage = <T>(prefix: string) => {
  return {
    get: (key: string): T | null => {
      return JSON.parse(window.localStorage.getItem(prefix + key) || "null");
    },
    set: (key: string, value: T) => {
      window.localStorage.setItem(prefix + key, JSON.stringify(value));
    },
  };
};

const user = useLocalStorage<{ name: string }>("user");
