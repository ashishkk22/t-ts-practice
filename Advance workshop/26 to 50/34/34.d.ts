declare module "fake-animation-library" {
  export function getAnimatingState():
    | "before-animation"
    | "animating"
    | "after-animation";
}

//like this we can over ride fake-animation-library definition with this d ts file
