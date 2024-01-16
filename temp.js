//create a pick function
const pick = (obj, picked) => {
  return picked.reduce((acc, key) => {
    console.log(acc[key], "first")
    console.log(acc)
    console.log(obj[key], "second")
   key = obj[key];
    return acc;
  }, {});
};

const result = pick(
  {
    a: 1,
    b: 1,
  },
  ["a", "b"]
);

console.log(result)