/**
 * 1. What's the difference between JSX.Element
 * React.ReactNode and React.ReactElement?
 *
 * CMD-click each of them to understand the difference.
 */

import React from "react";

type ClickMe = React.ReactElement;
type ClickMeToo = JSX.Element;
type ClickMeThree = React.ReactNode;

// ANS => so here jsx element and react element both are same
/**
 * and ReactNode is the widest among the three
 *  type ReactNode =
        | ReactElement
        | string
        | number
        | Iterable<ReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined
 */

const yeah: JSX.Element = {} as React.ReactElement;
const yeah2: React.ReactElement = {} as JSX.Element;
//

/**
 * 2. What is the return type of this Component ?
 */

const Component = () => {
  return <div>Hello World</div>;
};

/**
 * 3. Fun fact - this might break on your IDE! In
 * TypeScript 5.0, this wouldn't work. But in Typescript
 * 5.1, It Does work.
 *
 * If it's not working for you, try making your IDE use the
 * 'workspace' version of typescript
 */

const Component2 = (): React.ReactNode => {
  return <div></div>;
};

<>
  <Component2 />
</>;

/**
 * 4a. Why does this component NOT error...
 */

const Component3 = (): React.ReactElement => {
  return <div></div>;
};

<>
  <Component3 />
</>;

/**
 * 4b. ...but this one does ?
 */

const Component4 = (): React.ReactElement => {
  //so here react element and jsx element both are same so we won't be able to return the string.
  return "hello";
};
