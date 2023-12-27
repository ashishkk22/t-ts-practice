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
 * type EventType = "click" | "focus" | "keydown"
 */

//output => this will work on the discriminated union due to same key
type EventType = Event["type"];
