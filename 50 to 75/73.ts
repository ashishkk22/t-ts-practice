//data fetcher with warning problem
const fetchData = async <TResult = "you must pass a type argument to fetchData">(url: string): Promise<TResult> => {
  const data = await fetch(url).then(res => res.json());
  return data;
};

const data = fetchData("hii give me the data")

const data2 = fetchData<{id: string}>("asdfadsf")
