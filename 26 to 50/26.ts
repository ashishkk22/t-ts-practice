const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

//Sol: this works but looks ugly
type GetParserResult<T> = T extends {
  parse: () => infer TResult;
}
  ? TResult
  : T extends () => infer TResult
  ? TResult
  : T extends {
      extract: () => infer TResult;
    }
  ? TResult
  : never;

//Opt Sol
type GetParserResult1<T> = T extends
  | {
      parse: () => infer TResult;
    }
  | {
      extract: () => infer TResult;
    }
  | (() => infer TResult)
  ? TResult
  : never;
