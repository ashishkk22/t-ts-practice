// function overloads vs conditional types

/** 
 * This time, let's try and solve this one
 * with function overloads too !
 */

function youSayGoodByeISayHello(greeting: "hello"): "goodbye";
function youSayGoodByeISayHello(greeting: "goodbye"): "hello"
function youSayGoodByeISayHello(greeting: "goodbye" | "hello") {
    return greeting === "goodbye" ? "hello" : "goodbye"
}