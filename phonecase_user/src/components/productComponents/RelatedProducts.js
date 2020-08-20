import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getAndroidProducts,
  getAppleProducts,
  getJustForYouProduct,
} from "../../actions/product.actions";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { MDBCol, MDBRow } from "mdbreact";
import ItemCard from "./ItemCard";

const RelatedProducts = (props) => {
  useEffect(() => {
    props.onGetJustForYou();
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
            {props.justForYouProduct.length > 4
              ? props.justForYouProduct.slice(0, 4).map((item) => {
                  return (
                    <MDBCol className="col-lg-3 d-none d-lg-block">
                      {" "}
                      <ItemCard product={item} />
                    </MDBCol>
                  );
                })
              : props.justForYouProduct
                  .slice(0, props.justForYouProduct.length)
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
            {props.justForYouProduct.length > 3
              ? props.justForYouProduct.slice(0, 3).map((item) => {
                  return (
                    <MDBCol className="col-lg-3 d-block d-lg-none">
                      {" "}
                      <ItemCard product={item} />
                    </MDBCol>
                  );
                })
              : props.justForYouProduct
                  .slice(0, props.justForYouProduct.length)
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
    justForYouProduct: state.productData.justForYouProducts || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetJustForYou: () => {
      dispatch(getJustForYouProduct());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);
