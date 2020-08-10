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
  GET_NEW_DESING_TRENDS_SUCCESS,
  GET_NEW_DESING_TRENDS_ERROR,
  GET_BASIC_CASES_SUCCESS,
  GET_BASIC_CASES_ERROR,
} from "../actions/types";

const productInitialState = {
  appleProducts: [],
  androidProducts: [],
  justForYouProducts: [],
  bestSellerProducts: [],
  newArrivalProducts: [],
  newDesignTrendProducts: [],
  basicCasesProduct: [],
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
    case GET_JUST_FOR_YOU_SUCCESS:
      return {
        ...state,
        justForYouProducts: action.payload.items,
        colors: action.payload.colors,
      };
    case GET_JUST_FOR_YOU_ERROR:
      return { ...state, error: action.payload };
    case GET_BEST_SELLERS_SUCCESS:
      return {
        ...state,
        bestSellerProducts: action.payload.items,
        colors: action.payload.colors,
      };
    case GET_BEST_SELLERS_ERROR:
      return { ...state, error: action.payload };
    case GET_NEW_ARRIVALS_SUCCESS:
      return {
        ...state,
        newArrivalProducts: action.payload.items,
        colors: action.payload.colors,
      };
    case GET_NEW_ARRIVALS_ERROR:
      return { ...state, error: action.payload };
    case GET_NEW_DESING_TRENDS_SUCCESS:
      return {
        ...state,
        newDesignTrendProducts: action.payload.items,
        colors: action.payload.colors,
      };
    case GET_NEW_DESING_TRENDS_ERROR:
      return { ...state, error: action.payload };
    case GET_BASIC_CASES_SUCCESS:
      return {
        ...state,
        basicCasesProduct: action.payload.items,
        colors: action.payload.colors,
      };
    case GET_BASIC_CASES_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
