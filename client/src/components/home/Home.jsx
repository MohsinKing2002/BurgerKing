import { motion } from "framer-motion";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Menu from "./Menu";

const Home = () => {
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
      <div className="home homepage flex">
        <span className="ms-5">
          <motion.h3 {...option} className="font-monospace">
            {" "}
            Welcome to Burger King..{" "}
          </motion.h3>
          <motion.p {...option} transition={{ delay: 0.4 }}>
            {" "}
            Let yourself give a taste of King's Burger{" "}
          </motion.p>
          <motion.div {...option} transition={{ delay: 0.6 }}>
            <Button variant="danger">
              <Nav.Link href="#menu">Explore Menu</Nav.Link>
            </Button>
          </motion.div>
        </span>
      </div>

      <Menu />
    </>
  );
};

export default Home;
