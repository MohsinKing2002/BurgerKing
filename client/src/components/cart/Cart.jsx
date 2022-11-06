import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoBagAddOutline } from "react-icons/io5";
import { MdOutlineDeleteForever } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CartItem = ({ value, name, image, increment, decrement }) => (
  <Card>
    <Card.Header className="py-2 text-center">{name}</Card.Header>

    <Card.Body className="flex item-info bg-info bg-opacity-10">
      <div>
        <img
          style={{ height: "8vh", borderRadius: "10px" }}
          src={image}
          alt=""
        />
      </div>
      <div>
        <Button onClick={increment} variant="outline-primary">
          <IoBagAddOutline size={26} />
        </Button>
        <input type="number" readOnly value={value} />
        <Button
          onClick={value > 0 ? decrement : null}
          variant="outline-warning"
        >
          <MdOutlineDeleteForever size={26} />
        </Button>
      </div>
    </Card.Body>
  </Card>
);

function Cart() {
  const dispatch = useDispatch();
  const {
    cartItems: { desiSpicyBurger, chineseBurga, bangaliBurger },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({
          type: "bangaliBurgerIncrement",
        });
        dispatch({
          type: "calculatePrices",
        });
        break;
      case 2:
        dispatch({
          type: "desiSpicyBurgerIncrement",
        });
        dispatch({
          type: "calculatePrices",
        });
        break;
      case 3:
        dispatch({
          type: "chineseBurgaIncrement",
        });
        dispatch({
          type: "calculatePrices",
        });
        break;
      default:
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        dispatch({
          type: "bangaliBurgerDecrement",
        });
        dispatch({
          type: "calculatePrices",
        });
        break;
      case 2:
        dispatch({
          type: "desiSpicyBurgerDecrement",
        });
        dispatch({
          type: "calculatePrices",
        });
        break;
      case 3:
        dispatch({
          type: "chineseBurgaDecrement",
        });
        dispatch({
          type: "calculatePrices",
        });
        break;
      default:
        break;
    }
  };
  const { cartItems: orderItems } = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({ subTotal, tax, shippingCharges, total })
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);

  return (
    <motion.div
      className="bg-light cart"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
    >
      <h1 className="title my-2 heading">Cart Items</h1> <br />
      <CartItem
        image={
          "https://st.depositphotos.com/2576363/4514/i/600/depositphotos_45148843-stock-photo-cheeseburger-on-black-background.jpg"
        }
        name={"Bangali Burger"}
        value={bangaliBurger.quantity}
        increment={() => increment(1)}
        decrement={() => decrement(1)}
      />
      <br />
      <CartItem
        image={
          "https://i.pinimg.com/originals/96/ca/03/96ca03681b86530cc2426c0cfc9a1414.jpg"
        }
        name={"Desi Spicy Burger"}
        value={desiSpicyBurger.quantity}
        increment={() => increment(2)}
        decrement={() => decrement(2)}
      />
      <br />
      <CartItem
        image={
          "https://d2luv1saso99wi.cloudfront.net/2022_Hot-Ones_App-Web-Menu_1500x920_Burger_lg1661364018.jpeg"
        }
        name={"Chinese Burga"}
        value={chineseBurga.quantity}
        increment={() => increment(3)}
        decrement={() => decrement(3)}
      />
      <hr />
      <h1 className="title my-2 heading">Pricings</h1> <br />
      <dl class="row position-relative start-50">
        <dt class="col-sm-3">Sub Total</dt>
        <dd class="col-sm-9">
          <p> &#8377; {subTotal}</p>
        </dd>

        <dt class="col-sm-3">Tax</dt>
        <dd class="col-sm-9">
          <p> &#8377; {tax}</p>
        </dd>

        <dt class="col-sm-3">Shipping Charges</dt>
        <dd class="col-sm-9">
          <p> &#8377; {subTotal > 0 ? shippingCharges : 0}</p>
        </dd>

        <dt class="col-sm-3">Total</dt>
        <dd class="col-sm-9">
          <p> &#8377; {subTotal > 0 ? total : 0}</p>
        </dd>
        <NavLink to="/shipping">
          <Button variant="outline-primary">Checkout</Button>
        </NavLink>
      </dl>
    </motion.div>
  );
}

export default Cart;
