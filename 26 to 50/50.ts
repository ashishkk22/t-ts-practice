const createClassNamesFactory =
  (classes: unknown) =>
  (type: unknown, ...otherClasses: unknown[]) => {
    const classList = [classes[type], ...otherClasses];
    return classList.join(" ");
  };

const getBg = createClassNamesFactory({
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
});

//================= Ans ================= //

const createClassNamesFactoryAns1 =
  <TVariant extends string>(classes: Record<TVariant, string>) =>
  (type: TVariant, ...otherClasses: string[]) => {
    const classList = [classes[type], ...otherClasses];
    return classList.join("");
  };

const getBgAns1 = createClassNamesFactoryAns1({
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
});

const createClassNamesFactoryAns2 =
  <TClasses extends Record<string, string>>(classes: TClasses) =>
  (type: keyof TClasses, ...otherClasses: string[]) => {
    const classList = [classes[type], ...otherClasses];
    return classList.join(" ");
  };
const getBgAns2 = createClassNamesFactoryAns2({
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
});

function createClassName(obj) {
  return function (type, ...otherclasses) {
    const classesList = [obj[type], ...otherclasses];
    return classesList.join(" ");
  };
}
