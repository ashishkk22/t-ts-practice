//typing a function composition with overloads and generics

// const compose = (...funcs: Array<(input: any) => any>) => (input: number) => {
//     return funcs.reduce((acc,fn) => fn(acc), input)
// }

// const addOne = (num: number) => {
//     return num + 1;
// }

// const addTwoAndStringify = compose(addOne,addOne,String)

// const r = addTwoAndStringify(22) //it should give the 24 as type level

//so here we have to check the function's return type and based on that we should get the result's return type
export function compose<T1, T2>(func: (t1: T1) => T2): (t1: T1) => T2;
export function compose<T1, T2, T3>(
  func1: (t1: T1) => T2,
  func2: (t2: T2) => T3
): (t1: T1) => T3;
export function compose<T1, T2, T3, T4>(
  func1: (t1: T1) => T2,
  func2: (t2: T2) => T3,
  func3: (t3: T3) => T4
): (t1: T1) => T4;
export function compose(...funcs: Array<(input: any) => any>) {
  return input => {
    return funcs.reduce((acc, fn) => fn(acc), input);
  };
}

const addOne = (num: number) => {
  return num + 1;
};

const addTwoAndStringify = compose(addOne, addOne, String);

const r = addTwoAndStringify(22); //it should give the 24 as type level

//this way used by re select library