import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {},
  {
    //load user
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loadUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    //logout user
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
      state.message = action.payload;
    },
    logoutFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = true;
    },

    //clear errors
    clearErrors: (state) => {
      state.error = null;
    },
    //clear messages
    clearMessages: (state) => {
      state.message = null;
    },
  }
);
