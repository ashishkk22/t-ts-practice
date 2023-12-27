//return what ever we pass

type ReturnWhatIPassIn<T> = T;

type Something = ReturnWhatIPassIn<number>;

//return what even we pass with null and undefined

type ReturnWithNullAndUndefined<T> = T | null | undefined;

type ValueWithNullAndUndefined = ReturnWithNullAndUndefined<string>;
