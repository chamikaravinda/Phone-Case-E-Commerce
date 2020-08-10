import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getAndroidProducts,
  getAppleProducts,
} from "../../actions/product.actions";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { MDBCol, MDBRow } from "mdbreact";
import ItemCard from "./ItemCard";

const RelatedProducts = (props) => {
  useEffect(() => {
    props.onGetAndroidProduct();
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className="pb-5 pt-5 pl-5 pr-5">
          <MDBRow className="pb-5 pt-5" between>
            <MDBCol className="col-xs-7  col-lg-3">
              <h3 className="font-weight-bold">You might also like</h3>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {props.androidProduct.length > 4
              ? props.androidProduct.slice(0, 4).map((item) => {
                  return (
                    <MDBCol className="col-lg-3 d-none d-lg-block">
                      {" "}
                      <ItemCard product={item} />
                    </MDBCol>
                  );
                })
              : props.androidProduct
                  .slice(0, props.androidProduct.length)
                  .map((item) => {
                    return (
                      <MDBCol className="col-lg-3 d-none d-lg-block">
                        {" "}
                        <ItemCard product={item} />
                      </MDBCol>
                    );
                  })}
          </MDBRow>
          <MDBRow>
            {props.androidProduct.length > 3
              ? props.androidProduct.slice(0, 3).map((item) => {
                  return (
                    <MDBCol className="col-lg-3 d-block d-lg-none">
                      {" "}
                      <ItemCard product={item} />
                    </MDBCol>
                  );
                })
              : props.androidProduct
                  .slice(0, props.androidProduct.length)
                  .map((item) => {
                    return (
                      <MDBCol className="col-lg-3 d-block d-lg-none">
                        {" "}
                        <ItemCard product={item} />
                      </MDBCol>
                    );
                  })}
          </MDBRow>
        </div>
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    androidProduct: state.productData.androidProducts || [],
    appleProducts: state.productData.appleProducts || [],
    images: state.homepageImageData.images || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAndroidProduct: () => {
      dispatch(getAndroidProducts());
    },
    onGetAppleProduct: () => {
      dispatch(getAppleProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);
