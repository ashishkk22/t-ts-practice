//object to union of tuples problem

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

//=========== ans =============//
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];
