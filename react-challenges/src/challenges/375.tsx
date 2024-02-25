// typing higher order function

type Router = {
  pathName: string;
};

const useRouter = () => {};
export const withRouter = <TProps,>(
  Component: (props: TProps) => React.ReactNode
): ((props: Omit<TProps, "router">) => React.ReactNode) => {
  const NewComponent = (props: Omit<TProps, "router">) => {
    const router = useRouter();
    return <Component {...(props as TProps)} router={router} />;
  };

  NewComponent.displayName = `withRouter(${
    (
      Component as {
        displayName?: string;
      }
    ).displayName
  })`;
  return NewComponent;
};

type TableProps<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
  router: Router;
};

export const Table = <T,>(props: TableProps<T>) => {
  return <table />;
};

const WrappedTable = withRouter(Table);

<>
  <Table
    data={[1, 2, 3]}
    renderRow={row => {
      return <tr />;
    }}
  />

  <WrappedTable
    data={[1, 2, 3]}
    renderRow={row => {
      return <tr />;
    }}
  />
</>;
