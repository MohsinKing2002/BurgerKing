import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser, logoutUser } from "../../redux/actions/userAction";
import Loader from "../layout/Loader";
import toast from "react-hot-toast";

function Account() {
  let options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  const dispatch = useDispatch();
  const { user, loading, error, message } = useSelector((state) => state.user);
  // console.log(user);

  //for future problem see from 24:00
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessages" });
    }
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearErrors",
      });
    }
  }, [dispatch, error, message]);

  return loading === true ? (
    <Loader />
  ) : (
    <div style={{ minHeight: "70vh" }} className="flex">
      <Card className="text-center account m-auto my-4 py-2">
        <Card.Header className="title heading py-3">User Profile</Card.Header>
        <Card.Body>
          <motion.img
            {...options}
            style={{
              height: "150px",
              width: "150px",
              marginBottom: "1.5rem",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={user && user.photo}
            alt="avatar"
          />
          <Card.Title className="title heading fw-bold">
            {" "}
            {user && user.name}
          </Card.Title>
          <motion.div
            {...options}
            transition={{
              delay: 0.3,
            }}
            className="flex justify-content-center flex-column gap-3 mt-4"
          >
            {user && user.role === "admin" && (
              <NavLink className="w-50" to="/admin/dashboard">
                <Button className="w-100" variant="primary">
                  DashBoard
                </Button>
              </NavLink>
            )}
            <NavLink className="w-50" to="/myorders">
              <Button className="w-100" variant="warning">
                My Orders
              </Button>
            </NavLink>
            <Button onClick={handleLogout} className="w-50" variant="danger">
              Log out
            </Button>
          </motion.div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Account;
