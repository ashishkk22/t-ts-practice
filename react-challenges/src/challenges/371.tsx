//The problem with forward ref
/**
 * Using the forward-ref-with-generics explanation as a guide,
 * give fixedForwardRef a type signature that allows it to
 * work with the example below.
 */

import { ForwardedRef, forwardRef, useRef } from "react";

type Props<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

// function fixedForwardRef<T, P = {}>(
//   render: (props: P, ref: React.Ref<T>) => React.ReactNode
// ): (props: P & React.RefAttributes<T>) => React.ReactNode {
//   return forwardRef(render) as any;
// }

// so here instead of function we can create the type

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

export const Table = <T,>(
  props: Props<T>,
  ref: ForwardedRef<HTMLTableElement>
) => {
  return <table ref={ref} />;
};

const ForwardedRefTable = fixedForwardRef(Table);

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
