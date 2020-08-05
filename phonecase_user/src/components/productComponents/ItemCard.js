import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdbreact";

import itemPhoto from "../assets/images/phone.png";

const ItemCard = (config) => {
  return (
    <MDBRow className="p-xl-3">
      <MDBCol md="12">
        <MDBCard
          className="card-image"
          style={{
            backgroundImage: `url(${itemPhoto})`,
            backgroundPosition: "50% 50%",
            height: "500px",
            backgroundRepeat: " no-repeat",
          }}
        >
          <MDBContainer>
            <MDBRow between>
              <MDBCol size="1">
                <MDBBtn
                  rounded
                  color="danger"
                  size="sm"
                  style={{ borderRadius: 25 }}
                >
                  30%
                </MDBBtn>
              </MDBCol>
              <MDBCol size="1" className="pr-5 mr-3 pt-2">
                <MDBIcon
                  fab
                  icon="gratipay"
                  size="3x"
                  color="black"
                  className="white-text "
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCard>
      </MDBCol>

      <MDBCol className="pt-2">
        <MDBRow>
          <MDBCol xl="7" style={{ marginBottom: "-10px" }}>
            <p className="font-weight-bold">Abstract Printed Case</p>
          </MDBCol>
          <MDBCol xl="4" style={{ marginBottom: "-10px" }}>
            <MDBRow between>
              <MDBCol size="6">
                <p className="font-weight-bold" style={{ color: "red" }}>
                  $89.99
                </p>
              </MDBCol>
              <MDBCol size="6">
                <p className="font-weight-bold">$119.99</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol size="12" style={{ marginBottom: "-10px" }}>
            <p className="font-weight-light">Apple iPhone</p>
          </MDBCol>
          <MDBCol size="12" style={{ marginBottom: "-10px" }}>
            <p className="font-weight-light">2 Colors</p>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
};

export default ItemCard;
