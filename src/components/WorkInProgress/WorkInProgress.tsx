import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import "./WorkInProgress.css";

interface IWorkInProgress {
  handleClose: () => void;
  text?: string;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    duration: 2,
  },
};

const WorkInProgress: React.FC<IWorkInProgress> = ({
  handleClose,
  text,
}: IWorkInProgress) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p className="text">
          Oops! This website is still under construction. Check back soon for
          the full experience!
        </p>
        <motion.button
          onClick={handleClose}
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          CONTINUE
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

export default WorkInProgress;
