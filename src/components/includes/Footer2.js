import React from "react";
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";

import background from "../assets/images/footer_2_background.png";

const Footer2 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <MDBRow className="d-none d-xl-block">
        <div style={{ height: "120px" }}></div>
      </MDBRow>
      <MDBRow between>
        <MDBCol className="d-flex align-items-center pt-3" xl="2">
          <div
            style={{
              backgroundColor: "#FBB03B",
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "25px",
              height: "60px",
              width: "100px",
            }}
          >
            <h3
              style={{
                padding: "15px",
                fontWeight: "1000",
                color: "white",
              }}
            >
              -10%
            </h3>
          </div>
        </MDBCol>
        <MDBCol
          className="d-flex align-items-center justify-content-center ml-5 ml-sm-5 ml-md-5 ml-lg-5 mr-5 mr-sm-5 mr-md-5 mr-lg-5 d-xl-0 pt-3"
          xl="3"
        >
          <h5
            className="font-weight-normal text-center"
            style={{ color: "white" }}
          >
            Subscribe to our newsletter and receive exclusive offers every week
          </h5>
        </MDBCol>
        <MDBCol
          className=" d-flex align-items-center justify-content-center ml-5 ml-sm-5 ml-md-5 ml-lg-5 mr-5 mr-sm-5 mr-md-5 mr-lg-5 d-xl-0 pt-3"
          xl="2"
        >
          <input
            type="email"
            style={{ borderRadius: 25, maxWidth: "500px" }}
            className="form-control aling-center"
            placeholder=" E-mail"
          />
        </MDBCol>

        <MDBCol
          className="d-flex align-items-center justify-content-center pt-3"
          xl="2"
        >
          <MDBBtn style={{ borderRadius: "25px" }} color="warning">
            SUBSCRIBE
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Footer2;
