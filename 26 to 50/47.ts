//literal inference on arguments explainer

//When returning the value only it infers the literal type

const acceptsValueOnly = <T>(t: T) => {
    return t;
}

const r1 = acceptsValueOnly("a")
// ^? const result: "a"

const acceptsValueInAnObject = <T>(obj: {input: T}) => {
    return obj.input;
}

const r2 = acceptsValueInAnObject({input: "ashish"})
// ^? const r2: string

const r3 = acceptsValueInAnObject({ input: "abc"} as const);
// ^? const r3: "abc"

const acceptsValueInAnObjectFieldWithConstraint = <T extends string>(obj: {input: T}) => {
    return obj.input;
}

const r4 = acceptsValueInAnObjectFieldWithConstraint({input: "ak"})
// ^? const r4: "ak"

const acceptsValueWithObjectConstraint = <T extends {input: string}>(obj: T) => {
    return obj.input;
}

const r5 = acceptsValueWithObjectConstraint({ input: "ashish"})
// ^? const r5: string

const r5WithAsConst = acceptsValueWithObjectConstraint({
    input: "ashish"
} as const)
// ^? const r5: string
