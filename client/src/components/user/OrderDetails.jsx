import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../redux/actions/orderAction";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader";
import toast from "react-hot-toast";

function OrderDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearErrors",
      });
    }
  }, [dispatch, error]);

  return loading === true ? (
    <Loader />
  ) : (
    order && (
      <div style={{ minHeight: "70vh" }} className="flex">
        <div className="myorder bg-light">
          <h1 className="title my-2 heading">Order Details</h1> <br />
          <dl className="row">
            <dt className="col-sm-3 text-primary">Shipping Info</dt>
            <dd className="col-sm-9">
              <dl className="row">
                <dt className="col-sm-4">Address</dt>
                <dd className="col-sm-8">{order.shippingInfo.address}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">City</dt>
                <dd className="col-sm-8">{order.shippingInfo.city}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">State</dt>
                <dd className="col-sm-8">{order.shippingInfo.state}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Country</dt>
                <dd className="col-sm-8">{order.shippingInfo.country}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Pin Code</dt>
                <dd className="col-sm-8">{order.shippingInfo.pinCode}</dd>
              </dl>
            </dd>
            <hr />
            <dt className="col-sm-3 text-primary">Contact</dt>
            <dd className="col-sm-9">
              <p>{order.shippingInfo.phone}</p>
            </dd>

            <hr />
            <dt className="col-sm-3 text-primary">Ordered Items</dt>
            <dd className="col-sm-9">
              <dl className="row">
                <dt className="col-sm-4">Bangali Burger</dt>
                <dd className="col-sm-8">
                  {`${order.orderedItems.bangaliBurger.quantity} * ${order.orderedItems.bangaliBurger.price} `}{" "}
                </dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Desi Spicy Burger</dt>
                <dd className="col-sm-8">
                  {" "}
                  {`${order.orderedItems.desiSpicyBurger.quantity} * ${order.orderedItems.desiSpicyBurger.price} `}
                </dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Chinese Burger</dt>
                <dd className="col-sm-8">{`${order.orderedItems.chineseBurga.quantity} * ${order.orderedItems.chineseBurga.price} `}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Sub Total</dt>
                <dd className="col-sm-8"> &#8377; {order.itemsPrice}</dd>
              </dl>
            </dd>

            <hr />
            <dt className="col-sm-3 text-primary">Status</dt>
            <dd className="col-sm-9">
              <dl className="row">
                <dt className="col-sm-4">Order Status</dt>
                <dd className="col-sm-8">{order.orderStatus}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Placed At</dt>
                <dd className="col-sm-8">{order.createdAt.split("T")[0]}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Delivered At</dt>
                <dd className="col-sm-8">
                  {order.delivaredAt
                    ? order.delivaredAt.split("T")[0]
                    : "Not Applicable"}
                </dd>
              </dl>
            </dd>
            <hr />
            <dt className="col-sm-3 text-primary">Payment</dt>
            <dd className="col-sm-9">
              <dl className="row">
                <dt className="col-sm-4">Payment Method</dt>
                <dd className="col-sm-8">{order.paymentMethod}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Payment Reference</dt>
                <dd className="col-sm-8">
                  {order.paymentInfo ? order.paymentInfo : "Not Applicable"}
                </dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Paid At</dt>
                <dd className="col-sm-8">
                  {order.paidAt ? order.paidAt.split("T")[0] : "Not Applicable"}
                </dd>
              </dl>
            </dd>
            <hr />
            <dt className="col-sm-3 text-primary">Amount</dt>
            <dd className="col-sm-9">
              <dl className="row">
                <dt className="col-sm-4">Items Total</dt>
                <dd className="col-sm-8"> &#8377; {order.itemsPrice}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Shipping Charges</dt>
                <dd className="col-sm-8"> &#8377; {order.shippingCharges}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Tax amount</dt>
                <dd className="col-sm-8"> &#8377; {order.taxCharges}</dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-4">Total amount</dt>
                <dd className="col-sm-8"> &#8377; {order.totalAmount}</dd>
              </dl>
            </dd>
          </dl>
        </div>
      </div>
    )
  );
}

export default OrderDetails;
