import { combineReducers } from "redux";
import initialState from "./initialStateSetupReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import newsLetterReducer from "./neweLetterReducer";

export default combineReducers({
  initialState: initialState,
  userData: userReducer,
  productData: productReducer,
  newsLetterData: newsLetterReducer,
});
