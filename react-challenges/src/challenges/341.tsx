import React, { useState } from "react";

//function overloads in hooks problem

/**
 * Returning to our useStateAsObject function, we now want to make it work
 * EXACTLY like useState, where if you NOTHING, it returns T | undefined
 *
 * If you pass a default value, it should NOT include undefined
 */

export function useStateAsObject<T>(initial: T): {
  value: T;
  set: React.Dispatch<React.SetStateAction<T>>;
};
export function useStateAsObject<T>(): {
  value: T | undefined;
  set: React.Dispatch<React.SetStateAction<T | undefined>>;
};
export function useStateAsObject<T>(initial?: T) {
  const [value, set] = useState(initial);

  return {
    value,
    set,
  };
}

/**
 * If you DO pass a default value, the result should NOT included undefined
 */

const notUndefined = useStateAsObject({ name: "ashish" });

/**
 * If you don't pass a value, It should be undefined
 */

const hasUndefined = useStateAsObject<number>();
