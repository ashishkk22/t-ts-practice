//Constraining_and_Narrowing_an_Identity_Function
//sol 1
// export const narrowFruits  = <const TFruits extends readonly {
export const narrowFruits = <
  const TFruits extends ReadonlyArray<{
    name: string;
    price: number;
  }>
>(
  t: TFruits
) => t;

const fruits = narrowFruits([
  {
    name: "apple",
    price: 1,
  },
  {
    name: "banana",
    price: 2,
  },
]);
