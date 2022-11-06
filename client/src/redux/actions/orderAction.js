import axios from "axios";

export const createOrder =
  (
    shippingInfo,
    orderedItems,
    paymentMethod,
    itemsPrice,
    shippingCharges,
    taxCharges,
    totalAmount
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "createOrderRequest",
      });

      const { data } = await axios.post(
        `/createorder`,
        {
          shippingInfo,
          orderedItems,
          paymentMethod,
          itemsPrice,
          shippingCharges,
          taxCharges,
          totalAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "createOrderSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "createOrderFailure",
        payload: error.response.data.message,
      });
    }
  };

export const paymentVerification =
  (razorpay_payment_id, razorpay_order_id, razorpay_signature, orderOptions) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "paymentVerificationRequest",
      });

      const { data } = await axios.post(
        "/paymentverification",
        {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          orderOptions,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "paymentVerificationSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "paymentVerificationFailure",
        payload: error.response.data.message,
      });
    }
  };

export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: "getMyOrdersRequest",
    });
    const { data } = await axios.get("/myorders", {
      withCredentials: true,
    });

    dispatch({
      type: "getMyOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getMyOrdersFailure",
      payload: error.response.data.message,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getOrderRequest",
    });
    const { data } = await axios.get(`/orders/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "getOrderSuccess",
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: "getOrderFailure",
      payload: error.response.data.message,
    });
  }
};
