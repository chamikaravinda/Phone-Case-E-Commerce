import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Footer from "./includes/Footer";
import Content from "./Content";
import TopBar from "./includes/TopBar";
import NavigationBar from "./includes/NavigationBar";
import LoadingWindow from "./LoadingWindow";
import Login from "./userComponents/Login";
import SignUP from "./userComponents/SignUp";

export default function MainView({config, pageNavigation, signUp, activeWindow, loginClick}) {
    console.log("eee",config.activeWindow)

    if (config.activeWindow === 0) {
        return (
            <div>
                <TopBar/>
                <NavigationBar loginClick={loginClick} pageNavigation={pageNavigation}/>
                <Content onClick={activeWindow} pageNavigation={pageNavigation} config={config} signUp={signUp}/>
                <Footer/>
            </div>
        );
    }

    if (config.activeWindow === 1) {
        return (
            <div>
                <Login config={config}  signUp={signUp} pageNavigation={pageNavigation}/>
                <Footer/>
            </div>
        );
    }

    if (config.activeWindow === 2) {
        return (
            <div>
                <SignUP config={config}  pageNavigation={pageNavigation}/>
                <Footer/>
            </div>
        );
    }

    return (
        <div>
            {/*loading or error page*/}
            <LoadingWindow/>
        </div>
    );
}
