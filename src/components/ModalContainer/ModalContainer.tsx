import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface IModalContainerProps {
  children: ReactNode;
}

export const ModalContainer = ({ children }: IModalContainerProps) => (
  <AnimatePresence initial={false} mode="wait">
    {children}
  </AnimatePresence>
);
