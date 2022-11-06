import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        bangaliBurger: {
          quantity: 0,
          price: 400,
        },
        desiSpicyBurger: {
          quantity: 0,
          price: 900,
        },
        chineseBurga: {
          quantity: 0,
          price: 650,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  //bangali burger ++
  bangaliBurgerIncrement: (state) => {
    state.cartItems.bangaliBurger.quantity += 1;
  },
  //bangali burger ++
  desiSpicyBurgerIncrement: (state) => {
    state.cartItems.desiSpicyBurger.quantity += 1;
  },
  //chinese burger ++
  chineseBurgaIncrement: (state) => {
    state.cartItems.chineseBurga.quantity += 1;
  },

  //bangali burger --
  bangaliBurgerDecrement: (state) => {
    state.cartItems.bangaliBurger.quantity -= 1;
  },
  //bangali burger --
  desiSpicyBurgerDecrement: (state) => {
    state.cartItems.desiSpicyBurger.quantity -= 1;
  },
  //chinese burger --
  chineseBurgaDecrement: (state) => {
    state.cartItems.chineseBurga.quantity -= 1;
  },

  //calculate prices
  calculatePrices: (state) => {
    let bengali = state.cartItems.bangaliBurger;
    let desi = state.cartItems.desiSpicyBurger;
    let chinese = state.cartItems.chineseBurga;

    state.subTotal =
      bengali.quantity * bengali.price +
      desi.quantity * desi.price +
      chinese.quantity * chinese.price;
    state.tax = state.subTotal * 0.15;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  //empty cart after order placed
  emptyCart: (state) => {
    state.cartItems = {
      bangaliBurger: {
        quantity: 0,
        price: 400,
      },
      desiSpicyBurger: {
        quantity: 0,
        price: 900,
      },
      chineseBurga: {
        quantity: 0,
        price: 650,
      },
    };
    state.subTotal = 0;
    state.tax = 0;
    state.shippingCharges = 0;
    state.total = 0;
  },
  //add shipping info
  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      address: action.payload.address,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pinCode: action.payload.pinCode,
      phone: action.payload.phone,
    };
  },
});

//order
export const orderReducer = createReducer(
  {},
  {
    //order
    createOrderRequest: (state) => {
      state.loading = true;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //payment verify
    paymentVerificationRequest: (state) => {
      state.loading = true;
    },
    paymentVerificationSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    paymentVerificationFailure: (state, action) => {
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
