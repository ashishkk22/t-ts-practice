interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 22 }
>;
/** 
 * solution 1
 * type GetPoint<T> = T extends MyComplexInterface<any, any, any, any>
  ? ReturnType<T["getPoint"]>
  : never;
 */

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint
  : never;

type Points = GetPoint<Example>;
