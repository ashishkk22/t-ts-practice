import { ComponentProps } from "react";

const buttonProps = {
    type: "button",
    //This should be erroring! Why isn't it ?
    //illegalProperty: "I AM ILLEGAL",
    //so after adding : ComponentProps<"button"> the error goes
    //but if we add this with as then we are able to add the ComponentProps so instead of that we can use satisfies 
} satisfies ComponentProps<"button">

const Test4 = () => {
  return (
    <button {...buttonProps}>Test4</button>
  )
}

// const buttonPropType = buttonProps.type;

export default Test4