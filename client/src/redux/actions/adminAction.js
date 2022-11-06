import axios from "axios";

export const getAdminStats = () => async (dispatch) => {
  try {
    dispatch({
      type: "getDashboardRequest",
    });

    const { data } = await axios.get("/admin/stats", {
      withCredentials: true,
    });

    dispatch({
      type: "getDashboardSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getDashboardFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getUsersRequest",
    });

    const { data } = await axios.get("/admin/users", {
      withCredentials: true,
    });

    dispatch({
      type: "getUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getUsersFailure",
      payload: error.response.data.message,
    });
  }
};

export const getOrdersAdmin = () => async (dispatch) => {
  try {
    dispatch({
      type: "getOrdersRequest",
    });

    const { data } = await axios.get("/admin/orders", {
      withCredentials: true,
    });

    dispatch({
      type: "getOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getOrdersFailure",
      payload: error.response.data.message,
    });
  }
};

export const processOrder = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "processRequest",
    });

    const { data } = await axios.get(`/admin/orders/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "processSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "processFailure",
      payload: error.response.data.message,
    });
  }
};
