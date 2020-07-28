import React from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUP from "./SignUp";
import ShoppingCart from "./ShoppingCart";
import ShippingAndPayment from "./ShippingAndPayment";
import ReviewAndDescription from "./ReviewAndDescription";
import LoadingWindow from "./LoadingWindow";
import AppleProducts from "./productComponents/AppleProducts";

export default function Content(config, pageNavigation) {
    const state = config.config

    if (state.page === 0) {
        return (
            <div>
                <HomePage/>
            </div>
        )
    }
    if (state.page === 1) {
        return (
            <div>
                <Login config={config}/>
            </div>
        )
    }
    if (state.page === 2) {
        return (
            <div>
                <SignUP/>
            </div>
        )
    }
    if (state.page === 3) {
        return (
            <div>
                <ShoppingCart config={config}/>
            </div>
        )
    }
    if (state.page === 4) {
        return (
            <div>
                <ReviewAndDescription/>
            </div>
        )
    }

    if (state.page === 5) {
        return (
            <div>
                <AppleProducts/>
            </div>
        )
    }

    return (
        <div>
            <LoadingWindow/>
        </div>
    );
}