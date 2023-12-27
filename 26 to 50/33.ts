// object to union of template literals problem
interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`;
}[keyof FruitMap];

//discriminated union to union problems

type DiscriminatedFruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

type TransformedFruitFromDiscriminatedUnion = {
  // [K in DiscriminatedFruit["name"]] : `${K}:${DiscriminatedFruit["color"]}` This will not work as we are directly taking the string as key instead take object and then with the as we can get the string and in the value we get that values
  [F in DiscriminatedFruit as F["name"]]: `${F["name"]}:${F["color"]}`;
}[DiscriminatedFruit["name"]];
