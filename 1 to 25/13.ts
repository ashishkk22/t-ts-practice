//template literal

export const goToRoute = (route: Route) => {};

type Route = `/${string}`;

goToRoute("/ashish");

// ======================================//

//we are having the Routes (dynamic and simple) => extract the dynamic routes

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type DynamicRoutes = Extract<Routes, `${string}:${string}`>;

// ===================================== //

//combination with template literal

type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

type SandWich = `${BreadType} sandwich with ${Filling}`;

//=======================================//

//splitting strings solutions

import { S } from "ts-tstoolbelt";
type Path = "Users/split/string/solutions";

type SplitPath = S.Split<Path, "/">;
