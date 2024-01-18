//0222_Combining_Brands_with_Assertion_Functions

declare const brand: unique symbol;

type Brand<T, TBrand> = T & { [brand]: TBrand };

type Valid<T> = Brand<T, "Valid">;

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

/**
 * You'll need to change this function
 */

function assertIsValidPassword(
  values: PasswordValues
): asserts values is Valid<PasswordValues> {
  if (values.password !== values.confirmPassword) {
    throw new Error("password is not ");
  }
}

const createUserOnApi = (values: Valid<PasswordValues>) => {
  //imagine this function creates the user on the API
};

const onSubmitHandler = (values: PasswordValues) => {
  //added assertion function so it the password is valid then we will get the values as asserted else it will throw the value
  createUserOnApi(values); //it will give the error as values is not validated
};

const onSubmitHandler2 = (values: PasswordValues) => {
  assertIsValidPassword(values);
  createUserOnApi(values);
};
