//type helpers with constraints problem

/**
 * Here we can use object or Record<string, any>
 * here lowercase object represent objects
 *
 * type AllOrNothing<T extends object> = T | ToUndefined
 * type AllOrNothing<T extends Record<string, any>> = T | ToUndefined
 *
 */

type AllOrNothing<T extends object> = T | ToUndefinedObject<T>;

type ToUndefinedObject<T extends object> = Partial<Record<keyof T, undefined>>;

/**
 * There's a problem with our AllOrNothing type. It's letting
 * us pass Anything as T. We want to constrain it so that it only works with objects
 */

// const toUndefinedObject  = (t: object) => {
//   return {}
// }

//lower case object re present object

const React311 = () => {
  return <div>React311</div>;
};

export default React311;
