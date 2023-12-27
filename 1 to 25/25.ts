// this is the getServerSideProps function and we have to extract the returned object's props key's value.
const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();

  return {
    props: {
      json,
    },
  };
};

type InferPropsFromServerSideFunction<T> = T extends () => Promise<{
  props: infer P;
}>
  ? P
  : never;

type GetServerSidePropsData = InferPropsFromServerSideFunction<typeof getServerSideProps>