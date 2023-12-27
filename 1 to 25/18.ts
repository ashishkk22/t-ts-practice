//so here TRoute must be the string
type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

//create the data shape

//if we don't
type CreateDataShape<TData, TError = undefined> = {
  data: TData;
  error: TError;
};

type StringDataShape = CreateDataShape<string, TypeError>;
