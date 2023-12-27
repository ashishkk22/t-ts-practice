//discriminated union to object problem

type Routes =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

/** This is useful, but less powerful than solution 2 */
type RoutesObject1 = {
  [R in Routes["route"]]: Extract<Routes, { route: R }>["search"];
};

/** 
 * Here, R represents the individual Route. The lesson here
 * is that the thing we're iterating doesn't have to be a 
 * string | number | symbol, as long as the thing we cast it to 
 * is.
 */

type RoutesObject_ = {
    [R in Routes as R["route"]] : R["search"]
}