import {
  GET_APLLE_PRODUCTS_SUCCESS,
  GET_APLLE_PRODUCTS_ERROR,
  GET_ANDROID_PRODUCTS_SUCCESS,
  GET_ANDROID_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_JUST_FOR_YOU_SUCCESS,
  GET_JUST_FOR_YOU_ERROR,
  GET_BEST_SELLERS_SUCCESS,
  GET_BEST_SELLERS_ERROR,
  GET_NEW_ARRIVALS_SUCCESS,
  GET_NEW_ARRIVALS_ERROR,
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
        let items = [];
        let colors = [];
        for (let i = 0; i < response.data.length; i++) {
          for (let c = 0; c < response.data[i].colors.length; c++) {
            if (!colors.includes(response.data[i].colors[c])) {
              colors.push(response.data[i].colors[c]);
            }
          }
          for (let j = 0; j < response.data[i].models.length; j++) {
            let brand = response.data[i].models[j].brand;
            if (brand === "Apple" || brand === "apple") {
              items.push(response.data[i]);
              break;
            }
          }
        }

        let data = {
          items: items,
          colors: colors,
        };

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
        let items = [];
        let colors = [];

        for (let i = 0; i < response.data.length; i++) {
          for (let c = 0; c < response.data[i].colors.length; c++) {
            if (!colors.includes(response.data[i].colors[c])) {
              colors.push(response.data[i].colors[c]);
            }
          }

          for (let j = 0; j < response.data[i].models.length; j++) {
            let brand = response.data[i].models[j].brand;
            if (brand !== "Apple" && brand !== "apple") {
              items.push(response.data[i]);
              break;
            }
          }
        }

        let data = {
          items: items,
          colors: colors,
        };

        dispatch(getAndroidProductsSuccess(data));
        dispatch(getAndroidProductsError(""));
      })
      .catch((error) => {
        const failed = "Error in getting the products";
        dispatch(getAndroidProductsError(failed));
      });
  };
};
//GET JUST FOR YOU PROUDCTS--------------------------------------
export const getJustForYouProductSuccess = (data) => {
  return {
    type: GET_JUST_FOR_YOU_SUCCESS,
    payload: data,
  };
};

export const getJustForYouProductError = (data) => {
  return {
    type: GET_JUST_FOR_YOU_ERROR,
    payload: data,
  };
};

export const getJustForYouProduct = () => {
  return (dispatch) => {
    return axios
      .get(`${SERVER_URL}/items?isJustforYou=true`)
      .then((response) => {
        let colors = [];
        for (let i = 0; i < response.data.length; i++) {
          for (let c = 0; c < response.data[i].colors.length; c++) {
            if (!colors.includes(response.data[i].colors[c])) {
              colors.push(response.data[i].colors[c]);
            }
          }
        }

        let data = {
          items: response.data,
          colors: colors,
        };

        dispatch(getJustForYouProductSuccess(data));
        dispatch(getJustForYouProductError(""));
      })
      .catch((error) => {
        const failed = "Error in getting the products";
        dispatch(getJustForYouProductError(failed));
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
      .get(`${SERVER_URL}/items?isBestSeller=true`)
      .then((response) => {
        let colors = [];
        for (let i = 0; i < response.data.length; i++) {
          for (let c = 0; c < response.data[i].colors.length; c++) {
            if (!colors.includes(response.data[i].colors[c])) {
              colors.push(response.data[i].colors[c]);
            }
          }
        }

        let data = {
          items: response.data,
          colors: colors,
        };

        dispatch(getBestSellersSuccess(data));
        dispatch(getBestSellersError(""));
      })
      .catch((error) => {
        const failed = "Error in getting the products";
        dispatch(getBestSellersError(failed));
      });
  };
};

//GET NEW ARRIVAL PROUDCTS--------------------------------------
export const getNewArrivalsSuccess = (data) => {
  return {
    type: GET_NEW_ARRIVALS_SUCCESS,
    payload: data,
  };
};

export const getNewArrivalsError = (data) => {
  return {
    type: GET_NEW_ARRIVALS_ERROR,
    payload: data,
  };
};

export const getNewArrivals = () => {
  return (dispatch) => {
    return axios
      .get(`${SERVER_URL}/items?isNewArrival=true`)
      .then((response) => {
        let colors = [];
        for (let i = 0; i < response.data.length; i++) {
          for (let c = 0; c < response.data[i].colors.length; c++) {
            if (!colors.includes(response.data[i].colors[c])) {
              colors.push(response.data[i].colors[c]);
            }
          }
        }

        let data = {
          items: response.data,
          colors: colors,
        };

        dispatch(getNewArrivalsSuccess(data));
        dispatch(getNewArrivalsError(""));
      })
      .catch((error) => {
        const failed = "Error in getting the products";
        dispatch(getNewArrivalsError(failed));
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
