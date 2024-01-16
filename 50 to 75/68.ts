// the instantiated with subtype error

const obj = {
  a: 1,
  b: 2,
  c: 3,
} as const;

type ObjKey = keyof typeof obj;
// const getObjValue = <TKey extends ObjKey>(key: TKey = "a") => {
//     return obj[key]
// }

//here
// const oneByDefault = getObjValue()// here it should handle this case also

function getObjValue<TKey extends ObjKey>(key: TKey): (typeof obj)[TKey];
function getObjValue<TKey extends ObjKey>(): (typeof obj)["a"];
function getObjValue<TKey extends ObjKey>(key?: TKey) {
  return obj[key ?? "a"];
}
