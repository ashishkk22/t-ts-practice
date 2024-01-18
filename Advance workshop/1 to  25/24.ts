/**
 * Fake external library
 */

const fetchUser = async (id: string) => {
  return {
    id,
    firstName: "john",
    lastName: "doe",
  };
};

const fetchPost = async (id: string) => {
  return {
    id,
    title: "Hello World",
    body: "This is a post that is great and is excessively long, much too long for an except",
  };
};

// ======================================== //

// the power of generics with builder pattern

type Middleware<TInput, TOutput> = (
  input: TInput
) => TOutput | Promise<TOutput>;

/**
 * In this problem, we need to type the return type of the user()
 * method to make it update the TOutput generic with a new one
 *
 * Currently, the use method just uses the same TOutput as the first middleware you pass in. But it should infer the _new_ output from the middleware you pass in.
 *
 */

class DynamicMiddleware<TInput, TOutput> {
  private middleware: Middleware<any, any>[] = [];

  constructor(firstMiddleware: Middleware<TInput, TOutput>) {
    this.middleware.push(firstMiddleware);
  }

  //Clue: you'll need to make changes here!
  /**
     * 
     *  use(middleware: Middleware<TInput,TOutput>): TOutput{
        this.middleware.push(middleware)
        return this as any;
        ^ You'll need the 'as any' !
    }
     */
  use<TNewOutput>(
    middleware: Middleware<TOutput, TNewOutput>
    //   ): DynamicMiddleware<TInput, TNewOutput> {
  ) {
    this.middleware.push(middleware);
    // return this as any;
    return this as unknown as DynamicMiddleware<TInput, TNewOutput>;
    //          ^ You'll need the 'as any' !
  }

  async run(input: TInput): Promise<TOutput> {
    let result: TOutput = input as any;

    for (const middleware of this.middleware) {
      result = await middleware(result);
    }
    return result;
  }
}

const middleware = new DynamicMiddleware((req: Request) => {
  return {
    ...req,
    userId: req.url.split("/")[2],
  };
})
  .use(req => {
    if (req.userId === "123") {
      throw new Error();
    }
    return req;
  })
  .use(async req => {
    return {
      ...req,
      user: await fetchUser(req.userId),
    };
  });
