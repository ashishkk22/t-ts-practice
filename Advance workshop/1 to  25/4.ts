//creating reusable validity checks with branded types and type helpers

import { Brand } from "./_brand";

//really a nice way on the object level instead of string or number

type Valid<T> = Brand<T, "Valid">;

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

export const validatePassword = (values: PasswordValues) => {
  if (values.password !== values.confirmPassword) {
    throw new Error("Password do not match");
  };
  return values as Valid<PasswordValues>;
};

const createUserOnApi = (values: Valid<PasswordValues>) => {
  //Imagine this function creates the user on the API
};

const onSubmitHandler = (values: PasswordValues) => {
  const validateVal = validatePassword(values);

  createUserOnApi(validateVal);
};

onSubmitHandler({ confirmPassword: "", password: "" });
