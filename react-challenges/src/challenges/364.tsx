//========================== OO ============================= //

/**
 * This component is supposed to take a loader function that returns a
 * component, and render that component when it' loaded.
 *
 * But it's not typed correctly, and it's not generic enough.
 * Fix the typing errors, and make it generic enough to support any component
 *
 * Hints:
 * - You'll need to make this generic component!
 * - React.ComponentProps will come in handy, as will React.ComponentType
 */

import { ComponentProps, ComponentType, Suspense, lazy, useMemo } from "react";

type Props<C extends ComponentType<any>> = {
  loader: () => Promise<{
    default: C;
  }>;
} & ComponentProps<C>;

function LazyLoad<C extends ComponentType<any>>({
  loader,
  ...props
}: Props<C>) {
  const LazyComponent = useMemo(() => lazy(loader), [loader]);

  return (
    <Suspense>
      <LazyComponent {...props} />
    </Suspense>
  );
}

<>
  <LazyLoad loader={() => import("../App")} id="123" />

  {/* <LazyLoad load/> */}
</>;
