import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Footer from "./includes/Footer";
import Content from "./Content";
import TopBar from "./includes/TopBar";
import NavigationBar from "./includes/NavigationBar";
import LoadingWindow from "./LoadingWindow";

export default function MainView({config, pageNavigation, signUp, activeWindow, loginClick}) {


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
    return (
        <div>
         {/*loading or error page*/}
            <LoadingWindow/>
        </div>
    );
}
