import React from "react";
import RelatedProducts from "./RelatedProducts";
import ReviewAndDescription from "./ReviewAndDescription";
import Footer2 from "../includes/Footer2";

export default function SingleProduct(config) {
  return (
    <div>
      <ReviewAndDescription />
      <RelatedProducts />
      <Footer2 />
    </div>
  );
}
