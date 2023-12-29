const typedObjectKeys1 = <TObject extends string>(
  obj: Record<TObject, any>
) => {
  return Object.keys(obj);
};

const typedObjectKeys = (obj: Record<string, any>) => {
  return Object.keys(obj);
};

const result = typedObjectKeys({
  a: 1,
  b: 2,
});
