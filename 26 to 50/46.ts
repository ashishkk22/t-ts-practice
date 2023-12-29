//Understanding the literal inference in generics

//when returning the value only, it infers the literal type

const returnsValueOnly = <T>(t: T) => {
    return t;
}

const result1 = returnsValueOnly("a")
// ^? const result1: "a"

//when returning an object or array, it doesn't infer the .literal type
// const reut 136