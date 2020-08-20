import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer } from "mdbreact";
import ShoppingCartItem from "./ShoppingCartItem";
import Footer2 from "../includes/Footer2";
import { history } from "../../index";

const ShoppingCart = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [update, setUpdate] = useState(0);

  const handleCheckout = () => {
    history.push("/shipping-payment");
  };

  const handleContinue = () => {
    history.push("/");
  };

  useEffect(() => {
    let tempTotal = 0;
    props.cart.forEach((item) => {
      tempTotal = parseFloat(tempTotal) + parseFloat(item.price);
    });
    tempTotal = tempTotal.toFixed(2);
    setCartTotal(tempTotal);
  }, []);

  const handleUpdate = (value) => {
    setUpdate(value);
    let tempTotal = 0;
    props.cart.forEach((item) => {
      tempTotal = parseFloat(tempTotal) + parseFloat(item.price);
    });
    tempTotal = tempTotal.toFixed(2);
    setCartTotal(tempTotal);
  };

  if (props.cart.length == 0) {
    return (
      <>
        {" "}
        <MDBContainer style={{ minHeight: "49vh" }}>
          <br></br>
          <br></br>
          <h5>No Items To show. Keep Shopping</h5>
        </MDBContainer>
        <Footer2 />
      </>
    );
  } else {
    return (
      <div>
        <div
          style={{
            overflow: "hidden",
            paddingLeft: "7%",
            paddingRight: "7%",
            paddingTop: "4%",
            paddingBottom: "6%",
          }}
        >
          <MDBRow className="pb-5 " between>
            <MDBCol className="col-xs-7  col-lg-3">
              <h3 className="font-weight-bold">Shopping Cart</h3>
            </MDBCol>

            <MDBCol className="col-xs-6 col-sm-5 col-md-3 col-lg-3 col-xl-2">
              <MDBRow>
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#FBB03B",
                    borderRadius: "50%",
                    display: "inline - block",
                  }}
                  className="d-flex align-items-center text-center"
                >
                  <MDBIcon
                    style={{ paddingLeft: "8px", color: "white" }}
                    size="2x"
                    icon="shopping-cart"
                  />
                </div>
                <hr
                  style={{
                    height: "1px",
                    width: "30%",
                    backgroundColor: "#cfd8dc",
                    marginTop: "25px",
                    marginLeft: "5%",
                    marginRight: "5%",
                  }}
                ></hr>
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    display: "inline - block",
                  }}
                  className="d-flex align-items-center text-center"
                >
                  <MDBIcon
                    style={{ paddingLeft: "13px", color: "#cfd8dc" }}
                    size="2x"
                    icon="truck"
                  />
                </div>
              </MDBRow>
            </MDBCol>
            <MDBCol
              className="col-12 col-sm-8 d-block d-md-none pt-4"
              onClick={() => handleContinue()}
            >
              <h6 className="font-weight-bold">
                {"   "}
                <MDBIcon icon="arrow-left" /> {"   "}
                Continue Shopping{" "}
              </h6>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-start">
            <MDBCol md="4" className="d-none d-md-block">
              <h5 className="font-weight-bold" style={{ color: "#cfd8dc" }}>
                Product
              </h5>
            </MDBCol>
            <MDBCol md="2" className="d-none d-md-block">
              {" "}
              <h5 className="font-weight-bold" style={{ color: "#cfd8dc" }}>
                Brand
              </h5>
            </MDBCol>
            <MDBCol md="1" className="d-none d-md-block">
              {" "}
              <h5 className="font-weight-bold" style={{ color: "#cfd8dc" }}>
                Size
              </h5>
            </MDBCol>
            <MDBCol md="3" className="d-none d-md-block">
              {" "}
              <h5 className="font-weight-bold" style={{ color: "#cfd8dc" }}>
                Quantity
              </h5>
            </MDBCol>
            <MDBCol md="1" className="d-none d-md-block">
              {" "}
              <h5 className="font-weight-bold" style={{ color: "#cfd8dc" }}>
                Price
              </h5>
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
          {props.cart.map((item) => {
            return (
              <ShoppingCartItem detail={item} handleUpdate={handleUpdate} />
            );
          })}
          <MDBRow className=" pt-5 d-flex justify-content-center">
            <MDBCol className="col-md-3 d-none d-md-block">
              <a style={{ cursor: "pointer" }} onClick={() => handleContinue()}>
                <h6 className="font-weight-bold">
                  {"   "}
                  <MDBIcon icon="arrow-left" /> {"   "}
                  Continue Shopping{" "}
                </h6>
              </a>
            </MDBCol>
            <MDBCol className="col-6  col-sm-5 col-md-3 d-flex justify-content-center">
              <input
                type="email"
                style={{ borderRadius: 25, maxWidth: "500px" }}
                className="form-control aling-center"
                placeholder=" Promo Code"
              />
            </MDBCol>
            <MDBCol className=" col-6 col-sm-3 col-md-3 text-right pt-2">
              <h6>
                Total Cost{" "}
                <span className="font-weight-bold">${cartTotal}</span>
              </h6>
            </MDBCol>
            <MDBCol
              className="col-sm-4 col-md-3 pb-2 d-flex justify-content-end"
              style={{ paddingTop: " -100px" }}
            >
              <MDBBtn
                style={{ borderRadius: "25px" }}
                size="sm"
                color="warning"
                onClick={() => handleCheckout()}
              >
                CHECK OUT
              </MDBBtn>{" "}
            </MDBCol>
          </MDBRow>
        </div>
        <Footer2 />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCartData.cart || [],
    error: state.shoppingCartData.error || "",
  };
};

export default connect(mapStateToProps, null)(ShoppingCart);
