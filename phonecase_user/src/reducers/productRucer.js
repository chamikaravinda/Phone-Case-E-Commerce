import {
  GET_APLLE_PRODUCTS_SUCCESS,
  GET_APLLE_PRODUCTS_ERROR,
  GET_ANDROID_PRODUCTS_SUCCESS,
  GET_ANDROID_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions/types";

const productInitialState = {
  appleProducts: [],
  androidProducts: [],
  product: "",
};

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case GET_APLLE_PRODUCTS_SUCCESS:
      return { ...state, appleProducts: action.payload };
    case GET_APLLE_PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    case GET_ANDROID_PRODUCTS_SUCCESS:
      return { ...state, androidProducts: action.payload };
    case GET_ANDROID_PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case GET_SINGLE_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
