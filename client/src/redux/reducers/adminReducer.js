import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  { orders: [], users: [] },
  {
    //getting dashboard data
    getDashboardRequest: (state) => {
      state.loading = true;
    },
    getDashboardSuccess: (state, action) => {
      state.loading = false;
      state.userCounts = action.payload.userCounts;
      state.orderCounts = action.payload.orderCounts;
      state.totalIncome = action.payload.totalIncome;
    },
    getDashboardFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //getting all users
    getUsersRequest: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    getUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //getting data
    getOrdersRequest: (state) => {
      state.loading = true;
    },
    getOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getOrdersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //getting data
    processRequest: (state) => {
      state.loading = true;
    },
    processSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    processFailure: (state, action) => {
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
