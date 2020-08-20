import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { history } from "../index";
import {
  getJustForYouProduct,
  getBestSellers,
} from "../actions/product.actions";
import { getHomePageImages } from "../actions/homePageImages.actions";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer2 from "./includes/Footer2";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
} from "mdbreact";

import Slider1 from "./assets/images/slider_1.png";
import HomeIcon1 from "./assets/images/home_icon_1.png";
import HomeIcon2 from "./assets/images/home_icon_2.png";
import HomeIcon3 from "./assets/images/home_icon_3.png";
import HomeTile1 from "./assets/images/home_title_1.png";
import HomeTile2 from "./assets/images/home_title_2.png";
import HomeTile3 from "./assets/images/home_title_3.png";
import HomeTile4 from "./assets/images/home_title_4.png";
import HomeTile5 from "./assets/images/home_title_5.png";

import ItemCard from "./productComponents/ItemCard";

const HomePage = (props) => {
  useEffect(() => {
    props.onGetJustForYouProduct();
    props.onGetBestSellerProducts();
    props.onGetHomePageImgs();
  }, []);

  const goToNewArrivals = () => {
    history.push("/new-arrival-products");
  };

  const goToBasicCases = () => {
    history.push("/basic-cases");
  };

  const geToNewDesignTrends = () => {
    history.push("/new-design-trends");
  };

  const goToJustForYou = () => {
    history.push("/just-for-you");
  };

  const goToBestSellers = () => {
    history.push("/best-sellers");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className="pb-5">
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              {props.images.map((img) => {
                return (
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                );
              })}
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
        <div
          style={{
            overflow: "hidden",
            paddingLeft: "7%",
            paddingRight: "7%",
          }}
        >
          <MDBRow center>
            <MDBCol className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 pr-3">
              <MDBRow center>
                <MDBCol className="col-3 col-sm-12 col-md-12 col-lg-3 pl-2 pb-3">
                  {" "}
                  <img src={HomeIcon1}></img>
                </MDBCol>
                <MDBCol className="col-9 col-sm-12 col-md-12 col-lg-9 pl-2">
                  <h4 style={{ fontWeight: "500" }}>Free Shipping</h4>
                  <h6 style={{ color: "#A8A8A8" }}>On purchases over $199</h6>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 pr-3">
              <MDBRow center>
                <MDBCol className="col-3 col-sm-12 col-md-12 col-lg-3 pl-2 pb-3">
                  {" "}
                  <img src={HomeIcon2}></img>
                </MDBCol>
                <MDBCol className="col-9 col-sm-12 col-md-12 col-lg-9 pl-2">
                  <h4 style={{ fontWeight: "500" }}>99% Satisfied Customers</h4>
                  <h6 style={{ color: "#A8A8A8" }}>
                    Our clients' opinions speak for themselves
                  </h6>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 pr-3">
              <MDBRow center>
                <MDBCol className=" col-3 col-sm-12 col-md-12 col-lg-3 pl-2 pb-3">
                  {" "}
                  <img src={HomeIcon3}></img>
                </MDBCol>
                <MDBCol className="col-9 col-sm-12 col-md-12 col-lg-9 pl-2">
                  <h4 style={{ fontWeight: "500" }}>Originality Guaranteed</h4>
                  <h6 style={{ color: "#A8A8A8" }}>
                    30 days warranty for each product from our store
                  </h6>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow className="pt-5" between>
            <MDBCol className="col-12 col-sm-12 col-md-4 col-lg-5 pl-2">
              {" "}
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage: `url(${HomeTile1})`,
                  backgroundPosition: "50% 50%",
                  height: "300px",
                  backgroundRepeat: " no-repeat",
                  maxWidth: "700px",
                }}
              >
                <MDBContainer>
                  <MDBRow className="d-flex align-items-center pt-5 mt-5">
                    <MDBCol className="col-md-12">
                      <h4 style={{ color: "white" }}>New arrivals</h4>
                      <h4 style={{ color: "white" }}>are now in!</h4>

                      <MDBBtn
                        style={{ borderRadius: "25px" }}
                        color="white"
                        className="mt-4"
                        size="sm"
                        onClick={goToNewArrivals}
                      >
                        SHOW COLLECTION
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCard>
            </MDBCol>
            <MDBCol className="col-12 col-sm-6 col-md-4 col-lg-3 pl-2">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage: `url(${HomeTile2})`,
                  backgroundPosition: "50% 50%",
                  height: "300px",
                  backgroundRepeat: " no-repeat",
                  maxWidth: "390px",
                }}
              >
                <MDBContainer>
                  <MDBRow className="d-flex align-items-center pt-5 mt-5">
                    <MDBCol className="col-md-12">
                      <h4 style={{ color: "white" }}>BasicCases</h4>
                      <h4 style={{ color: "white" }}>$29,99</h4>
                      <MDBBtn
                        style={{ borderRadius: "25px" }}
                        color="white"
                        className="mt-4"
                        size="sm"
                        onClick={goToBasicCases}
                      >
                        MORE DETAILS
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCard>
            </MDBCol>
            <MDBCol className="col-12 col-sm-6 col-md-4 col-lg-3 pl-2">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage: `url(${HomeTile3})`,
                  backgroundPosition: "50% 50%",
                  height: "300px",
                  backgroundRepeat: " no-repeat",
                  maxWidth: "390px",
                }}
              >
                <MDBContainer>
                  <MDBRow className="d-flex align-items-center pt-5 mt-5">
                    <MDBCol className="col-md-12">
                      <h4 style={{ color: "white" }}>New Designs</h4>{" "}
                      <h4 style={{ color: "white" }}>Trending</h4>
                      <MDBBtn
                        style={{ borderRadius: "25px" }}
                        color="white"
                        className="mt-4"
                        size="sm"
                        onClick={geToNewDesignTrends}
                      >
                        VIEW ALL
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow className="pb-5 pt-5" between>
            <MDBCol className="col-xs-7  col-lg-3">
              <h3>Just For You</h3>
            </MDBCol>

            <MDBCol className="col-xs-6 col-sm-5 col-md-3 col-lg-3 col-xl-2 d-flex  justify-content-end">
              <MDBBtn
                outline
                color="blue-grey"
                size="sm"
                style={{ borderRadius: "25px" }}
                onClick={goToJustForYou}
              >
                SHOW MORE
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {props.justForYouProducts.length > 4
              ? props.justForYouProducts.slice(0, 4).map((item) => {
                  return (
                    <MDBCol className="col-lg-3 d-none d-lg-block">
                      {" "}
                      <ItemCard product={item} />
                    </MDBCol>
                  );
                })
              : props.justForYouProducts
                  .slice(0, props.justForYouProducts.length)
                  .map((item) => {
                    return (
                      <MDBCol
                        className="col-lg-3 d-none d-lg-block"
                        key={item.id}
                      >
                        {" "}
                        <ItemCard product={item} />
                      </MDBCol>
                    );
                  })}
          </MDBRow>
          <MDBRow>
            {props.justForYouProducts.length > 3
              ? props.justForYouProducts.slice(0, 3).map((item) => {
                  return (
                    <MDBCol className="col-lg-3 d-block d-lg-none">
                      {" "}
                      <ItemCard product={item} />
                    </MDBCol>
                  );
                })
              : props.justForYouProducts
                  .slice(0, props.justForYouProducts.length)
                  .map((item) => {
                    return (
                      <MDBCol className="col-lg-3 d-block d-lg-none">
                        {" "}
                        <ItemCard product={item} />
                      </MDBCol>
                    );
                  })}
          </MDBRow>
          <MDBRow>
            <MDBCol className="col-12 col-sm-6 col-md-6 col-lg-6 pl-2">
              {" "}
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage: `url(${HomeTile4})`,
                  backgroundPosition: "50% 50%",
                  height: "600px",
                  backgroundRepeat: " no-repeat",
                  maxWidth: "800px",
                }}
              >
                <MDBContainer>
                  <MDBRow className="d-flex align-items-center pt-5 mt-5">
                    <MDBCol className="col-md-12  pt-5 mt-5">
                      <h4 style={{ color: "white" }}>New arrivals</h4>
                      <h4 style={{ color: "white" }}>are now in!</h4>
                      <MDBBtn
                        style={{ borderRadius: "25px" }}
                        color="white"
                        className="mt-5"
                        onClick={goToNewArrivals}
                      >
                        SHOW COLLECTION
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCard>
            </MDBCol>
            <MDBCol className="col-12 col-sm-6 col-md-6 col-lg-6 pl-2">
              {" "}
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage: `url(${HomeTile5})`,
                  backgroundPosition: "50% 50%",
                  height: "600px",
                  backgroundRepeat: " no-repeat",
                  maxWidth: "800px",
                }}
              >
                <MDBContainer>
                  <MDBRow className="d-flex align-items-center pt-5 mt-5">
                    <MDBCol className="col-md-12  pt-5 mt-5">
                      <h4 style={{ color: "white" }}>New arrivals</h4>
                      <h4 style={{ color: "white" }}>are now in!</h4>
                      <MDBBtn
                        style={{ borderRadius: "25px" }}
                        color="white"
                        className="mt-5"
                        onClick={goToNewArrivals}
                      >
                        SHOW COLLECTION
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow className="pb-5 pt-5" between>
            <MDBCol className="col-xs-7  col-lg-3">
              <h3>Best Sellers</h3>
            </MDBCol>

            <MDBCol className="col-xs-6 col-sm-5 col-md-3 col-lg-3 col-xl-2  d-flex  justify-content-end">
              <MDBBtn
                outline
                color="blue-grey"
                size="sm"
                style={{ borderRadius: "25px" }}
                onClick={goToBestSellers}
              >
                SHOW MORE
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {props.bestSellerProducts.length > 4
              ? props.bestSellerProducts.slice(0, 4).map((item) => {
                  return (
                    <MDBCol className="col-lg-3 d-none d-lg-block">
                      {" "}
                      <ItemCard product={item} />
                    </MDBCol>
                  );
                })
              : props.bestSellerProducts
                  .slice(0, props.bestSellerProducts.length)
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
            {props.bestSellerProducts.length > 3
              ? props.bestSellerProducts.slice(0, 3).map((item) => {
                  return (
                    <MDBCol className="col-lg-3 d-block d-lg-none">
                      {" "}
                      <ItemCard product={item} />
                    </MDBCol>
                  );
                })
              : props.bestSellerProducts
                  .slice(0, props.bestSellerProducts.length)
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
        <Footer2 />
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    androidProduct: state.productData.androidProducts || [],
    appleProducts: state.productData.appleProducts || [],
    images: state.homepageImageData.images || [],
    justForYouProducts: state.productData.justForYouProducts || [],
    bestSellerProducts: state.productData.bestSellerProducts || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetJustForYouProduct: () => {
      dispatch(getJustForYouProduct());
    },
    onGetBestSellerProducts: () => {
      dispatch(getBestSellers());
    },
    onGetHomePageImgs: () => {
      dispatch(getHomePageImages());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
