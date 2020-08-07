import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default combineReducers({
  userData: userReducer,
  productData: productReducer,
  shoppingCartData: shoppingCartReducer,
});
