import React from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUP from "./SignUp";

export default function Content(config, loginClick) {
    const state = config.config

    if (state.page === "menu1") {
        return (
            <div>
                <menuApple/>
            </div>
        )
    }
    if (state.page === "menu2") {
        return (
            <div>
                <menuApple/>
            </div>
        )
    }
    if (state.page === "menu3") {
        return (
            <div>
                <menuApple/>
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

    return (
        <div>
            <HomePage/>
        </div>
    );
}