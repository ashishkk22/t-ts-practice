// Colocating_Types_for_Global_Interfaces

/**
 * Here, we've actually got _multiple_ profile files!
 * Make sure to check problem.2.ts too.
 */

declare global {
  interface DispatchableEvent {
    LOG_IN: {
      username: string;
      password: string;
    };
  }
}

/**
 * This type converts the DispatchableEvent
 * interface into a union:
 *
 * { type: "LOG_IN"; username: string; password: string; }
 */

type UnionOfDispatchableEvents = {
  [K in keyof DispatchableEvent]: {
    type: K;
  } & DispatchableEvent[K];
}[keyof DispatchableEvent];

const dispatchEvent = (event: UnionOfDispatchableEvents) => {};

export {};
