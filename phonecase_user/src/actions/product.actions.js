import {
  GET_APLLE_PRODUCTS_SUCCESS,
  GET_APLLE_PRODUCTS_ERROR,
  GET_ANDROID_PRODUCTS_SUCCESS,
  GET_ANDROID_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "./types";

import { SERVER_URL } from "../constant";
import axios from "axios";
//GET APPLE PROUDCTS--------------------------------------
export const getAppleProductsSuccess = (data) => {
  return {
    type: GET_APLLE_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const getAppleProductsError = (data) => {
  return {
    type: GET_APLLE_PRODUCTS_ERROR,
    payload: data,
  };
};

export const getAppleProducts = () => {
  return (dispatch) => {
    return axios
      .get(`${SERVER_URL}/items`)
      .then((response) => {
        let data = [];
        let colors = [];
        for (let i = 0; i < response.data.length; i++) {
          for (let j = 0; j < response.data[i].models.length; j++) {
            let brand = response.data[i].models[j].brand;
            if (brand === "Apple" || brand === "apple") {
              data.push(response.data[i]);
              break;
            }
          }
        }

        dispatch(getAppleProductsSuccess(data));
        dispatch(getAppleProductsError(""));
      })
      .catch((error) => {
        const failed = "Error in getting the products";
        dispatch(getAppleProductsError(failed));
      });
  };
};

//GET ANDROID PROUDCTS--------------------------------------
export const getAndroidProductsSuccess = (data) => {
  return {
    type: GET_ANDROID_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const getAndroidProductsError = (data) => {
  return {
    type: GET_ANDROID_PRODUCTS_ERROR,
    payload: data,
  };
};

export const getAndroidProducts = () => {
  return (dispatch) => {
    return axios
      .get(`${SERVER_URL}/items`)
      .then((response) => {
        let data = [];
        for (let i = 0; i < response.data.length; i++) {
          for (let j = 0; j < response.data[i].models.length; j++) {
            let brand = response.data[i].models[j].brand;
            if (brand !== "Apple" && brand !== "apple") {
              data.push(response.data[i]);
              break;
            }
          }
        }
        dispatch(getAndroidProductsSuccess(data));
        dispatch(getAndroidProductsError(""));
      })
      .catch((error) => {
        const failed = "Error in getting the products";
        dispatch(getAndroidProductsError(failed));
      });
  };
};

//GET PRODUCT BY ID PROUDCTS--------------------------------------
export const getSingleProductSuccess = (data) => {
  return {
    type: GET_SINGLE_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const getSingleProductError = (data) => {
  return {
    type: GET_SINGLE_PRODUCT_ERROR,
    payload: data,
  };
};

export const getSingleProduct = (id) => {
  return (dispatch) => {
    return axios
      .get(`${SERVER_URL}/items/${id}`)
      .then((response) => {
        dispatch(getSingleProductSuccess(response.data));
        dispatch(getSingleProductError(""));
      })
      .catch((error) => {
        const failed = "Error in getting the product";
        dispatch(getSingleProductError(failed));
      });
  };
};
