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
} from "../actions/types";

const productInitialState = {
  appleProducts: [],
  androidProducts: [],
  preferdProducts: [],
  bestSellerProducts: [],
  colors: [],
  product: "",
  error: "",
};

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case GET_APLLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        appleProducts: action.payload.items,
        colors: action.payload.colors,
      };
    case GET_APLLE_PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    case GET_ANDROID_PRODUCTS_SUCCESS:
      return {
        ...state,
        androidProducts: action.payload.items,
        colors: action.payload.colors,
      };
    case GET_ANDROID_PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case GET_SINGLE_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    case GET_USER_PREFERANCE_SUCCESS:
      return {
        ...state,
        preferdProducts: action.payload.items,
        colors: action.payload.colors,
      };
    case GET_USER_PREFERANCE_ERROR:
      return { ...state, error: action.payload };
    case GET_BEST_SELLERS_SUCCESS:
      return {
        ...state,
        bestSellerProducts: action.payload.items,
        colors: action.payload.colors,
      };
    case GET_BEST_SELLERS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
