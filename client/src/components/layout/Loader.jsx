import { FaHamburger } from "react-icons/fa";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div
      style={{ minHeight: "70vh" }}
      className="text-center flex justify-content-center"
    >
      <motion.span
        className="loader"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          ease: "linear",
          repeat: "Infinity",
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
      >
        <FaHamburger size={35} color={"azure"} />
      </motion.span>
    </div>
  );
};

export default Loader;
