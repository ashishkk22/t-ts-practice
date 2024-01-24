//Add Objects to the Global Window Object

const addAllOfThisToWindow = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
  divide: (a: number, b: number) => a / b,
};

//here we are adding all the methods to the global window
//yes we can declare it in the global like

/**
 * we can do this by adding them one by one but we need to find alternative way so we don't have to add manually
 * declare global{
 *      interface Window{
 *          add: typeof addAllOfThisToWindow.add;
 *      }
 * }
 */

declare global {
  /**
   * type Whatever = {
       a: typeof addAllOfThisToWindow.add;
       b: typeof addAllOfThisToWindow.divide
     }
   */

  type StuffToAdd = typeof addAllOfThisToWindow;

  interface Window extends StuffToAdd {}
}

Object.assign(window, addAllOfThisToWindow);

export {};
