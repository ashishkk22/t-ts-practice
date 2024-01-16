// infer the type of an member 
const makeStatus = <TStatuses extends string[] >(statuses: TStatuses) => {
    return statuses;
}

const statuses = makeStatus(["info","debug","error","warning"])

//ans
const makeStatusAns = <TStatuses extends string>(statuses: TStatuses[]) => {
  return statuses;
};

const statusesAns = makeStatusAns(["info", "debug", "error", "warning"]);

//tip: Go deeper instead of top level