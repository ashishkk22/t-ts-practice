/**
 * This is a complex problem. We want to load a video form a URL and play it.
 * We also want to show a loading spinner while it loads, and an error message if it fails.
 *
 * The code is handling this with several different states: "loading", "loaded", and "error". But currently, the type of state is just string.
 *
 * 1. See if you can fix the errors below by making the type of state more specific.
 */
const fetchVideo = (src: string) => {
  return fetch("temp");
};

const appendVideoToDomAndPlay = (blob: any) => {
  console.log(blob);
};

import { useEffect, useState } from "react";

type LoaderState =
  | {
      status: "loading" | "loaded";
    }
  | {
      status: "error";
      error: Error;
    };

export const useLoadAsyncVideo = (src: string) => {
  const [state, setState] = useState<LoaderState>({
    status: "loaded",
  });

  useEffect(() => {
    setState({ status: "loading" });

    let cancelled = false;

    fetchVideo(src)
      .then(blob => {
        if (cancelled) {
          return;
        }

        appendVideoToDomAndPlay(blob);

        setState({ status: "loaded" });
      })
      .catch(error => {
        if (cancelled) {
          return;
        }
        setState({ status: "error", error: error });
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (state.status === "loading") return "loading";
  if (state.status === "loaded") return "loaded";
  if (state.status === "error") return "error";
};
