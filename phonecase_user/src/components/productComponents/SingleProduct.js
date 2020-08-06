import React from "react";
import { useParams } from "react-router";
import RelatedProducts from "./RelatedProducts";
import ReviewAndDescription from "./ReviewAndDescription";
import Footer2 from "../includes/Footer2";
import { MDBRow, MDBCol } from "mdbreact";

const SingleProduct = (props) => {
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      <div>
        <MDBRow>
          <MDBCol md="6"></MDBCol>
          <MDBCol md="6"></MDBCol>
        </MDBRow>
      </div>
      <ReviewAndDescription />
      <RelatedProducts />
      <Footer2 />
    </div>
  );
};

export default SingleProduct;
