import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer } from "mdbreact";
import ShippingInformation from "./ShippingInformation";
import Avatar from "@material-ui/core/Avatar";
import { history } from "../../index";
import { getProfile, userSignUp } from "../../actions/user.actions";
import { placeOrder } from "../../actions/shoppingCart.actions";

const ShippingAndPayment = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [transferMethod, setTransferMethod] = useState("cash");
  const [newAccount, setNewAccount] = useState(false);
  const [diffAdrress, setDiffAdrress] = useState(false);
  const [shippingInformation, setShippingInformation] = useState({
    firstname: "",
    lastname: "",
    companyname: "",
    shippingaddress: "",
    city: "",
    postalcode: "",
    phoneno: "",
    emailaddress: "",
    password: "",
    diffFirstname: "",
    diffLastname: "",
    diffCompanyname: "",
    diffShippingaddress: "",
    diffCity: "",
    diffPostalcode: "",
    diffPhoneno: "",
  });

  const [submitError, setSubmitError] = useState();

  const handleShippingInfromation = (e) => {
    setShippingInformation({
      ...shippingInformation,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    props.onGetProfile();

    let tempTotal = 0;
    props.cart.forEach((item) => {
      tempTotal = parseFloat(tempTotal) + parseFloat(item.price);
    });
    tempTotal = tempTotal.toFixed(2);
    setCartTotal(tempTotal);

    setShippingInformation({
      ...shippingInformation,
      firstname: props.profile.fname,
      lastname: props.profile.lname,
      companyname: props.profile.companyname,
      shippingaddress: props.profile.shippingaddress,
      city: props.profile.city,
      postalcode: props.profile.postalcode,
      phoneno: props.profile.phnum,
      emailaddress: props.profile.email,
    });
  }, [cartTotal]);

  const handleContinue = () => {
    history.push("/");
  };

  const handleLogin = () => {
    history.push("/login");
  };

  const handlePlaceOrder = () => {
    if (!shippingInformation.firstname) {
      setSubmitError("Enter the First name");
      return;
    }

    if (!shippingInformation.lastname) {
      setSubmitError("Enter the Last name");
      return;
    }

    if (!shippingInformation.shippingaddress) {
      setSubmitError("Enter the Shipping Address");
      return;
    }

    if (!shippingInformation.city) {
      setSubmitError("Enter the City");
      return;
    }

    if (!shippingInformation.postalcode) {
      setSubmitError("Enter the Postl Code");
      return;
    }

    if (!shippingInformation.phoneno) {
      setSubmitError("Enter the Phone Number");
      return;
    }

    if (!shippingInformation.email) {
      setSubmitError("Enter the Email");
      return;
    }

    if (newAccount) {
      if (!shippingInformation.password) {
        setSubmitError("Enter the Password for a new account");
        return;
      }

      let user = {
        email: shippingInformation.email,
        password: shippingInformation.password,
        firstname: shippingInformation.firstname,
        lastname: shippingInformation.lastname,
        phonenum: shippingInformation.phoneno,
      };
      props.onUserSignUp(user);
    }

    let orderItem = [];

    props.cart.forEach((item) => {
      let tempItem = {
        itemId: item.itemId,
        itemName: item.itemName,
        price: item.price,
        model: item.model,
        imgs: item.imgs,
        qty: item.qty,
        discount: item.discount,
      };
      orderItem.push(tempItem);
    });

    if (diffAdrress) {
      if (!shippingInformation.diffFirstname) {
        setSubmitError("Enter the First name for the other Shipping Address");
        return;
      }

      if (!shippingInformation.diffFirstname) {
        setSubmitError("Enter the First name for the other Shipping Address");
        return;
      }

      if (!shippingInformation.diffShippingaddress) {
        setSubmitError("Enter the Address for the other Shipping Address");
        return;
      }

      if (!shippingInformation.diffCity) {
        setSubmitError("Enter the City for the other Shipping Address");
        return;
      }

      if (!shippingInformation.diffPostalcode) {
        setSubmitError("Enter the Postal Code for the other Shipping Address");
        return;
      }

      if (!shippingInformation.diffPhoneno) {
        setSubmitError("Enter the Phone Number for the other Shipping Address");
        return;
      }

      let shippingOrder = {
        userId: props.profile.userId,
        address: shippingInformation.diffShippingaddress,
        city: shippingInformation.diffCity,
        postalcode: shippingInformation.diffPostalcode,
        country: "",
        orderItem: orderItem,
      };

      props.onPlaceOrder(shippingOrder);
    } else {
      let shippingOrder = {
        userId: props.profile.userId,
        address: shippingInformation.shippingaddress,
        city: shippingInformation.city,
        postalcode: shippingInformation.postalcode,
        country: "",
        orderItem: orderItem,
      };
      props.onPlaceOrder(shippingOrder);
    }
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
        {!props.user.headers ? (
          <MDBBtn
            style={{ borderRadius: "25px" }}
            size="sm"
            color="warning"
            onClick={handleLogin}
          >
            LOG IN
          </MDBBtn>
        ) : (
          <br></br>
        )}
      </MDBRow>
      <MDBRow className="pt-3">
        <MDBCol className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-lg-5">
          <h5 className="font-weight-bold">Shipping information</h5>
          <ShippingInformation
            setInformation={handleShippingInfromation}
            shippingInformation={shippingInformation}
            newAccount={newAccount}
            setNewAccount={setNewAccount}
            diffAdrress={diffAdrress}
            setDiffAdrres={setDiffAdrress}
          />
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
              onClick={handlePlaceOrder}
            >
              {" "}
              PLACE ORDER
            </MDBBtn>
          </MDBRow>
          <MDBRow className="justify-content-center pt-3">
            {submitError ? (
              <div>
                <h6 style={{ color: "red" }}>{submitError}</h6>
                <br></br>
              </div>
            ) : (
              ""
            )}
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.userData.profile || "",
    user: state.userData.user || "",
    cart: state.shoppingCartData.cart || [],
    error: state.shoppingCartData.error || "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProfile: (header) => {
      dispatch(getProfile(header));
    },
    onPlaceOrder: (order) => {
      dispatch(placeOrder(order));
    },
    onUserSignUp: (user) => {
      dispatch(userSignUp(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingAndPayment);
