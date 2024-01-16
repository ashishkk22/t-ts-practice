//create a function with a dynamic number of arguments

interface Events {
  click: {
    x: number;
    y: number;
  };
  focus: undefined;
}
export const sendEvent = <TEventKey extends keyof Events>(
  event: TEventKey,
  ...args: Events[TEventKey] extends undefined
    ? []
    : [payload: Events[TEventKey]]
) => {
  //Send the even somewhere !
};
//here if we pass the click then it should force us to pass the second argument and if we have the undefined in the focus event then it should ask to pass the second argument

sendEvent("click", {x: 1,y:2});
sendEvent("focus");
