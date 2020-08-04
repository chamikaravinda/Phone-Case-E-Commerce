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
} from "../actions/types";

const productInitialState = {
  products: [],
};

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT_SUCCESS:
      return { ...state, products: [...state.products, action.payload] };
    case ADD_NEW_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    case GET_ALL_PRODUCT_SUCCESS:
      return { ...state, products: action.payload };
    case GET_ALL_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    case DELETE_PRODUCT_SUCCESS:
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, products: filteredProducts };
    case DELETE_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    case GET_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case GET_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_PRODUCT_SUCCESS:
      const updateProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, products: [...updateProducts, action.payload] };
    case UPDATE_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
