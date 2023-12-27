//NonEmptyArray

type NonEmptyArrayWithEmptyArray<T> = T[]; // we can assign empty array

type NonEmptyArray<T> = [T, ...Array<T>]; // min one element has to be there

const a: NonEmptyArray<string> = [""];
