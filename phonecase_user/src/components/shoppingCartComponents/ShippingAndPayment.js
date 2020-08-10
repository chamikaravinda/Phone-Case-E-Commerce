import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer } from "mdbreact";
import ShippingInformation from "./ShippingInformation";
import Avatar from "@material-ui/core/Avatar";
import { history } from "../../index";

const ShippingAndPayment = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [transferMethod, setTransferMethod] = useState("cash");

  useEffect(() => {
    let tempTotal = 0;
    props.cart.forEach((item) => {
      tempTotal = parseFloat(tempTotal) + parseFloat(item.price);
    });
    tempTotal = tempTotal.toFixed(2);
    setCartTotal(tempTotal);
  }, []);

  const handleContinue = () => {
    history.push("/");
  };

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <div
      style={{
        overflow: "hidden",
        paddingLeft: "7%",
        paddingRight: "7%",
        paddingTop: "4%",
        paddingBottom: "6%",
      }}
    >
      <MDBRow className="pb-1 " between>
        <MDBCol className="col-xs-7  col-lg-5">
          <h3 className="font-weight-bold">Shipping and Payment</h3>
        </MDBCol>

        <MDBCol className="col-xs-6 col-sm-5 col-md-3 col-lg-3 col-xl-2">
          <MDBRow>
            <MDBIcon
              style={{
                paddingLeft: "13px",
                color: "#cfd8dc",
                paddingTop: "12px",
              }}
              size="2x"
              icon="shopping-cart"
            />
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
                  icon="truck"
                />
              </div>
            </div>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBBtn
          style={{ borderRadius: "25px" }}
          size="sm"
          color="warning"
          onClick={handleLogin}
        >
          LOG IN
        </MDBBtn>
      </MDBRow>
      <MDBRow className="pt-3">
        <MDBCol className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-lg-5">
          <h5 className="font-weight-bold">Shipping information</h5>
          <ShippingInformation />
        </MDBCol>
        <MDBCol className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
          <MDBRow>
            <MDBCol className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 pr-sm-5 pt-2">
              <h5 className="font-weight-bold">Payment Method</h5>
              <br></br>
              <div
                className={
                  transferMethod === "cash"
                    ? "pl-2 pt-3 pb-2 selected-payment"
                    : "pl-2 pt-3 pb-2 not-selected-payment"
                }
                onClick={() => setTransferMethod("cash")}
              >
                <h6 className="font-weight-bolder">Cash on Delivery</h6>
              </div>
              <br></br>
              <div
                className={
                  transferMethod === "bank"
                    ? "pl-2 pt-3 pb-2 selected-payment"
                    : "pl-2 pt-3 pb-2 not-selected-payment"
                }
                onClick={() => setTransferMethod("bank")}
              >
                <h6 className="font-weight-bolder">Direct Bank Transfer</h6>
                <p>Make your payment directly into our Sampath Bank Account</p>
              </div>
              <br></br>
              <div
                className={
                  transferMethod === "online"
                    ? "pl-2 pt-3 pb-2 selected-payment"
                    : "pl-2 pt-3 pb-2 not-selected-payment"
                }
                onClick={() => setTransferMethod("online")}
              >
                <h6 className="font-weight-bolder">Pay Online</h6>
                <p>Logos will be displayed here</p>
              </div>
            </MDBCol>
            <MDBCol className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 pt-2">
              <h5 className="font-weight-bold">Your Cart</h5>
              <br></br>
              {props.cart.map((item) => {
                return (
                  <MDBRow>
                    <MDBCol className="col-xl-8">
                      <MDBRow>
                        <Avatar alt="Remy Sharp" src={item.imgs[0]} />
                        <MDBCol className="text-start">
                          <h6 className="font-weight-bold">{item.itemName}</h6>
                          <p style={{ color: "#cfd8dc" }}>{item.itemId}</p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol className="col-xl-4 text-right">
                      <h6 className="font-weight-bold">{item.price}</h6>
                    </MDBCol>
                  </MDBRow>
                );
              })}

              <MDBRow className="d-flex justify-content-center pt-5">
                <div
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#F1F1F1",
                    width: "70%",
                  }}
                  className="pt-3 pb-2 col-12"
                >
                  <MDBRow className="justify-content-center">
                    <h6>Total cost </h6>
                    <h6 className="font-weight-bold pl-1"> ${cartTotal}</h6>
                  </MDBRow>
                </div>
                <div className="pt-4 pb-2 col-12">
                  <MDBRow className="justify-content-center">
                    <MDBIcon
                      style={{ paddingRight: "8px" }}
                      size="2x"
                      icon="truck"
                    />{" "}
                    <h5 style={{ fontWeight: "500" }}>Free Shipping</h5>
                  </MDBRow>
                </div>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-end pt-5">
            <MDBBtn
              outline
              color="grey lighten-4"
              style={{ borderRadius: "25px", minWidth: "200px " }}
              onClick={handleContinue}
            >
              {" "}
              Continue shopping
            </MDBBtn>
            <MDBBtn
              color="amber"
              style={{ borderRadius: "25px", minWidth: "200px " }}
            >
              {" "}
              PLACE ORDER
            </MDBBtn>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCartData.cart || [],
    error: state.shoppingCartData.error || "",
  };
};

export default connect(mapStateToProps, null)(ShippingAndPayment);
