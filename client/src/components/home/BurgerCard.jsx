import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

function BurgerCard({ image, name, price, delay = 0, handleAddcart, itemNum }) {
  return (
    <motion.div
      style={{ width: "20rem", margin: "2rem auto" }}
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <Card>
        <Card.Img style={{ height: "32vh" }} variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-danger fw-bold">{name}</Card.Title>
          <Card.Text className="fw-bold">&#8377; {price}</Card.Text>
          <Button
            onClick={() => {
              handleAddcart(itemNum);
            }}
            variant="primary"
          >
            Order Now..
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default BurgerCard;
