//ensure runtime level type level safety with conditional types

type GreetingResult<TGreeting> = TGreeting extends "hello" ? "goodbye" : "hello";

function youSayGoodByeISayHello<TGreeting extends "hello" | "goodbye">(greeting: TGreeting){
    // return greeting === "goodbye" ? "hello" : "goodbye"
    return greeting === "goodbye" ? "hello" : "goodbye" as TGreeting extends "goodbye" ? "hello" : "goodbye"
}

const hello = youSayGoodByeISayHello("hello")
