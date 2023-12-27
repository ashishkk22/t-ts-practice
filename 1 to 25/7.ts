//exclude the click event from the type Event

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
 * type ExcludedEvent = {
    type: "focus";
    event: FocusEvent;
} | {
    type: "keydown";
    event: KeyboardEvent;
}
 */

export type ExcludedEvent = Exclude<Event, { type: "click" }>;
