//what is a branded type

declare const brand: unique symbol;

//{ [brand]: TBrand}; this object never satisfy at run time
//and above const brand also there at type level

// brand = "asdf" even we can't do this and this is also the const so we won't be able to do it

type Brand<T, TBrand> = T & { [brand]: TBrand };

type Password = Brand<string, "Password">;
type Email = Brand<string, "Email">;

type UserObject = Brand<
  {
    id: string;
    name: string;
  },
  "User"
>;

const user: UserObject = {
  id: "asdfasdf",
  name: "asfadsfdsf",
} as UserObject;

const verifyPassword = (pass: Password) => {};

// verifyPassword("ashish") //so here we can't pass like this

verifyPassword("ashish" as Password); // you have to mark it as Password or
