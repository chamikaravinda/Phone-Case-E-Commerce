import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdbreact";
import { history } from "../../index";

const ItemCard = (props) => {
  const handleLink = () => {
    history.push(`/product/${props.product.itemId}`);
  };

  return (
    <MDBRow
      className="p-xl-3"
      onClick={handleLink}
      style={{ maxWidth: "400px" }}
    >
      <MDBCol md="12">
        <div className="img-container">
          <img src={props.product.imgs[0]} alt="" />
          <MDBContainer className="inside">
            <MDBRow between>
              <MDBCol size="1">
                {props.product.discount ? (
                  <MDBBtn
                    rounded
                    color="danger"
                    size="sm"
                    style={{ borderRadius: 25 }}
                  >
                    {parseFloat(props.product.discount * 100)}%
                  </MDBBtn>
                ) : (
                  ""
                )}
              </MDBCol>
              <MDBCol size="1" className="pr-5 mr-3 pt-2">
                {/* <MDBIcon
                  fab
                  icon="gratipay"
                  size="3x"
                  color="black"
                  className="white-text "
                /> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBCol>

      <MDBCol className="pt-2">
        <MDBRow>
          <MDBCol xl="7" style={{ marginBottom: "-10px" }}>
            <p className="font-weight-bold">{props.product.itemName}</p>
          </MDBCol>
          <MDBCol xl="4" style={{ marginBottom: "-10px" }}>
            <MDBRow between>
              <MDBCol size="6">
                {props.product.discount ? (
                  <p className="font-weight-bold" style={{ color: "red" }}>
                    {props.product.priceStartAt -
                      props.product.priceStartAt * props.product.discount}
                  </p>
                ) : (
                  ""
                )}
              </MDBCol>
              <MDBCol size="6">
                <p className="font-weight-bold">{props.product.priceStartAt}</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol size="12" style={{ marginBottom: "-10px" }}>
            <p className="font-weight-light">
              {props.product.models[0].brand} {props.product.models[0].model}{" "}
              and {props.product.models.length - 1} more{" "}
            </p>
          </MDBCol>
          <MDBCol size="12" style={{ marginBottom: "-10px" }}>
            <p className="font-weight-light">
              {props.product.colors.length} Colors
            </p>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
};

export default ItemCard;
