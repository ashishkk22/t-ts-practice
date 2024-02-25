// as prop in react
/**
 * The 'as' prop is notorious for being difficult to type correctly.
 *
 * Here, we've created a component that takes an 'as' prop. The 'as' prop
 * is a string representing the HTML tag to render. The component will render that tag,
 * and pass all other props through.
 *
 * BUT currently the types of the props that go along with the 'as' prop
 * are not inferred correctly.
 *
 * I've found two solutions. THe first use an immediately indexed mapped type
 *
 * The second uses a generic type.
 *
 * Both solutions make use of:
 * - JSX.IntrinsicElements
 * - Keyof
 * - 'as'
 * - Indexed access types
 */

import { ComponentProps } from "react";

/**
 *
 * we have to create the Wrapper shape like below
 * type WrapperShape =
  | ({
      as: "div";
    } & ComponentProps<"div">)
  | ({ as: "button" } & ComponentProps<"button">);
 */
// type WrapperProps = {
//   [Element in keyof JSX.IntrinsicElements]: {
//     as: Element;
//   } & ComponentProps<Element>;
// }[keyof JSX.IntrinsicElements];

/**
 * type WrapperProps = {
  [Element in keyof JSX.IntrinsicElements]: {
    as: Element;
  } & ComponentProps<Element>;
}[keyof JSX.IntrinsicElements];
This will work but this is going to be very slow ( due to massive union types )
 */

export const Wrapper = <TAs extends keyof JSX.IntrinsicElements>(
  props: {
    as: TAs;
  } & React.ComponentProps<TAs>
) => {
  const Comp = props.as as string;
  // return <Comp {...(props as any)}></Comp>;
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
