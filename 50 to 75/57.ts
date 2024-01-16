// const getValue = <TObj>(obj: TObj, key: keyof TObj) => {
const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
  return obj[key];
};

const obj = {
  a: 1,
  b: "some-string",
  c: true,
};

const numberResult = getValue(obj, "a");
// const numberResult: string | number | boolean but is should be number
/**const getValue: <{
    a: number;
    b: string;
    c: boolean;
}, "a">(obj: {
    a: number;
    b: string;
    c: boolean;
}, key: "a") => number
so here we are capturing the a to get the required type of the obj's key
*/
