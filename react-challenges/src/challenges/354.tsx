/**
 * It's actually possible to change things in the global namespace in typescript
 *
 * 1. Add a declaration for React.MyInterface to the global React
 * Namespace below
 */

declare global {
  namespace React {
    interface MyInterface {
      foo: string;
    }
  }
}

type Test = React.MyInterface;

export {};
