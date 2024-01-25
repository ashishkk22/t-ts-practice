import React from "react";

/**
 * How do we add a new base element to React's JSx ?
 *
 * You'll need to do some detective work: check
 * out JSX.IntrinsicElements
 *
 * The JSX namespace comes from React - you'll need to
 * check out React's type definition
 */

/**
 * As a bonus, how do we make sure that it has
 * some required props ?
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "custom-element": {
        children?: React.ReactNode;
      };
    }
  }
}

const element = <custom-element>Hello World</custom-element>;


const Example1 = () => {
  return (
    <div>{element}</div>
  )
}

export default Example1
