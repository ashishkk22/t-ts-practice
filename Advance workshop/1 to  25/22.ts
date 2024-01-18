// 0231_TRPC_s_Creator_on_the_Builder_Pattern

//alex creator of TRPC how builder pattern was implemented in it.

/**
 * const publicProcedure = t.procedure;
 * const router = t.router;
 *
 * const appRouter = router({
 *      greet: publicProcedure.input((val: unknown) => {
 *          if(typeof val === "string") return val;
 *          throw new Error("Invalid input")
 *      })
 * })
 *
 * In TRPC (builder pattern ) we can call it every time
 * and it return the object with some new behavior and we can call it self again and again
 */
