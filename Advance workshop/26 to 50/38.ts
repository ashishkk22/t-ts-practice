// Find_the_Generic_Flow_of_an_Identity_Function

/**
 * fetchers is an object where you can optionally
 * pass keys that match the route names.
 *
 * BUT - how do we prevent the user from passing
 * fetchers that don't exist in the routes array?
 *
 * we'll need to change this to a function which takes in the
 * config as an argument.
 *
 * Desired API:
 *
 * const config = makeConfigObj(config);
 *
 */

export const configObj = {
  routes: ["/", "/about", "/contact"],
  fetchers: {},
};

//we can use this type of identity function to make the object
//and most of the minifier will remove the identity function so there won't be any extra function call

export const makeConfigObj = <TState extends string>(config: {
  routes: readonly TState[];
  fetchers: Record<TState, () => void>;
}) => config;

const config = makeConfigObj({
  routes: ["/", "/about"],
  fetchers: {
    "/": () => {},
    "/about": () => {},
  },
});
