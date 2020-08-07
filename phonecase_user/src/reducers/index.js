import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productRucer";

export default combineReducers({
  userData: userReducer,
  productData: productReducer,
});
