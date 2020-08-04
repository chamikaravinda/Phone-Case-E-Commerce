import {
  ADD_NEW_PRODUCT_SUCCESS,
  ADD_NEW_PRODUCT_ERROR,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
} from "./types";

import { SERVER_URL } from "../constant";
import axios from "axios";
import { history } from "../index";

//ADD PRODUCT---------------------------------
export const addProductSuccess = (data) => {
  return {
    type: ADD_NEW_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const addProductError = (data) => {
  return {
    type: ADD_NEW_PRODUCT_ERROR,
    payload: data,
  };
};

export const addProduct = (data, headers) => {
  return (dispatch) => {
    let config = {
      headers: {
        headers,
      },
    };

    return axios
      .post(`${SERVER_URL}/admin/items`, data, config)
      .then((response) => {
        dispatch(addProductSuccess(data));
        history.push("product/product");
      })
      .catch((error) => {
        console.log(error);
        dispatch(addProductError("Error in adding the product"));
      });
  };
};

//GET ALL PRODUCTS---------------------------------
export const getAllProductSuccess = (data) => {
  return {
    type: GET_ALL_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const getAllProductError = (data) => {
  return {
    type: GET_ALL_PRODUCT_ERROR,
    payload: data,
  };
};

export const getAllProducts = (headers) => {
  return (dispatch) => {
    console.log(headers);
    let config = {
      headers: {
        headers,
      },
    };

    return axios
      .get(`${SERVER_URL}/admin/items`, config)
      .then((response) => {
        dispatch(getAllProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAllProductError("Error in getting the products"));
      });
  };
};

//DELETE PRODUCT-------------------------------------
export const deleteProductSuccess = (data) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: {
      id: data,
    },
  };
};

export const deleteProductError = (data) => {
  return {
    type: DELETE_PRODUCT_ERROR,
    payload: data,
  };
};

export const deleteProduct = (id, headers) => {
  return (dispatch) => {
    let config = {
      headers: {
        headers,
      },
    };
    return axios
      .delete(`${SERVER_URL}/admin/items/${id}`, config)
      .then((response) => {
        dispatch(deleteProductSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteProductError("Error in deleting the product"));
      });
  };
};

//GET SINGLE PRODUCT----------------------------------
export const getProductSuccess = (data) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: {
      id: data,
    },
  };
};

export const getProductError = (data) => {
  return {
    type: GET_PRODUCT_ERROR,
    payload: data,
  };
};

export const getProduct = (id, headers) => {
  return (dispatch) => {
    let config = {
      headers: {
        headers,
      },
    };
    return axios
      .get(`${SERVER_URL}/admin/items/${id}`, config)
      .then((response) => {
        dispatch(getProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProductError("Error in getting the product"));
      });
  };
};
//UPDATE PRODUCT---------------------------------
export const updataProductSuccess = (data) => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const updataProductError = (data) => {
  return {
    type: UPDATE_PRODUCT_ERROR,
    payload: data,
  };
};

export const updataProduct = (data, headers) => {
  return (dispatch) => {
    let config = {
      headers: {
        headers,
      },
    };

    return axios
      .post(`${SERVER_URL}/admin/items/${data.id}`, data, config)
      .then((response) => {
        dispatch(updataProductSuccess(data));
        history.push("product/product");
      })
      .catch((error) => {
        console.log(error);
        dispatch(updataProductError("Error in updating the product"));
      });
  };
};
