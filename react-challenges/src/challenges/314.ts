/**
 * 1. In this exercise, we want to create a version of the useState
 * hook that slightly modifies the API - returning it as an object instead of a tuple
 *
 * There are many different solutions - but they all involve generics.
 */

import { useState } from "react";

export const useStateAsObject = <T>(initial: T) => {
  //const [value, set] = useState<T>(initial);
  //or
  const [value, set] = useState(initial);

  return {
    value,
    set,
  };
};

const example = useStateAsObject({ name: "ashish " });

/**
 * Take a look at each solution, noting the differences between each.
 * With some, you might need to do some 'spot the difference' to see what's changed
 *
 * 2/ which solution do you think is best ? why ?
 */
