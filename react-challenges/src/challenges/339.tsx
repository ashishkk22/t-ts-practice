import { useState } from "react";

useState;
// ^^^^^ CMD-click to see the implementation of useState

/**
 * 1. Take a look at useState. You will notice that it's composed of two overloads.
 *
 * 2. Try to figure out what the difference is between the two overloads.
 *
 * 3. Below, There's a simple function that expects to behave like useState.
 * Try to write a set of function overloads that;
 *
 * - If it receives a string, returns a string
 * - If it receives NOTHING, returns a string | undefined
 */

//Ans
function maybeReturnsString(defaultString: string): string;
function maybeReturnsString(): string | undefined;

//
function maybeReturnsString(defaultString?: string) {
  //if you pass a string, it always returns a string
  if (defaultString) return defaultString;

  //otherwise it might return a string or undefined;

  return Math.random() > 0.5 ? "hello" : undefined;
}

const example1 = maybeReturnsString("hello");
const example2 = maybeReturnsString();
