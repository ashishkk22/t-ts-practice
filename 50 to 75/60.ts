// the partial inference problem

export const makeSelectors = <
  TSource,
  TSelectors extends Record<string, (source: TSource) => any> = {}
>(
  selectors: TSelectors
) => {
  return selectors;
};

interface Source {
  firstName: string;
  middleName: string;
  lastName: string;
}

/**
 * We've got a problem here. We want to able to infer the type
 * of the selectors object from what we passed in to makeSelectors.
 *
 * But we can't. As soon as we pass ONE type argument, inference doesn't work
 * on the other type arguments. We want to refactor this
 * so that we can infer the type of the selectors object.
 *
 * Desired API:
 *
 * makeSelectors<Source>()({ ...selectorsGoHere })
 */

// const selectors = makeSelectors<Source>({
//     getFullName: (source) => `${source.middleName} ${source.middleName} ${source.lastName}`,
//     getFirstAndLastName: (source) => `${source.firstName} ${source.lastName}`,
//     getFirstNameLength: (source) => source.firstName.length
// })

export const makeSelectorsAns =
  <TSource>() =>
  <TSelectors extends Record<string, (source: TSource) => any>>(
    selectors: TSelectors
  ) => {
    return selectors;
  };

const firstFunc = makeSelectorsAns<Source>();

const selectorsAns = firstFunc({
  getFullName: source => `${source.firstName}`,
});
