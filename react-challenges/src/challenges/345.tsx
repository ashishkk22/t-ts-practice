import React from "react";

/**
 * Questions to answer:
 */

//1. what is the React namespace ?
type Example = React.ReactNode;
//              ^?

/**
 * 2. How come React can be used BOTH as a value and a type ?
 *
 * HINT - We're adding LOTS of things to React's namespace in
 * later exercises, so make sure when you go-to-definition you
 * go to its original definition, in @types/react/index.d.ts
 */

const element = React.createElement("div");

export {};
