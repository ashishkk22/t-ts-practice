// Make_an_Express_Request_Function_Generic

import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from "express";

const app = express();

const makeTypeSafeGet =
  <TQuery extends Request["query"]>(
    parser: (queryParams: Request["query"]) => TQuery,
    handler: RequestHandler<any, any, any, TQuery>
  ) =>
  (req: Request<any, any, any, TQuery>, res: Response, next: NextFunction) => {
    try {
      parser(req.query);
    } catch (e) {
      res.status(400).send("Invalid query: " + (e as Error).message);
      return;
    }

    return handler(req, res, next);
  };

const getUser = makeTypeSafeGet(
  query => {
    if (typeof query.id !== "string") {
      throw new Error("You must pass an id !");
    }

    return {
      id: query.id,
    };
  },
  (req, res) => {
    //req.query should be EXACTLY the type returned from the parser above

    res.json({
      id: req.query.id,
      name: "ashish",
    });
  }
);

app.get("/user", getUser);
