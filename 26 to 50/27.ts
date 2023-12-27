// ======================= LO ======================== //

type Fruit = "apple" | "banana" | "orange";

//will get never
//Problem here is Distributive conditional types
type AppleOrBanana = Fruit extends "apple" | "banana" ? Fruit : never;

//solutions
type AppleOrBanana1 = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? T
    : never
  : never;
