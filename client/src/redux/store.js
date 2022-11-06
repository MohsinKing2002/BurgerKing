import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { cartReducer, orderReducer } from "./reducers/cartReducer";
import { ordersReducer } from "./reducers/orderReducer";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

export default store;
