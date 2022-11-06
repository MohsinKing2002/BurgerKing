import { BiError } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{ minHeight: "70vh" }}
      className="text-center flex justify-content-center"
    >
      <section>
        <motion.span
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
          <BiError size={32} color={"azure"} />
        </motion.span>
        <span>
          <h5 className="my-2 text-light">Page Not Found</h5>
          <NavLink to="/">
            <Button className="my-2" variant="dark">
              {" "}
              Back to Home{" "}
            </Button>
          </NavLink>
        </span>
      </section>
    </div>
  );
};

export default NotFound;
