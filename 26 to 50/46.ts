//Understanding the literal inference in generics

//when returning the value only, it infers the literal type

const returnsValueOnly = <T>(t: T) => {
    return t;
}

const result1 = returnsValueOnly("a")
// ^? const result1: "a"

//when returning an object or array, it doesn't infer the .literal type
const returnsValueInAnObject = <T1> (t: T1) => {
    return {
        t
    }
}

const result2 = returnsValueInAnObject("abc")
// ^? const result2: {
//   t: string;
// };

//with a constraint, it narrows it to its literal
const returnsValuesInAnObjectWithConstraint = <T1 extends string>(t: T1) => {
    return {
        t
    }
}

const result3 = returnsValuesInAnObjectWithConstraint("ak")
// ^? const result3: {
//      t: "ak";
//    }