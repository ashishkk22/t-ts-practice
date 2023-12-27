//k in keyof problem

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K];
};

// ======= k in keyof as problem ======== //
//instead of the firstName we have to map it to getFirstName

type AttributeGettersWithModification = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};
