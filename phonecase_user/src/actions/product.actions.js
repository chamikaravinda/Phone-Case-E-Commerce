import {
  GET_APLLE_PRODUCTS_SUCCESS,
  GET_APLLE_PRODUCTS_ERROR,
  GET_ANDROID_PRODUCTS_SUCCESS,
  GET_ANDROID_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_USER_PREFERANCE_SUCCESS,
  GET_USER_PREFERANCE_ERROR,
  GET_BEST_SELLERS_SUCCESS,
  GET_BEST_SELLERS_ERROR,
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
//GET USER PREFERANCE PROUDCTS--------------------------------------
export const getUserPreferancesSuccess = (data) => {
  return {
    type: GET_USER_PREFERANCE_SUCCESS,
    payload: data,
  };
};

export const getUserPreferancesError = (data) => {
  return {
    type: GET_USER_PREFERANCE_ERROR,
    payload: data,
  };
};

export const getUserPreferances = () => {
  return (dispatch) => {
    return axios
      .get(`${SERVER_URL}/items`)
      .then((response) => {
        dispatch(getUserPreferancesSuccess(response.data));
        dispatch(getUserPreferancesError(""));
      })
      .catch((error) => {
        const failed = "Error in getting the products";
        dispatch(getUserPreferancesError(failed));
      });
  };
};

//GET BEST SELLER PROUDCTS--------------------------------------
export const getBestSellersSuccess = (data) => {
  return {
    type: GET_BEST_SELLERS_SUCCESS,
    payload: data,
  };
};

export const getBestSellersError = (data) => {
  return {
    type: GET_BEST_SELLERS_ERROR,
    payload: data,
  };
};

export const getBestSellers = () => {
  return (dispatch) => {
    return axios
      .get(`${SERVER_URL}/items`)
      .then((response) => {
        dispatch(getBestSellersSuccess(response.data));
        dispatch(getBestSellersError(""));
      })
      .catch((error) => {
        const failed = "Error in getting the products";
        dispatch(getBestSellersError(failed));
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
        let tempmodels = [];
        let tempId = 0;
        response.data.models.forEach((element) => {
          element.id = ++tempId;
          tempmodels.push(element);
        });
        response.data.models = tempmodels;
        dispatch(getSingleProductSuccess(response.data));
        dispatch(getSingleProductError(""));
      })
      .catch((error) => {
        const failed = "Error in getting the product";
        dispatch(getSingleProductError(failed));
      });
  };
};
