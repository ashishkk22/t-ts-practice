// Identity functions as an alternative to the as const

// export const asConst = <T>(t: T) => t;
export const asConst = <const T>(t: T) => t;

const fruits = asConst([
  {
    name: "apple",
    price: 1,
  },
  {
    name: "banana",
    price: 2,
  },
]);

//above will act as we specify the array as "as const"
