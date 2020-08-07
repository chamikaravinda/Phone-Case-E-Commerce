import {
  ADD_TO_SHOPPING_CART_SUCCESS,
  ADD_TO_SHOPPING_CART_ERROR,
  REMOVE_SHOPPING_CART_SUCCESS,
  REMOVE_SHOPPING_CART_ERROR,
} from "./types";

//ADD TO CART--------------------------------
export const addToShoppingCartSuccess = (data) => {
  return {
    type: ADD_TO_SHOPPING_CART_SUCCESS,
    payload: data,
  };
};

export const addToShoppingCartError = (data) => {
  return {
    type: ADD_TO_SHOPPING_CART_ERROR,
    payload: data,
  };
};

export const addToShoppingCart = (data) => {
  return (dispatch) => {
    try {
      dispatch(addToShoppingCartSuccess(data));
      dispatch(addToShoppingCartError(""));
    } catch (e) {
      console.log(e);
      dispatch(addToShoppingCartError("Error in adding item to the card"));
    }
  };
};

//REMOVE FROM CART--------------------------------
export const removeFromShoppingCartSuccess = (data) => {
  return {
    type: REMOVE_SHOPPING_CART_SUCCESS,
    payload: data,
  };
};

export const removeFromShoppingCartError = (data) => {
  return {
    type: REMOVE_SHOPPING_CART_ERROR,
    payload: data,
  };
};

export const removeFromShoppingCart = (data) => {
  return (dispatch) => {
    try {
      dispatch(removeFromShoppingCartSuccess(data));
      dispatch(removeFromShoppingCartError(""));
    } catch (e) {
      console.log(e);
      dispatch(
        removeFromShoppingCartError("Error in removing item to the card")
      );
    }
  };
};
