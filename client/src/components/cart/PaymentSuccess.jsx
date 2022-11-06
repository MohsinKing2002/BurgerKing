import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function PaymentSuccess() {
  return (
    <div style={{ minHeight: "70vh" }} className="flex">
      <motion.div
        className="bg-light register confirmOrder rounded text-center"
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
      >
        <h1 className="title my-2 heading">Order Confirmed !!</h1> <br />
        <figure>
          <p>Your Order has been placed successfully.</p>
          <p>It will be deliver to you soon. stay tuned !</p>
        </figure>
        <br />
        <p>Check Your Order Status Below : </p>
        <NavLink to="/myorders">
          <Button variant="primary">Order Status</Button>
        </NavLink>
      </motion.div>
    </div>
  );
}

export default PaymentSuccess;
