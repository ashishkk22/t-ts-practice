import { ChangeEventHandler } from "react";

//this input component can be controlled or uncontrolled
type InputProps = (
  | {
      value: string;
      onChange: ChangeEventHandler;
    }
  | {
      value?: undefined;
      onChange?: undefined;
    }
) & {
  label: string;
};

//here instead of adding the undefined we can add the never but that will reduce to undefined

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Example = undefined | never;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inputProps: InputProps = {
  label: "123",
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  );
};

const Test5 = () => {
  return (
    <div>
      <Input label="Greeting" value="Hello" onChange={() => {}} />
      <Input label="Greeting" />
    </div>
  );
};

export default Test5;
