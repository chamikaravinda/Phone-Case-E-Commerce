import React from "react";
import {MDBRow, MDBCol, MDBIcon, MDBBtn} from "mdbreact";
import ShoppingCartItem from "./includes/ShoppingCartItem";

export default function ShoppingCart(config) {
    const handleCheckout = () => {
      config.config.pageNavigation("REVIEW_AND_DESCRIPTION")
    };

  const handleContinue = () => {
    config.config.pageNavigation("HOME_PAGE")
  }

  return (
        <div
            style={{
                overflow: "hidden",
                paddingLeft: "7%",
                paddingRight: "7%",
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
                                style={{paddingLeft: "8px", color: "white"}}
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
                                style={{paddingLeft: "13px", color: "#cfd8dc"}}
                                size="2x"
                                icon="truck"
                            />
                        </div>
                    </MDBRow>
                </MDBCol>
                <MDBCol className="col-12 col-sm-8 d-block d-md-none pt-4" onClick ={()=>handleContinue()}>
                    <h6 className="font-weight-bold">
                        {"   "}
                        <MDBIcon icon="arrow-left"/> {"   "}
                        Continue Shopping{" "}
                    </h6>
                </MDBCol>
            </MDBRow>
            <MDBRow className="justify-content-start">
                <MDBCol md="4" className="d-none d-md-block">
                    <h5 className="font-weight-bold" style={{color: "#cfd8dc"}}>
                        Product
                    </h5>
                </MDBCol>
                <MDBCol md="2" className="d-none d-md-block">
                    {" "}
                    <h5 className="font-weight-bold" style={{color: "#cfd8dc"}}>
                        Brand
                    </h5>
                </MDBCol>
                <MDBCol md="1" className="d-none d-md-block">
                    {" "}
                    <h5 className="font-weight-bold" style={{color: "#cfd8dc"}}>
                        Size
                    </h5>
                </MDBCol>
                <MDBCol md="3" className="d-none d-md-block">
                    {" "}
                    <h5 className="font-weight-bold" style={{color: "#cfd8dc"}}>
                        Amount
                    </h5>
                </MDBCol>
                <MDBCol md="1" className="d-none d-md-block">
                    {" "}
                    <h5 className="font-weight-bold" style={{color: "#cfd8dc"}}>
                        Price
                    </h5>
                </MDBCol>
                <MDBCol md="1"></MDBCol>
            </MDBRow>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <MDBRow className=" pt-5 d-flex justify-content-center">
                <MDBCol className="col-md-3 d-none d-md-block">
                    <h6 className="font-weight-bold" style={{paddingTop: " 6px"}} onClick ={()=>handleContinue()}>
                        {"   "}
                        <MDBIcon icon="arrow-left"/> {"   "}
                        Continue Shopping{" "}
                    </h6>
                </MDBCol>
                <MDBCol className="col-6  col-sm-5 col-md-3 d-flex justify-content-center">
                    <input
                        type="email"
                        style={{borderRadius: 25, maxWidth: "500px"}}
                        className="form-control aling-center"
                        placeholder=" Promo Code"
                    />
                </MDBCol>
                <MDBCol className=" col-6 col-sm-3 col-md-3 text-right pt-2">
                    <h6>
                        Total Cost <span className="font-weight-bold">$156.00</span>
                    </h6>
                </MDBCol>
                <MDBCol
                    className="col-sm-4 col-md-3 pb-2 d-flex justify-content-end"
                    style={{paddingTop: " -100px"}}
                >
                    <MDBBtn style={{borderRadius: "25px"}} size="sm" color="warning" onClick={()=>handleCheckout()}>
                        CHECK OUT
                    </MDBBtn>{" "}
                </MDBCol>
            </MDBRow>
        </div>
    );
}
