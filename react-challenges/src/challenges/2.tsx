/**
 * 1. Currently, ModalProps lets you pass in various impossible combination
 *
 * For instance, you can pass in a 'variant' of "title" without passing or you can
 * pass in a 'variant' of "no-title" with a title.
 *
 * Try to find a way to express ModalProps so that it's impossible to pass in impossible combinations of props.
 *
 */

//qs
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ModalPropsQ = {
  variant: "title" | "no-title";
  title?: string;
};

//ans
// type ModalProps = (
//   | {
//       variant: "title";
//       title: string;
//     }
//   | { variant: "no-title" }
// ) & { buttonColor: string };

//or

type VariantModalProps =
  | {
      variant: "title";
      title: string;
    }
  | { variant: "no-title" };
  
type ModalProps = VariantModalProps & { buttonColor: string };

//destructuring discriminated unions problem
//here if we destructure the props then we will get the error from ts for the title
//but if we use the props then ts won't yell

export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return (
      <div>
        <div>No title</div>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click Me!
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div>Title: {props.title}</div>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click Me !
        </button>
      </div>
    );
  }
};

export const Test = () => {
  return (
    <div>
      <Modal variant="title" title="Hello" buttonColor="red" />
      <Modal variant="no-title" buttonColor="red" />
    </div>
  );
};
