//make an infinite scroll function generic with correct type inference
type MakeInfiniteScrollParams<TRow> = {
  key: keyof TRow;
  initialRows?: TRow[];
  fetchRows: () => Promise<TRow[]> | TRow[];
};
const makeInfiniteScroll = <TRow>(params: MakeInfiniteScrollParams<TRow>) => {
  const data = params?.initialRows || [];
  const scroll = async () => {
    const rows = await params?.fetchRows();
    data.push(...rows);
  };
  return {
    scroll,
    getRows: () => data,
  };
};
