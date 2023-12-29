/**
 * discriminated union with unique values to object problem
 * output
 * {
 *      "/":{
 *              page: string;
 *              perPage: string
 *          };
 *      "/about": never; (if search property was not there)
 *          ...
 * }
 */
type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | {
      route: "/about";
    }
  | {
      route: "/admin";
    }
  | {
      route: "/admin/users";
    };

type RoutesObject = {
  //with any
  //   [K in Route as K["route"]]: K extends { search: any } ? K["search"] : never;

  //with infer
  [K in Route as K["route"]]: K extends { search: infer S } ? S : never;
};
