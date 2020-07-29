import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBCloseIcon } from "mdbreact";
import Avatar from "@material-ui/core/Avatar";

export default function ShoppingCartItem() {
  const [value, setValue] = useState(1);

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
      <MDBCol className="col-5 col-sm-3 col-md-2 col-lg-2 col-xl-2 pb-2">
        <h6>iPhone</h6>
      </MDBCol>
      <MDBCol className="col-5 col-sm-3 col-md-1 col-lg-1 col-xl-1 pb-2">
        <h6>6s</h6>
      </MDBCol>
      <MDBCol className="d-block d-md-none col-2 col-sm-1"></MDBCol>
      <MDBCol className="col-11 col-sm-6 col-md-3 col-lg-3 col-xl-3 pb-2">
        <div
          className="def-number-input number-input ml-4 ml-sm-0"
          style={{ borderRadius: "25px" }}
        >
          <button
            onClick={() => setValue(value - 1)}
            className="minus"
          ></button>
          <input
            className="quantity"
            name="quantity"
            value={value}
            onChange={() => console.log("change")}
            type="number"
          />
          <button onClick={() => setValue(value + 1)} className="plus"></button>
        </div>
      </MDBCol>
      <MDBCol className="col-5 col-sm-5 col-md-1 col-lg-1 col-xl-1 pb-2 mt-2 mt-sm-0 ml-4 ml-sm-0">
        <h6 className="font-weight-bold">$67.99</h6>
      </MDBCol>
      <MDBCol className="justify-content-start d-none d-md-block col-sm-1 col-md-1 col-lg-1 col-xl-1">
        <MDBCloseIcon></MDBCloseIcon>
      </MDBCol>
    </MDBRow>
  );
}
