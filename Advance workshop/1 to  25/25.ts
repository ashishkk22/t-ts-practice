// sub classing in zod
// zod was written with the classes

// Colin from zod explains how using subclasses can make generics
// look nice in intellisense.

type ZodString = {
    min: () => any;
    max: () => any;
    //20 -30 methods
} & ZodType<string, {}>;

type ZodType<T, ZodDef> = {
    //all the base methods
    parse: (input: unknown) => T;
}

const str: ZodString = {} as any;