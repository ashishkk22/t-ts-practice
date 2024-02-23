import { ReactNode } from "react";

/**
 * Try to understand the type of OptionType. What's the _brand property for ?
 *
 * There's an error happening at <Option /> below. Why is that ?
 *
 * Try changing <Option /> to {Option()}. This appears to work. Why ?
 * And why is this NOT a good idea ?
 *
 * Is what we're attempting to do even possible ?
 */

type OptionType = {
  _brand: "OPTION_TYPE";
} & ReactNode;

const Option = () => {
  return (<option></option>) as OptionType;
};

const Select = (props: { children: OptionType }) => {
  return <select>{props.children}</select>;
};

const option = <Option />; // const option: JSX.Element

//here we are calling eagerly instead of scheduling for react to call by itself so this is what we can't do

const Option2 = Option(); // const Option2: OptionType

//so currently strongly typing in react is not possible right now as it will infer as JSX.Element

<Select>
  <Option />
</Select>;
