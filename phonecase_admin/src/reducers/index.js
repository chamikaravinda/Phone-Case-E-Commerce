import { combineReducers } from "redux";
import initialState from "./initialStateSetupReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import newsLetterReducer from "./neweLetterReducer";
import subscribersReducer from "./neweLetterReducer";
import homepageImageReducer from "./homePageImageReducer";

export default combineReducers({
  initialState: initialState,
  userData: userReducer,
  productData: productReducer,
  newsLetterData: newsLetterReducer,
  subscribersData: subscribersReducer,
  homepageImagesData: homepageImageReducer,
});
