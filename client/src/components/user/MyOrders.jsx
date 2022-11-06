import Table from "react-bootstrap/Table";
import { GrView } from "react-icons/gr";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../redux/actions/orderAction";
import { toast } from "react-hot-toast";
import Loader from "../layout/Loader";

function MyOrders() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearErrors",
      });
    }
  }, [dispatch]);

  return loading === true ? (
    <Loader />
  ) : (
    <div style={{ minHeight: "70vh" }} className="flex">
      <div className="myorder bg-light">
        <h1 className="title my-2 heading">My Orders</h1> <br />
        <Table bordered className="text-center">
          <thead className="table-dark">
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.orderStatus}</td>
                  <td>
                    {order.orderedItems.bangaliBurger.quantity +
                      order.orderedItems.desiSpicyBurger.quantity +
                      order.orderedItems.chineseBurga.quantity}
                  </td>
                  <td>{order.totalAmount}</td>
                  <td>{order.paymentMethod}</td>
                  <td>
                    <NavLink to={`/order/${order._id}`}>
                      <OverlayTrigger
                        placement={"top"}
                        overlay={<Tooltip>View Details</Tooltip>}
                      >
                        <button className="bg-transparent border-0 ms-2">
                          <GrView size={20} color={"blue"} />
                        </button>
                      </OverlayTrigger>
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MyOrders;
