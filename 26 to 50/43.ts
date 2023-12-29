const array = [
  {
    name: "ashish",
  },
  {
    name: "mayank",
  },
];

const obj = array.reduce<Record<string, { name: string }>>((acc, item) => {
  acc[item.name] = item;
  return acc;
}, {});
