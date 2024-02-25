import { ComponentProps, ElementType } from "react";

// export const Link = <TAs extends ElementType = "a">(
// or we can use the condition type in the ComponentPropsWithoutRef
export const Link = <TAs extends ElementType>(
  props: {
    as?: TAs;
  } & React.ComponentPropsWithoutRef<
    //If TAs is the default, pass it 'a' instead
    ElementType extends TAs ? "a" : TAs
    //but if TAs has a value that ins't the default, pass it that
  >
) => {
  const { as: Comp = "a", ...rest } = props;
  return <Comp {...rest}></Comp>;
};

/**
 * Should work without specifying 'as'
 */

const Example1 = () => {
  return (
    <>
      <Link doesNotExist></Link>
      <Link onClick={e => console.log(e)}></Link>
    </>
  );
};

<>
  <Link as="button" onClick={e => console.log(e)}></Link>
</>;
