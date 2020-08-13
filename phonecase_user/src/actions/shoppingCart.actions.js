import {
  ADD_TO_SHOPPING_CART_SUCCESS,
  ADD_TO_SHOPPING_CART_ERROR,
  REMOVE_SHOPPING_CART_SUCCESS,
  REMOVE_SHOPPING_CART_ERROR,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_ERROR,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
} from "./types";
import { history } from "../index";
import { SERVER_URL } from "../constant";
import axios from "axios";
import { toast } from "react-toastify";

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
      toast.success("Item added to the cart");
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

//UPDATE CART ITEM--------------------------------
export const updateCartItemSuccess = (data) => {
  return {
    type: UPDATE_CART_ITEM_SUCCESS,
    payload: data,
  };
};

export const updateCartItemError = (data) => {
  return {
    type: UPDATE_CART_ITEM_ERROR,
    payload: data,
  };
};

export const updateCartItem = (data) => {
  return (dispatch) => {
    try {
      dispatch(updateCartItemSuccess(data));
      dispatch(updateCartItemError(""));
    } catch (e) {
      console.log(e);
      dispatch(updateCartItemError("Error in updating the cart item"));
    }
  };
};

//PLACE ORDER------------------------------
export const placeOrderSuccess = () => {
  return {
    type: PLACE_ORDER_SUCCESS,
  };
};

export const placeOrderError = (data) => {
  return {
    type: PLACE_ORDER_ERROR,
    payload: data,
  };
};

export const placeOrder = (data) => {
  return (dispatch) => {
    return axios
      .post(`${SERVER_URL}/admin/orders`, data)
      .then((response) => {
        dispatch(placeOrderError(""));
        dispatch(placeOrderSuccess());
        toast.success("Order Placesed Successfully");
        history.push("/");
      })
      .catch((error) => {
        dispatch(placeOrderError(""));
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };
};
