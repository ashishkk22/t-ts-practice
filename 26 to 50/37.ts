//deep partial problem
type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

//use recursion and mapped types to create a type helper

//In this solution we can add undefined in an array so we need to handle that case
// type DeepPartial<T> = { [K in keyof T] ?: DeepPartial<T[K]>}

//adding array case in the above solution
type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : { [K in keyof T]?: DeepPartial<T[K]> };

type DeepPartialType = DeepPartial<MyType>;
