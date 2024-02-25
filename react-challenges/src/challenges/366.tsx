/**
 * In this exercise, we're going to create a Modal Component that uses the
 * render props pattern. The modal component should accept a render props function that provides ModalChildProps.
 *
 * 1. Change the type of the props the Modal component accepts so that it accepts a render prop function providing ModalChildProps.
 *
 */

import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";

interface ModalChildProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Modal = ({
  render,
}: {
  // children: (props: ModalChildProps) => ReactNode;
  // or most simple is using react fc
  render: React.FC<ModalChildProps>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {render({
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      })}
      {createPortal(
        <div>
          <h1>Modal</h1>
        </div>,
        document.getElementById("modal-root")!
      )}
    </>
  );
};

const Parent = () => {
  return (
    <Modal
      render={props => {
        return (
          <>
            <button onClick={props.openModal}>Open Modal</button>
            <button onClick={props.closeModal}>Close Modal</button>
          </>
        );
      }}
    />
  );
};
