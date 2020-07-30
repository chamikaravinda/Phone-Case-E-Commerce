import React from "react";
import HomePage from "./HomePage";
import Login from "./userComponents/Login";
import SignUP from "./userComponents/SignUp";
import ShoppingCart from "./shoppingCartComponents/ShoppingCart";
import ShippingAndPayment from "./shoppingCartComponents/ShippingAndPayment";
import LoadingWindow from "./LoadingWindow";
import AppleProducts from "./productComponents/AppleProducts";

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
        <AppleProducts />
      </div>
    );
  }

  return (
    <div>
      <LoadingWindow />
    </div>
  );
}
