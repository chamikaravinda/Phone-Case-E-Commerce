import React from "react";
import HomePage from "./HomePage";
import ShoppingCart from "./shoppingCartComponents/ShoppingCart";
import ShippingAndPayment from "./shoppingCartComponents/ShippingAndPayment";
import LoadingWindow from "./LoadingWindow";
import SingleProduct from "./productComponents/SingleProduct";
import RelatedProducts from "./productComponents/RelatedProducts";
import Footer2 from "./includes/Footer2";
import AddToCart from "./productComponents/AddToCart";
import ReviewAndDescription from "./productComponents/ReviewAndDescription";

export default function Content(config, pageNavigation) {
  const state = config.config;

  if (state.page === 0) {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
  if (state.page === 3) {
    return (
      <div>
        <ShoppingCart config={config} />
      </div>
    );
  }
  if (state.page === 4) {
    return (
      <div>
        <ShippingAndPayment />
      </div>
    );
  }

  if (state.page === 5) {
    return (
      <div>
        <SingleProduct pageNavigation={pageNavigation} config={config}/>
      </div>
    );
  }


  if(state.page === 6){
    return(
        <div>
          <AddToCart/>
          <ReviewAndDescription/>
          <RelatedProducts/>
          <Footer2/>
        </div>
    );
  }

  return (
    <div>
      <LoadingWindow config={config}/>
    </div>
  );
}
