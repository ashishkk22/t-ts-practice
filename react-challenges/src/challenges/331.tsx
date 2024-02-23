/**
 * Let's take a look at context in react. Here, we're creating
 * an abstraction that let's us create a context without having to worry about the context value being null.
 *
 * As you can see, it exposes a special useContext hook and
 * a Provider component that we can use to wrap our application
 *
 * But currently, It's not inferring any type information form our createRequiredContext function.
 *
 * 1. See if you can fix it!
 */
import React from "react";

const createRequiredContext = <T,>() => {
  const context = React.createContext<T | null>(null);

  const useContext = (): T => {
    const contextValue = React.useContext(context);

    if (contextValue === null) {
      throw new Error("context value is null");
    }
    return contextValue;
  };
  return [useContext, context.Provider] as const;
};

const [useUser, UserProvider] = createRequiredContext<{
  name: string;
}>();

const [useTheme, ThemeProvider] = createRequiredContext<{
  primaryColor: string;
}>();

const Child = () => {
  const user = useUser();

  const theme = useTheme();

  return null;
};

const Parent = () => {
  return (
    <>
      <UserProvider value={{ name: "ashish" }}>
        <ThemeProvider
          value={{
            primaryColor: "red",
          }}
        >
          <Child />
        </ThemeProvider>
      </UserProvider>
    </>
  );
};
