//Refactoring_a_Generic_Hook_for_Best_Inference

/**
 * In this exercise, we'll look at an example where generics are NOT needed.
 *
 * 1. Take a look at teh ModalProps type. Try to figure out what's going on in the type.
 *
 * Notice what type gets returned if you type:
 *
 * type Example = ModalProps<"with-button">
 * type Example2 = ModalProps<"without-button">
 *
 * 2. There's a way of writing this type (and the component!) without generics that's much simpler. try to figure out how to do that.
 */

/**
export type ModalProps<TVariant extends PossibleVariants> = {
  isOpen: boolean;
  variant: TVariant;
} & (TVariant extends "with-button"
  ? {
      buttonLabel: string;
      onButtonClick: () => void;
    }
  : {});

export type PossibleVariants = "with-button" | "without-button";

export const Modal = <TVariant extends PossibleVariants>(
    props: ModalProps<TVariant>,
) => {
    return null;
}

export const Parent = () => {
  return (
    <>
      <Modal
        variant="with-button"
        buttonLabel="adsf"
        isOpen
        onButtonClick={() => console.log("huii")}
      />
    </>
  );
};
 */

//so above thing is working fine but here we simplifies with the discriminated union

export type ModalProps = {
  isOpen: boolean;
} & (
  | {
      variant: "with-button";
      buttonLabel: string;
      onButtonClick: () => void;
    }
  | {
      variant: "without-button";
    }
);

export type PossibleVariants = "with-button" | "without-button";

export const Modal = (props: ModalProps) => {
  return null;
};

export const Parent = () => {
  return (
    <>
      <Modal
        variant="with-button"
        buttonLabel="adsf"
        isOpen
        onButtonClick={() => console.log("huii")}
      />
    </>
  );
};
