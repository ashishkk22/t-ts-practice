/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 */

//A is a discriminated union
type A =
  | {
      type: "a";
      whatever: string;
    }
  | { type: "b"; something: string }
  | { type: "c"; whoCares: string };


const getUnion = ( result : A ) => {
    if(result.type === "a"){
        //Due to discriminated union here we can access the result.whatever
        const output = result.whatever + "hii";
    }
}

//B is a union, but not a discriminated union
type B = "a" | "b" | "c";

enum C {
  A = "a",
  B = "b",
  C = "c",
}
