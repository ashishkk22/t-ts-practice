// declare const brand: unique symbol;

// type Brand<T, TBrand> = T & { [brand]: TBrand };

import { Brand } from "./_brand";

type Password = Brand<string, "Password">;
type Email = Brand<string, "Email">;
/**
 * 
export const validateValues = (values: {email: string, password: string}) => {
    if(!values.email.includes("@")){
        throw new Error("Email invalid")
    }
    if(values.password.length < 8){
        throw new Error("Password not long enough")
    }

    return {
        email: values.email,
        password: values.password
    }
}

const createUserOnApi = (values: {email: Email, password: Password}) => {
    //Imagine this function creates the user on the API
}

const onSubmitHandler = (values: {email: string; password: string}) => {
    const validateVal = validateValues(values);

    createUserOnApi(validateVal)
}

 */

export const validateValues = (values: { email: string; password: string }) => {
  if (!values.email.includes("@")) {
    throw new Error("Email invalid");
  }
  if (values.password.length < 8) {
    throw new Error("Password not long enough");
  }

  return {
    email: values.email as Email,
    password: values.password as Password,
  };
};

//here if we use something like this then we are going to have the logical surety this email and password will be checked with our logic and it won't be a simple string
const createUserOnApi = (values: { email: Email; password: Password }) => {
  //Imagine this function creates the user on the API
};

const onSubmitHandler = (values: { email: string; password: string }) => {
  const validateVal = validateValues(values);

  createUserOnApi(validateVal);
};
