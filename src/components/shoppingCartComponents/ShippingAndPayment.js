import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer } from "mdbreact";
import ShippingInformation from "./ShippingInformation";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

export default function ShippingAndPayment() {
  const handleContinue = () => {
    return undefined;
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
        <MDBBtn style={{ borderRadius: "25px" }} size="sm" color="warning">
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
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderRadius: "5px",
                  borderColor: "#d0d6e2",
                }}
                className="pl-2 pt-3 pb-2"
              >
                <h6 className="font-weight-bolder" style={{ color: "#d0d6e2" }}>
                  Cash on Delivery
                </h6>
              </div>
              <br></br>
              <div
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderRadius: "5px",
                  borderColor: "#FBB03B",
                }}
                className="pl-2 pt-3 pb-2"
              >
                <h6 className="font-weight-bolder">Direct Bank Transfer</h6>
                <p>Make your payment directly into our Sampath Bank Account</p>
              </div>
              <br></br>
              <div
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderRadius: "5px",
                  borderColor: "#d0d6e2",
                }}
                className="pl-2 pt-3 pb-2"
              >
                <h6 className="font-weight-bolder" style={{ color: "#d0d6e2" }}>
                  Pay Online
                </h6>
                <p>Logos will be displayed here</p>
              </div>
            </MDBCol>
            <MDBCol className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 pt-2">
              <h5 className="font-weight-bold">Your Cart</h5>
              <br></br>
              <MDBRow>
                <MDBCol className="col-xl-8">
                  <MDBRow>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <MDBCol className="text-start">
                      <h6 className="font-weight-bold">Abstract Design Case</h6>
                      <p style={{ color: "#cfd8dc" }}>#261311</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol className="col-xl-4 text-right">
                  <h6 className="font-weight-bold">$67.99</h6>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="col-xl-8">
                  <MDBRow>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <MDBCol className="text-start">
                      <h6 className="font-weight-bold">Abstract Design Case</h6>
                      <p style={{ color: "#cfd8dc" }}>#261311</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol className="col-xl-4 text-right">
                  <h6 className="font-weight-bold">$67.99</h6>
                </MDBCol>
              </MDBRow>
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
                    <h6 className="font-weight-bolder pl-1"> $159,98</h6>
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
}
