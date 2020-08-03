import {
  ADD_NEW_PRODUCT_SUCCESS,
  ADD_NEW_PRODUCT_ERROR,
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
    default:
      return state;
  }
};

export default productReducer;
