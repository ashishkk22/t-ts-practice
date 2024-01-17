// Mocks a function that users an API to convert
//One currency to another

//QS

/**
 * 
interface User {
  id: string;
  name: string;
  maxConversionAmount: number;
}

const getConversionRateFromAPI = async (
  amount: number,
  from: string,
  to: string
) => {
  return Promise.resolve(amount * 0.82);
};

//Mocks a function which actually performs the conversion
const performConversion = async (user: User, to: string, amount: number) => {};

const ensureUserCanConvert = (user: User, amount: number): User => {
  if (user.maxConversionAmount < amount) {
    throw new Error("User cannot convert currency");
  }
  return user;
};

//should error if you do not authorize the user first
const handleConversionRequest = async (user: User, from: string, to: string, amount: number) => {
    const convertedAmount = await getConversionRateFromAPI(amount, from , to);

    await performConversion(user, to, convertedAmount);
}

//should error if you do not convert the amount first
const handleConversionRequest2 = async(user: User, from: string, to: string, amount: number) => {
    const authorizedUser = ensureUserCanConvert(user, amount)

    await performConversion(authorizedUser, to, amount)
}

//should pass type checking if you authorize the user AND convert the amount
const handleConversionRequest3 = async(user: User, from:string, to:string, amount:number) => {
    const convertedAmount = await getConversionRateFromAPI(amount, from, to)
    const authorizedUser = ensureUserCanConvert(user, convertedAmount);

    await performConversion(authorizedUser,to, convertedAmount)
}
 */

// Ans
import {Brand} from "./_brand"

interface User {
  id: string;
  name: string;
  maxConversionAmount: number;
}

type ConvertedAmount = Brand<number, "Conversion">;
type AuthorizedUser = Brand<User, "AuthorizedUser">;

const getConversionRateFromAPI = async (
  amount: number,
  from: string,
  to: string
) => {
  //   return Promise.resolve(amount * 0.82) as Promise<ConvertedAmount>;
  return Promise.resolve((amount * 0.82) as ConvertedAmount);
};

//Mocks a function which actually performs the conversion
const performConversion = async (
  user: AuthorizedUser,
  to: string,
  amount: number
) => {};

const ensureUserCanConvert = (
  user: User,
  amount: ConvertedAmount
): AuthorizedUser => {
  if (user.maxConversionAmount < amount) {
    throw new Error("User cannot convert currency");
  }
  return user as AuthorizedUser;
};

//should error if you do not authorize the user first
const handleConversionRequest = async (
  user: User,
  from: string,
  to: string,
  amount: number
) => {
  const convertedAmount = await getConversionRateFromAPI(amount, from, to);

  await performConversion(user, to, convertedAmount);
};

//should error if you do not convert the amount first
const handleConversionRequest2 = async (
  user: User,
  from: string,
  to: string,
  amount: number
) => {
  const authorizedUser = ensureUserCanConvert(user, amount);

  await performConversion(authorizedUser, to, amount);
};

//should pass type checking if you authorize the user AND convert the amount
const handleConversionRequest3 = async (
  user: User,
  from: string,
  to: string,
  amount: number
) => {
  const convertedAmount = await getConversionRateFromAPI(amount, from, to);
  const authorizedUser = ensureUserCanConvert(user, convertedAmount);

  await performConversion(authorizedUser, to, convertedAmount);
};
