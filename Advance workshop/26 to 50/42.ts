/**
 * QS
 * //Create a type safe request handler with zod and express

import { RequestHandler } from "express"
import { z, ZodError } from "zod"
import express from "express"

const makeTypeSafeHandler = (
    config: {
        query?: z.Schema,
        body?: z.Schema
    },
    handler: RequestHandler
): RequestHandler => {
    return (req, res, next) => {
        const { query, body } = req;
        if(config.query){
            try{
                config.query.parse(query);
            }catch(e){
                return  res.status(400).send((e as ZodError).message)
            }
        }
        if(config.body){
            try{
                config.body.parse(body);
            }catch(e){
                return res.status(400).send((e as ZodError).message)
            }
        }
        return handler(req, res, next);
    }
}

const app = express();

app.get("/users",makeTypeSafeHandler({
    query: z.object({
        id:  z.string(),
    }),
    body: z.object({
        name: z.string(),
    }),
},(req,res) => {
        
}))
 */

//Create a type safe request handler with zod and express

import { RequestHandler } from "express";
import { z, ZodError } from "zod";
import express from "express";
import { ParsedQs } from "qs";

const makeTypeSafeHandler = <
  TQuery extends ParsedQs = any,
  TBody extends Record<string, any> = any
>(
  config: {
    query?: z.Schema<TQuery>;
    body?: z.Schema<TBody>;
  },
  handler: RequestHandler<any, any, TBody, TQuery>
): RequestHandler<any, any, TBody, TQuery> => {
  return (req, res, next) => {
    const { query, body } = req;
    if (config.query) {
      try {
        config.query.parse(query);
      } catch (e) {
        return res.status(400).send((e as ZodError).message);
      }
    }
    if (config.body) {
      try {
        config.body.parse(body);
      } catch (e) {
        return res.status(400).send((e as ZodError).message);
      }
    }
    return handler(req, res, next);
  };
};

const app = express();

app.get(
  "/users",
  makeTypeSafeHandler(
    {
      query: z.object({
        id: z.string(),
      }),
      body: z.object({
        name: z.string(),
      }),
    },
    (req, res) => {}
  )
);
