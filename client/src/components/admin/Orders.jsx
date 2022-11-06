import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BsArrowRightCircle } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { getOrdersAdmin, processOrder } from "../../redux/actions/adminAction";
import Loader from "../layout/Loader";

function Orders() {
  const dispatch = useDispatch();
  const { orders, message, error, loading } = useSelector(
    (state) => state.admin
  );

  const handleProcess = async (id) => {
    await dispatch(processOrder(id));
    dispatch(getOrdersAdmin());
  };

  useEffect(() => {
    dispatch(getOrdersAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessages",
      });
    }

    if (error) {
      toast.error(error);
      dispatch({
        type: "clearErrors",
      });
    }
  }, [dispatch, message, error]);

  return loading === true ? (
    <Loader />
  ) : (
    <div style={{ minHeight: "70vh" }} className="flex">
      <div className="myorder bg-light">
        <h1 className="title my-2 heading">All Orders</h1> <br />
        <Table bordered className="text-center">
          <thead className="table-dark">
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>User</th>
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
                  <td>{order.user.name.split(" ")[0]}</td>
                  <td>
                    <OverlayTrigger
                      placement={"top"}
                      overlay={<Tooltip>View Details</Tooltip>}
                    >
                      <button className="bg-transparent border-0 ms-2">
                        {/* <BsArrowRightCircle size={18} color={"blue"} /> */}
                        <NavLink to={`/order/${order._id}`}>
                          <GrView size={20} />
                        </NavLink>
                      </button>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement={"top"}
                      overlay={<Tooltip>Update Status</Tooltip>}
                    >
                      <button
                        onClick={() => {
                          handleProcess(order._id);
                        }}
                        className="bg-transparent border-0 ms-2"
                      >
                        <BsArrowRightCircle size={18} color={"blue"} />
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Orders;
