import {
  ADD_TO_SHOPPING_CART_SUCCESS,
  ADD_TO_SHOPPING_CART_ERROR,
  REMOVE_SHOPPING_CART_SUCCESS,
  REMOVE_SHOPPING_CART_ERROR,
} from "../actions/types";

const shoppingCartInitialState = {
  cart: [],
  error: "",
};

const shoppingCartReducer = (state = shoppingCartInitialState, action) => {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART_SUCCESS:
      return { ...state, cart: addToCart(state, action.payload) };
    case ADD_TO_SHOPPING_CART_ERROR:
      return { ...state, error: action.payload };
    case REMOVE_SHOPPING_CART_SUCCESS:
      const updateCart = state.cart.filter((item) => item.id != action.payload);
      return { ...state, cart: updateCart };
    case REMOVE_SHOPPING_CART_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const addToCart = (state, data) => {
  let updated = false;
  let tempCart = state.cart;

  let tempId = 0;

  if (tempCart.length == 0) {
    tempId = 1;
  } else {
    tempId = tempCart[tempCart.length - 1].cartItemId + 1;
  }

  tempCart.forEach((element) => {
    if (
      element.itemId == data.itemId &&
      element.brand == data.brand &&
      element.model == data.model
    ) {
      element.qty = element.qty + data.qty;
      updated = true;
    }
  });

  if (!updated) {
    data.cartItemId = tempId;
    tempCart.push(data);
  }
  return tempCart;
};

export default shoppingCartReducer;
