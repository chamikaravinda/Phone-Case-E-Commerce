import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import emailSubscriptionReducer from "./emailSubscriptionReducer";
import homePageImagesReducer from "./homePageImagesReducer";

export default combineReducers({
  userData: userReducer,
  productData: productReducer,
  shoppingCartData: shoppingCartReducer,
  emailSubscriptionData: emailSubscriptionReducer,
  homepageImageData: homePageImagesReducer,
});
