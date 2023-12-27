//extends the function that has any parameter and can return anything
type GetParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

//==================================//

//remove the null or undefined from the type
export type Maybe<T> = T | null | undefined;

//to do that we can extends it with {}
//this is not truthy or falsy as we can assign true or false also
/** we can assign { name: "ak"} to { } but why we are able to assign string
 *  "ak" => {} : so in the ts it is going to be structural comparison so that's why string is after all the object so that's why we are able to assign it
 */
export type Maybe2<T extends {}> = T | null | undefined;

const whatever: {} = undefined; // error
const whatever2: {} = "22"; // no error
