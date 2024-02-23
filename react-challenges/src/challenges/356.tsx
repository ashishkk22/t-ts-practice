declare global {
  namespace React {
    interface MyAwesomeInterface {
      foo: string;
    }
  }
}

/**
 * we can use a feature called declaration merging in ts to
 * CHANGE interfaces in the global namespace.
 *
 * WITHOUT changing the code above, change MyAwesomeInterface to add
 * a property called 'bar' that is a string
 *
 * Clue: you'll need to use declare global, namespace and interface again.
 *
 */

declare global {
  namespace React {
    interface MyAwesomeInterface {
      bar: string;
    }
  }
}

type Example = React.MyAwesomeInterface;

const ex: Example = {
  foo: "aello",
  bar: "Hi",
};

export {};
