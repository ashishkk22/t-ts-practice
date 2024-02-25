//The problem with forward ref

import { ForwardedRef, forwardRef, useRef } from "react";

type Props<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

/**
 * Try uncommenting the following code. You'll see that the type of the 'row'
 * props is inferred to be 'string'
 */

//if we in comment this then it works

//so in the next exercise let's see how we can fix it without using the global definition

// declare module "react" {
//   function forwardRef<T, P = {}>(
//     render: (props: P, ref: React.Ref<T>) => React.ReactNode
//   ): (props: P & React.RefAttributes<T>) => React.ReactNode;
// }

/**
 * By ditching defaultProps and propTypes on the passed ro render,
 * we can make use of something called 'higher order function type inference'
 *
 * By doing it this way, we preserve the generic context of the function being passed
 * in.
 */

export const Table = <T,>(
  props: Props<T>,
  ref: ForwardedRef<HTMLTableElement>
) => {
  return <table ref={ref} />;
};

const ForwardedRefTable = forwardRef(Table);

const Parent = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const wrongRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ForwardedRefTable
        ref={tableRef}
        data={["123"]}
        renderRow={row => {
          return <div>123</div>;
        }}
      />
      <ForwardedRefTable
        ref={wrongRef}
        data={["123"]}
        renderRow={row => {
          return <div>123</div>;
        }}
      />
    </>
  );
};
