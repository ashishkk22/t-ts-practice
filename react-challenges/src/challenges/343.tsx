import { DependencyList, useMemo, useState } from "react";

//currying hooks = a hooks returning another hook

const useCustomState = <TValue,>(initial: TValue) => {
  const [value, set] = useState<TValue>(initial);

  return {
    value,
    set,

    /**
     * Here, we are returning a hook form our initial hook !
     * This is a great way to compose behaviour.
     *
     * But - useComputed takes in a function which can return
     * any type. We want to make sure that the type of the
     * thing returned is inferred properly.
     */
    useComputed: <TComputed,>(
      factory: (value: TValue) => TComputed,
      deps?: DependencyList
    ) => {
      return useMemo(() => {
        return factory(value);
      }, [value, ...(deps || [])]);
    },
  };
};

const Component = () => {
  const arrayOfNums = useCustomState([1, 2, 3, 4, 5, 6, 7, 8]);

  /**
   * Currently, this is typed as any. How do we type it
   * based on the return type of the function passed to
   * useComputed ?
   */

  const reversedAsString = arrayOfNums.useComputed(nums =>
    Array.from(nums).reverse().map(String)
  );
};
