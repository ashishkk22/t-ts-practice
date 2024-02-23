/**
 * Here, we've got a hook that returns a tuple of [value, setValue]
 *
 * But if we hover over id and setId below, you'll see that they're both inferred as string | React.Dispatch<React.SetStateAction<string>>,
 * which is not ideal.
 *
 * 1. Find a way to fix the errors below.
 */

import { useState } from "react";

export const useId = (defaultId: string) => {
  const [id, setId] = useState(defaultId);

  return [id, setId] as const;
};

const [id, setId] = useId("1");

id.toUpperCase(); //so here why we are getting error ? id is already inferred as string

// as const => after adding the const it will treat as tuple and read only
