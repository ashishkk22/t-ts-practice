import { ComponentProps, ReactNode } from "react";

// type Map = Record<string, ComponentProps<"button">>;

// const buttonPropsMap: Map = {
const buttonPropsMap = {
  reset: {
    className: "bg-blue-500 text-white",
    type: "reset",
    // illegalProperty: "whatever",
  },
  submit: {
    className: "bg-gray-200 text-black",
    type: "submit",
    // illegalProperty: "whatever",
  },
  next: {
    className: "bg-green-500 text-white",
    type: "button",
    // illegalProperty: "whatever",
  },
} satisfies Record<string, ComponentProps<"button">>;

type ButtonProps = {
  variant: keyof typeof buttonPropsMap;
  children?: ReactNode
};

const Button = (props: ButtonProps) => {
  return <button {...buttonPropsMap[props.variant]}>Click me</button>;
};

const Parent = () => {
  return (
    <>
      <Button variant="next">Next</Button>
      <Button variant="reset">Reset</Button>
      <Button variant="submit">Reset</Button>
    </>
  );
};
export default Parent;
