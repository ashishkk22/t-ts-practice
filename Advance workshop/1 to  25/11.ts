/**
 * How do we add a LOG_OUT and UPDATE_USERNAME events to the
 * DispatchableEvent interface from WITHIN this file ?
 */

/**
 * The problem we are solving using the colocation with the global types
 * and here with this we are defining the types close to the place where we are using it
 */

/**
 * We can use this type of type in library and with the declaring the types in global we are giving opportunity to user to update the interface of the library
 */

declare global {
  interface DispatchableEvent {
    LOG_OUT: {
      username: string;
      password: string;
    };
    UPDATE_USERNAME: {
      username: string;
    };
  }
}
export {};
type UnionOfDispatchableEvents = {
  [K in keyof DispatchableEvent]: {
    type: K;
  } & DispatchableEvent[K];
}[keyof DispatchableEvent];

const handler = (event: UnionOfDispatchableEvents) => {
  switch (event.type) {
    case "LOG_OUT":
      console.log("LOG_OUT");
      break;
    default:
      break;
  }
};
