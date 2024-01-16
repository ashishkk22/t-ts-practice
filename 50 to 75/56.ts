const returnBothOfWhatIPassIn = <T1, T2>(params: {
  a: T1;
  b: T2;
}): [T1, T2] => {
  return [params.a, params.b];
};

//reduce from two generic (param) to one
const returnBothOfWhatIPassInAns = <TParams extends { a: unknown; b: unknown }>(
  params: TParams
): [TParams["a"], TParams["b"]] => {
  return [params.a, params.b];
};
