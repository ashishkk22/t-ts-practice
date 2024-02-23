//build a use mutation hook

import { useState } from "react";

/**
 * 
type MutationBase = (...args: any[]) => Promise<any>;

interface UseMutationReturn<TMutation extends MutationBase> {
  mutate: TMutation;
  isLoading: boolean;
}

interface UseMutationOptions<TMutation extends MutationBase> {
  mutation: TMutation;
}

export const useMutation = <TMutation extends MutationBase>(
  opts: UseMutationOptions<TMutation>
): UseMutationReturn<TMutation> => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    mutate: async (...args) => {
      setIsLoading(true);
      try {
        const result = await opts.mutation(...args);
        return result;
      } catch (e) {
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    isLoading,
  };
};

So here like the above if we capture the whole function then we will get error
and handling whole function in ts will be very complex so instead of this approach we can capture the args and return type in the generics

 */
type Mutation<TArgs extends any[], TReturn> = (
  ...args: TArgs
) => Promise<TReturn>;

interface UseMutationReturn<TArgs extends any[], TReturn> {
  mutate: Mutation<TArgs, TReturn>;
  isLoading: boolean;
}

interface UseMutationOptions<TArgs extends any[], TReturn> {
  mutation: Mutation<TArgs, TReturn>;
}

export const useMutation = <TArgs extends any[], TReturn>(
  opts: UseMutationOptions<TArgs, TReturn>
): UseMutationReturn<TArgs, TReturn> => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    mutate: async (...args) => {
      setIsLoading(true);
      try {
        const result = await opts.mutation(...args);
        return result;
      } catch (e) {
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    isLoading,
  };
};

// ============================================== //

/**
 * A fake function to create a user
 */

export const createUser = (
  user: {
    name: string;
    email: string;
  },
  opts?: {
    throwOnError?: boolean;
  }
): Promise<{ id: string; name: string; email: string }> => {
  return fetch("/user", {
    method: "POST",
    body: JSON.stringify(user),
  }).then(res => res.json());
};

// ============================================= //

const mutation = useMutation({
  mutation: createUser,
});

mutation.mutate({ name: "ashish", email: "ashishkachhadiya22@gmail.com" });
