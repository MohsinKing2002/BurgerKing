import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createOrder,
  paymentVerification,
} from "../../redux/actions/orderAction";
import { toast } from "react-hot-toast";
import axios from "axios";

function ConfirmOrder() {
  // shippingInfo
  // orderedItems
  // paymentMethod
  // itemsPrice
  // shippingCharges
  // taxCharges
  // totalAmount

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);
  const { message, error } = useSelector((state) => state.order);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleOrder = async (e) => {
    e.preventDefault();

    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          shippingCharges,
          tax,
          total
        )
      );
    } else {
      //create order online
      const {
        data: { order, orderOptions },
      } = await axios.post(
        "/createorderonline",
        {
          shippingInfo,
          orderedItems: cartItems,
          paymentMethod,
          itemsPrice: subTotal,
          shippingCharges,
          taxCharges: tax,
          totalAmount: total,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const options = {
        key: "rzp_test_iqjXR3XO4kuMSm",
        amount: order.amount,
        currency: "INR",
        name: "Burger King",
        description: "Paying to Burger King",
        order_id: order.id,
        handler: function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;
          dispatch(
            paymentVerification(
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
              orderOptions
            )
          );
        },
        theme: {
          color: "#2c4f91",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessages",
      });
      dispatch({
        type: "emptyCart",
      });
      navigate("/ordersuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearErrors",
      });
    }
  }, [dispatch, message, error, navigate]);

  return (
    <div style={{ minHeight: "70vh" }} className="flex">
      <motion.div
        className="bg-light register confirmOrder rounded"
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
      >
        <h1 className="title my-2 heading">Payment Options</h1> <br />
        <Form onSubmit={handleOrder} className="m-auto">
          <span className="flex justify-content-between bg-success rounded bg-opacity-10 p-2">
            <Form.Label>Cash On Delivery</Form.Label>
            <Form.Check
              type="radio"
              name="payment"
              required
              value={paymentMethod}
              onChange={() => {
                setPaymentMethod("COD");
              }}
            />
          </span>
          <br />
          <span className="flex justify-content-between bg-success rounded bg-opacity-10 p-2">
            <Form.Label>Online Payment</Form.Label>
            <Form.Check
              type="radio"
              name="payment"
              required
              value={paymentMethod}
              onChange={() => {
                setPaymentMethod("Online");
              }}
            />
          </span>
          <br />
          <Button type="submit">Place Order</Button>
        </Form>
      </motion.div>
    </div>
  );
}

export default ConfirmOrder;
