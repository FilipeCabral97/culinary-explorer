import React from "react";
import "./MoreButton.css";
import { motion } from "framer-motion";

interface IMoreButton {
  children: string;
}

const MoreButton: React.FC<IMoreButton> = ({ children }: IMoreButton) => {
  return (
    <motion.button
      className="more-btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default MoreButton;
