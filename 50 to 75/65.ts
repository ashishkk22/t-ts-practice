//generics in function overloads
function returnWhatIPassInExceptFor1(t: 1): 2;
function returnWhatIPassInExceptFor1<T>(t: T): T;
function returnWhatIPassInExceptFor1(t) {
  return t;
}

const result = returnWhatIPassInExceptFor1(1);
const result2 = returnWhatIPassInExceptFor1("ashish");
