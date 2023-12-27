//infer
//we have to return the data key's value

//sol 1
type GetDataValue<T> = T extends { data: any } ? T["data"] : never;

//sol 2
/**
 *  { data: infer TData } here we are telling that whatever passed in
 * just infer that's type
 * So it declare the TData just for the positive condition
 *
 */
type GetDataValue1<T> = T extends { data: infer TData } ? TData : never;

const getDataValue: GetDataValue<{ data: { huii: "huui" } }> = { huii: "huui" };
