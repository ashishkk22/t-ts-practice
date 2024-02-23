/**
 * In this exercise, we're going to create a Modal Component that uses the
 * render props pattern. The modal component should accept a render props function that provides ModalChildProps.
 *
 * 1. Change the type of the props the Modal component accepts so that it accepts a render prop function providing ModalChildProps.
 *
 */

import { useState } from "react";

interface ModalChildProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Modal = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
};

//366
