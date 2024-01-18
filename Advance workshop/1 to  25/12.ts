//Filtering with type predicate

const values = ["a", "b", undefined, "c", undefined];

//This sol is a little ugly ! The much better one is sol number 2!
const filteredValues = values.filter(value => Boolean(value)) as string[];

//type predicate
//but type predicate is about safe as "as"
const filteredValues2 = values.filter((value): value is string =>
  Boolean(value)
);

//should filter out the undefined values
//should be type of "string[]"
