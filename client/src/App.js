import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Account from "./components/user/Account";
import MyOrders from "./components/user/MyOrders";
import OrderDetails from "./components/user/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import Loader from "./components/layout/Loader";
import NotFound from "./components/layout/NotFound";

import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearErrors",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessages",
      });
    }
  }, [dispatch, error, message]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={!isAuthenticated ? <Login /> : <Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/about"
          element={!isAuthenticated ? <Login /> : <About />}
        />
        <Route
          path="/contact"
          element={!isAuthenticated ? <Login /> : <Contact />}
        />
        <Route
          path="/account"
          element={!isAuthenticated ? <Login /> : <Account />}
        />

        <Route path="/cart" element={!isAuthenticated ? <Login /> : <Cart />} />
        <Route
          path="/shipping"
          element={!isAuthenticated ? <Login /> : <Shipping />}
        />
        <Route
          path="/confirmorder"
          element={!isAuthenticated ? <Login /> : <ConfirmOrder />}
        />
        <Route
          path="/ordersuccess"
          element={!isAuthenticated ? <Login /> : <PaymentSuccess />}
        />
        <Route
          path="/myorders"
          element={!isAuthenticated ? <Login /> : <MyOrders />}
        />
        <Route
          path="/order/:id"
          element={!isAuthenticated ? <Login /> : <OrderDetails />}
        />

        <Route
          path="/admin/dashboard"
          element={!isAuthenticated ? <Login /> : <Dashboard />}
        />
        <Route
          path="/admin/users"
          element={!isAuthenticated ? <Login /> : <Users />}
        />
        <Route
          path="/admin/orders"
          element={!isAuthenticated ? <Login /> : <Orders />}
        />

        <Route path="/load" element={<Loader />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <Toaster />
    </>
  );
}

export default App;
