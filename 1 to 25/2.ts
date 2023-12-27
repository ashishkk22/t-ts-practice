//2 =>  how to get the parameter of the function

const ak = (n: number, k: string) => {
  return n + k;
};

//so here we will get the array and we can
type FunctionParameter = Parameters<typeof ak>;
