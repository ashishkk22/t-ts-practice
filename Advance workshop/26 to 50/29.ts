import _ from "lodash";
/**
 * We've made a reusable function here to group
 * arrays of objects by age. I want you to:
 *
 * 1. Make sure that the errors (below) disappear
 * 2. Take a look at the typings for _.groupBy to
 * see if you can understand them.
 */
type PersonDetail = {
  name: string,
  age: number
};

const groupByAge = <T extends { age: number}>(array: T[]) => {
  const grouped = _.groupBy<T>(array, "age");

  return grouped;
};

const result = groupByAge([
  {
    name: "ak",
    age: 22,
  },
  {
    name: "mk",
    age: 20,
  },
  {
    name: "ck",
    age: 18,
  },
  {
    name: "chk",
    age: 5,
  },
]);
