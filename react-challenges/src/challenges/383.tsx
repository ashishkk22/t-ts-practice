import {
  ComponentProps,
  ElementType,
  ForwardedRef,
  forwardRef,
  useRef,
} from "react";

// ================ distributive omit ============= //

type Union =
  | {
      a: "a";
      user?: string;
    }
  | {
      b: "b";
      user?: string;
    };

type WithoutUser = Omit<Union, "user">; // return type WithoutUser = {}
//so omit is not distributive over each member

type WithoutUser2 = DistributiveOmit<Union, "user">; // so here it calls the omit on the each of the level

//===============================================//

/**
 * FYI - this solution took me the best part of a whole day to find,
 * and the help of several TS experts in the community
 *
 * So don't feel bad if you don't find it at all
 */

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

//added a distributive omit type

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

//here if we use the normal omit then it won't work so we have to use the distributive omit to make it work

export const UnwrappedLink = <TAs extends ElementType>(
  props: {
    as?: TAs;
  } & DistributiveOmit<
    React.ComponentPropsWithRef<
      //If TAs is the default, pass it 'a' instead
      ElementType extends TAs ? "a" : TAs
      //but if TAs has a value that ins't the default, pass it that
    >,
    "as"
  >,
  ref: ForwardedRef<any>
) => {
  const { as: Comp = "a", ...rest } = props;
  return <Comp {...rest} ref={ref}></Comp>;
};

const Link = fixedForwardRef(UnwrappedLink);

/**
 * Should work without specifying 'as'
 */

const Example1 = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const wrongRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Link ref={ref} onClick={e => console.log(e)}></Link>
      <Link as="a" ref={wrongRef}></Link>
    </>
  );
};

<>
  <Link as="button" onClick={e => console.log(e)}></Link>
</>;
