import { motion } from "framer-motion";
import Founder from "./Founder";

const About = () => {
  const option = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="home about flex">
        <motion.span {...option} className="ms-5">
          <Founder />
        </motion.span>
      </div>
    </>
  );
};

export default About;
