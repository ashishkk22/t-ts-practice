//reverse mapped types

//we won't be able to do it with record as it will give the union

export function makeEventHandlers<TObj>(obj: {
  [K in keyof TObj]: (arg: K) => void;
}) {
  return obj;
}

const obj = makeEventHandlers({
  click: click => {
    console.log(click);
  },
  focus: name => {
    console.log(name);
  },
});
