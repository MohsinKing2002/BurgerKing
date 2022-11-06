import { createReducer } from "@reduxjs/toolkit";

export const ordersReducer = createReducer(
  { orders: [] },
  {
    //my orders
    getMyOrdersRequest: (state) => {
      state.loading = true;
    },
    getMyOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getMyOrdersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //order details
    getOrderRequest: (state) => {
      state.loading = true;
    },
    getOrderSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    getOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //clear messages
    clearMessages: (state) => {
      state.message = null;
    },

    //clear errors
    clearErrors: (state) => {
      state.error = null;
    },
  }
);
