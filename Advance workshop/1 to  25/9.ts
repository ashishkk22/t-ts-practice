//namespace in ts

/**
 * Namespace basically sits in the global scope
 * but under the namespace
 * So with this names won't be conflict
 * So basically it puts the another level of nested
 */
/**
 * Clues:
 *
 * 1. You'll need declare global again
 *
 * 2. You'll need to use the NodeJs namespace
 *
 * 3. Inside the NodeJS namespace, you'll need to add a
 * MY_ENV_VAR property to the ProcessEnv interface
 */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_ENV_VAR: string;
    }
  }
}

// const WhatEver : NodeJS.ProcessEnv
//so something like this we can access the ProcessEnv we won't be able to directly access it.
process.env.MY_ENV_VAR = "Hello World";

export {};
