//generics
//typescript function with generics

const returnWhatIPassIn = <T extends string>(param: T) => {
  return param;
};

// const one = returnWhatIPassIn(1) // error
const matt = returnWhatIPassIn("matt");

//typing independent parameters
const returnBothOfWhatIPassIn = <A, B>(a: A, b: B) => {
  return {
    a,
    b,
  };
};

returnBothOfWhatIPassIn("1", "2");
