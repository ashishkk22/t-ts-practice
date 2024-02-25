// as prop in react
/**
 * This is a further extension of 'as'. This time, we can pass in
 * _any_ component as a prop, and it'll be rendered with the other
 * props passed in.
 *
 * 1. Figure out the correct typings for the 'Wrapper' component.
 * The Solution uses:
 * - Generics
 * - ElementType
 * - One of the Following:
 *      - ComponentPropsWithoutRef
 *      - ComponentPropsWithRef
 *      - ComponentProps
 */

import { ComponentProps, ElementType } from "react";

export const Wrapper = <TAs extends ElementType>(
  props: {
    as: TAs;
  } & React.ComponentPropsWithoutRef<TAs>
) => {
  const Comp = props.as;
  return <Comp {...(props as any)}></Comp>;
};

/**
 * Should work specifying a 'button'
 */

const Example1 = () => {
  return (
    <>
      <Wrapper as="button"></Wrapper>

      <Wrapper as="button" onClick={e => console.log(e)}></Wrapper>
    </>
  );
};

/**
 * Should work with Custom components
 */

const Custom = (props: { thisIsRequired: boolean }) => {
  return <a />;
};

const Example = () => {
  return (
    <>
      <Wrapper as={Custom} thisIsRequired />
      <Wrapper as={Custom} incorrectProps />
      <Wrapper as={Custom} />
    </>
  );
};
