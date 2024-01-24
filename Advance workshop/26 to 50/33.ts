import { z } from "zod";

const makeZodSafeFunction = <TArg, TResult>(
  schema: z.ZodType<TArg>,
  func: (arg: TArg) => TResult
) => {
  return (arg: TArg) => {
    const result = schema.parse(arg);
    return func(result);
  };
};

const addTwoNumbersArg = z.object({
  a: z.number(),
  b: z.number(),
});

const addTwoNumbers = makeZodSafeFunction(
  addTwoNumbersArg,
  args => args.a + args.b
);
