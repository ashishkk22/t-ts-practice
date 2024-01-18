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

const isValidPassword = (
  values: PasswordValues
): values is Valid<PasswordValues> => {
  if (values.password !== values.confirmPassword) {
    return false;
  }
  return true;
};

const createUserOnApi = (values: Valid<PasswordValues>) => {
  //imagine this function creates the user on the API
};

const onSubmitHandler = (values: PasswordValues) => {
  //added the type predicate in the isValidPassword function so that's why we can get the value as asserted as valid
  createUserOnApi(values); //it will give the error as values is not validated
};

const onSubmitHandler2 = (values: PasswordValues) => {
  if (isValidPassword(values)) {
    createUserOnApi(values);
  }
};
