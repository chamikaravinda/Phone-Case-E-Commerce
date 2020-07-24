import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBCloseIcon } from "mdbreact";
import Avatar from "@material-ui/core/Avatar";

export default function ShoppingCartItem() {
  return (
    <MDBRow className="justify-content-start pt-4">
      <MDBCol className="justify-content-start d-block d-md-none col-1 col-sm-1">
        <MDBCloseIcon></MDBCloseIcon>
      </MDBCol>
      <MDBCol className=" col-11 col-sm-5 col-md-4 col-lg-4 col-xl-4 pl-4 pb-2">
        <MDBRow>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <MDBCol className="text-start">
            <h6 className="font-weight-bold">Abstract Design Case</h6>
            <p style={{ color: "#cfd8dc" }}>#261311</p>
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol className="d-block d-sm-none col-1 col-sm-1"></MDBCol>
      <MDBCol className="col-6 col-sm-3 col-md-2 col-lg-2 col-xl-2 pb-2">
        <h6>iPhone</h6>
      </MDBCol>
      <MDBCol className="col-5 col-sm-3 col-md-1 col-lg-1 col-xl-1 pb-2">
        <h6>6s</h6>
      </MDBCol>
      <MDBCol className="d-block d-md-none col-1 col-sm-1"></MDBCol>
      <MDBCol className="col-5 col-sm-6 col-md-2 col-lg-2 col-xl-2 pb-2">
        <div
          style={{
            borderStyle: "solid",
            borderRadius: "25px",
            borderColor: "#cfd8dc",
            borderWidth: "2px",
            width: "80%",
            paddingTop: "10px",
            marginTop: "-10px",
          }}
          className="d-flex justify-content-center"
        >
          <button
            style={{
              backgroundColor: "Transparent",
              backgroundRepeat: "no-repeat",
              border: "none",
              cursor: "pointer",
              overflow: "hidden",
              outline: "none",
              width: "30%",
            }}
          >
            -
          </button>

          <h6 className="font-weight-bold" style={{ paddingTop: "1px" }}>
            1
          </h6>
          <button
            style={{
              backgroundColor: "Transparent",
              backgroundRepeat: "no-repeat",
              border: "none",
              cursor: "pointer",
              overflow: "hidden",
              outline: "none",
              width: "30%",
            }}
          >
            +
          </button>
        </div>
      </MDBCol>
      <MDBCol className="col-5 col-sm-5 col-md-2 col-lg-2 col-xl-2 pb-2">
        <h6 className="font-weight-bold">$67.99</h6>
      </MDBCol>
      <MDBCol className="justify-content-start d-none d-md-block col-sm-1 col-md-1 col-lg-1 col-xl-1">
        <MDBCloseIcon></MDBCloseIcon>
      </MDBCol>
    </MDBRow>
  );
}
