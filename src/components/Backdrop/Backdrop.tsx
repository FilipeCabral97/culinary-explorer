import { motion } from "framer-motion";
import "./Backdrop.css";
import { ReactElement } from "react";

interface IBackdropProps {
  children: ReactElement<HTMLDivElement>;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Backdrop: React.FC<IBackdropProps> = ({
  children,
  onClick,
}: IBackdropProps) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
