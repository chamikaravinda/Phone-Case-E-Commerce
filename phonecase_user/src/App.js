import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

//IMPORT INCLUEDS --------------------------
import TopBar from "./components/includes/TopBar";
import NavigationBar from "./components/includes/NavigationBar";
import Footer from "./components/includes/Footer";
//IMPORT PAGES -----------------------------
import HomePage from "./components/HomePage";
import Login from "./components/userComponents/Login";
import SignUp from "./components/userComponents/SignUp";
import Profile from "./components/userComponents/UserProfile";
import AppleProducts from "./components/productComponents/AppleProducts";
import AndroidProducts from "./components/productComponents/AndroidProducts";
import ShoppingCart from "./components/shoppingCartComponents/ShoppingCart";
import ShippingAndPayment from "./components/shoppingCartComponents/ShippingAndPayment";
import SingleProduct from "./components/productComponents/SingleProduct";
import AllReviews from "./components/productComponents/AllReviews";

class App extends Component {
  render() {
    if (this.props.user.headers) {
      return (
        <Router>
          <div className="App" style={{ backgroundColor: "white" }}>
            <TopBar />
            <NavigationBar />
            <Switch>
              <Route path="/" exact component={() => <HomePage />} />
              <Route
                path="/apple-products"
                component={() => <AppleProducts />}
              />
              <Route
                path="/android-products"
                component={() => <AndroidProducts />}
              />
              <Route path="/product/:id" component={() => <SingleProduct />} />
              <Route path="/shopping-cart" component={() => <ShoppingCart />} />
              <Route
                path="/shipping-payment"
                component={() => <ShippingAndPayment />}
              />
              <Route path="/profile" exact component={() => <Profile />} />
              <Route path="/customer-reviews" component={() => <AllReviews />} />
            </Switch>

            <ToastContainer />
            <Footer />
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div className="App" style={{ backgroundColor: "white" }}>
            <TopBar />
            <NavigationBar />
            <Switch>
              <Route path="/" exact component={() => <HomePage />} />
              <Route path="/login" exact component={() => <Login />} />
              <Route path="/signup" exact component={() => <SignUp />} />
              <Route
                path="/apple-products"
                component={() => <AppleProducts />}
              />
              <Route
                path="/android-products"
                component={() => <AndroidProducts />}
              />
              <Route path="/product/:id" component={() => <SingleProduct />} />
              <Route path="/shopping-cart" component={() => <ShoppingCart />} />
              <Route
                path="/shipping-payment"
                component={() => <ShippingAndPayment />}
              />
              <Route path="/customer-reviews" component={() => <AllReviews />} />
            </Switch>
            <ToastContainer />
            <Footer />
          </div>
        </Router>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userData.user,
  };
};

export default connect(mapStateToProps, null)(App);
