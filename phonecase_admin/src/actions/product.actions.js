import { ADD_NEW_PRODUCT_SUCCESS, ADD_NEW_PRODUCT_ERROR } from "./types";

import { SERVER_URL } from "../constant";
import axios from "axios";
import { history } from "../index";

//ADD PRODUCT---------------------------------
export const addProductSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const addProductError = (data) => {
  return {
    type: USER_LOGIN_ERROR,
    payload: data,
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    return axios
      .post(`${SERVER_URL}/admin/items`, data)
      .then((response) => {
        dispatch(addProductSuccess(data));
      })
      .catch((error) => {
        dispatch(addProductError("Error in adding the product"));
      });
  };
};
