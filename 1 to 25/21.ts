//if hello => goodbye
//goodbye => hello
// and returning never if we pass something else

type YouSayGoodByeAndISayHello<T> = T extends "hello" | "goodbye"
  ? T extends "hello"
    ? "goodbye"
    : "hello"
  : never;

const aa: YouSayGoodByeAndISayHello<"hello"> = "goodbye";

const ab: YouSayGoodByeAndISayHello<"goodbye"> = "hello";
