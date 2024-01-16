//Generic function currying

import { T } from "ts-toolbelt";

export const curryFunction =
  <T, U, V>(t: T) =>
  (u: U) =>
  (v: V) => {
    return {
      t,
      u,
      v,
    };
  };

const curryFunctionResult = curryFunction(1)(2)(3);
/** const curryFunctionResult: {
    t: number;
    u: unknown;
    v: unknown;
} */

const curryFunctionANs =
  <T>(t: T) =>
  <U>(u: U) =>
  <V>(v: V) => {
    return {
      t,
      u,
      v,
    };
  };

const curryFunctionAns = curryFunctionANs(1)(2)(3);
/**const curryFunctionAns: {
    t: number;
    u: number;
    v: number;
} */
