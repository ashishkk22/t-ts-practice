//extract the click event from the type Event

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

/** 
 * type ClickEvent = {
 *      type: "click",
 *      event: MouseEvent
 * }
 */

//output
type ClickEvent = Extract<Event, {type: "click"}>
