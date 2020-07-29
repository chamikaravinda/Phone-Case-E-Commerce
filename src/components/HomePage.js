import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Footer2 from "./includes/Footer2";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBRow,
  MDBCol,
  MDBIcon,
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

export default function HomePage(token, login) {
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
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
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

            <MDBCol className="col-xs-6 col-sm-5 col-md-3 col-lg-3 col-xl-2">
              <MDBBtn
                outline
                color="blue-grey"
                size="sm"
                style={{ borderRadius: "25px" }}
              >
                SHOW MORE
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
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

            <MDBCol className="col-xs-6 col-sm-5 col-md-3 col-lg-3 col-xl-2">
              <MDBBtn
                outline
                color="blue-grey"
                size="sm"
                style={{ borderRadius: "25px" }}
              >
                SHOW MORE
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
            <MDBCol className="col-12 col-sm-12 col-md-4">
              {" "}
              <ItemCard />
            </MDBCol>
          </MDBRow>
        </div>
        <Footer2 />
      </main>
    </React.Fragment>
  );
}
