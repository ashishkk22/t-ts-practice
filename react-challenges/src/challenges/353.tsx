import React from "react";

//understanding element type and component type

type types = [React.ElementType, React.ComponentType];

/**
 * ElementType
 *
 * Lets you specify certain types of elements
 * which can receive those props.
 *
 * For instance, Example accepts 'audio' and 'video'!
 * As well as ComponentType<P>
 */

/**
 * type Example = "audio" | "video" | React.ComponentType<{
    autoPlay?: boolean | undefined;
}>
So here we get that audio and video , It fetch all the value from jsx.intrinsicElement

Here ElementType is useful when we use as in react

 */

export type Example = React.ElementType<{
  autoPlay?: boolean;
}>;

/**
 * Component type
 */

const FuncComponent = (props: { prop1: string }) => {
  return null;
};

class ClassComponent extends React.Component<{
  prop1: string;
}> {
  render(): React.ReactNode {
    this.props.prop1;
    return null;
  }
}

const tests2: Array<React.ComponentType<{ prop1: string }>> = [
  FuncComponent,
  ClassComponent,
];
