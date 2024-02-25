// typing higher order function

type Router = {
  pathName: string;
};

const useRouter = () => {};
export const withRouter = <TProps,>(Component: React.FC<TProps>) => {
  const NewComponent = (props: Omit<TProps, "router">) => {
    const router = useRouter();
    return <Component {...(props as TProps)} router={router} />;
  };

  NewComponent.displayName = `withRouter(${Component.displayName})`;
  return NewComponent;
};

const UnwrappedComponent = (props: { router: Router; id: string }) => {
  return null;
};

const WrappedComponent = withRouter(UnwrappedComponent);

<>
  {/* expect a error needs a router  */}
  <UnwrappedComponent id="123" />

  {/** Doesn't need a router passed in! */}
  <WrappedComponent id="123" />

  {/* id must be correct properly */}
  <WrappedComponent id={134} />
</>;
