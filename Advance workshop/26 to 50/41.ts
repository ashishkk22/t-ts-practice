//Narrowing_with_an_Array
import { F } from "ts-toolbelt";

interface Fruit {
  name: string;
  price: number;
}

//here even if we apply the F.Narrow than we should apply it on the top level
//not like below ex
// export const wrapFruit = <TFruit extends  Fruit>(fruits: F.Narrow<TFruit>[]) => {

export const wrapFruit = <TFruit extends Fruit[]>(fruits: F.Narrow<TFruit>) => {
  const getFruit = <TName extends TFruit[number]["name"]>(name: TName) => {
    return fruits.find(fruit => fruit.name === name) as Extract<
      TFruit[number],
      { name: TName }
    >;
  };

  return {
    getFruit,
  };
};

const fruits = wrapFruit([
  {
    name: "apple",
    price: 1,
  },
  {
    name: "banana",
    price: 2,
  },
]);

const banana = fruits.getFruit("banana");
const apple = fruits.getFruit("apple");
