import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

//IMPORT INCLUEDS --------------------------
import TopBar from "./components/includes/TopBar";
import NavigationBar from "./components/includes/NavigationBar";
import Footer from "./components/includes/Footer";
//IMPORT PAGES -----------------------------
import HomePage from "./components/HomePage";
import Login from "./components/userComponents/Login";
import SignUp from "./components/userComponents/SignUp";
import AppleProducts from "./components/productComponents/AppleProducts";
import ShoppingCart from "./components/shoppingCartComponents/ShoppingCart";
import ShippingAndPayment from "./components/shoppingCartComponents/ShippingAndPayment";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user !== "false") {
      return (
        <Router>
          <div className="App">
            <TopBar />
            <NavigationBar />
            <Switch>
              <Route path="/" exact component={() => <HomePage />} />
              <Route
                path="/apple-products"
                component={() => <AppleProducts />}
              />
              <Route path="/shopping-cart" component={() => <ShoppingCart />} />
              <Route
                path="/shipping-payment"
                component={() => <ShippingAndPayment />}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div className="App">
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
              <Route path="/shopping-cart" component={() => <ShoppingCart />} />
              <Route
                path="/shipping-payment"
                component={() => <ShippingAndPayment />}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userData.user || [],
  };
};

export default connect(mapStateToProps, null)(App);
