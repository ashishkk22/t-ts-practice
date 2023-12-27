type Route = "/" | "/about" | "/admin" | "/admin/users";

//sol 1
type RoutesObject = Record<Route, string>;

//sol 2 = same as record
type RoutesObject2<T1 extends string, T2> = {
  [R in T1]: T2;
};
