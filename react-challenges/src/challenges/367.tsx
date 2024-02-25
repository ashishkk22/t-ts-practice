// Records_of_Components_with_the_Same_Props

import { ComponentType } from "react";

type InputProps = React.ComponentProps<"input">;

/**
 * All these components tke the same props!
 *
 * We don't want to repeat ourselves by typing
 * props: InputProps for each component.
 *
 * There must be a better way!
 *
 * Hint: Record and satisfies will come in handy.
 */

/**
 * Here if we add string in the record then it won't give us error if we use error in the type so
 */

type InputType = "text" | "number" | "password";

/**
 * So after adding the InputType in the Record we will get the error
 */

/**
 * Or we can do it by making COMPONENTS "satisfy"
 * a type that is Record of React.FC<InputProps>
 */

// const COMPONENTS: Record<InputType, React.FC<InputProps>> = {
const COMPONENTS = {
  text: props => {
    return <input {...props} type="text" />;
  },
  number: props => {
    return <input type="number" {...props} />;
  },
  password: props => {
    return <input type="password" {...props} />;
  },
} satisfies Record<string, React.FC<InputProps>>;

export const Input = (
  props: { type: keyof typeof COMPONENTS } & InputProps
) => {
  const Component = COMPONENTS[props.type];
  return <Component {...props} />;
};

<>
  <Input
    type="number"
    onChange={e => {
      //e should be properly typed
    }}
  />
  <Input type="text" />
  <Input type="password" />

  {/* expect and error  */}
  <Input type="email" />
</>;
