import { F } from "ts-toolbelt";

// Specifying_Where_Inference_Should_Not_Happen

/**
 * Clue: F.NoInfer is part of the solution!
 *
 * You'll need to modify the interface below
 * to get it to work
 */

interface FSMConfig<TState extends string> {
  // initial: TState,
  initial: F.NoInfer<TState>;
  states: Record<
    TState,
    {
      onEntry?: () => void;
    }
  >;
}

//This is an identity function
export const makeFiniteStateMachine = <TState extends string>(
  config: FSMConfig<TState>
) => config;

const config = makeFiniteStateMachine({
  initial: "a",
  states: {
    a: {
      onEntry: () => {
        console.log("a");
      },
    },
    //b should be allowed to be specified !
    b: {},
  },
});

//so let's understand

const compare = <T>(a: T, b: T) => {
  return a === b;
};

compare(2, "123"); //here in ts first is going to be the favorite so it is going to inter it

//but if we add NoInfer then it will  infer the second one

const compareWithSecondInfer = <T>(a: F.NoInfer<T>, b: T) => {
  return a === b;
};

compareWithSecondInfer(1, "3"); //so here it will infer it as string
