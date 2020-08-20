import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getHomePageImages } from "../../actions/homePage.action";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAlert,
  CImg,
  CButton,
} from "@coreui/react";

const HomePageImages = (props) => {
  const [images, setImages] = useState([]);
  let tempId = 0;

  useEffect(() => {
    let tempImages = [];
    props.images.forEach((image) => {
      tempId++;
      let data = { id: tempId, image: image };
      tempImages.push(data);
    });

    setImages(tempImages);
  });

  const removeImage = () => {};

  return (
    <>
      <CCard>
        <CCardHeader>Home Page Images</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              {props.error ? (
                <div>
                  <CAlert color="danger">{props.error}</CAlert>
                  <br></br>
                </div>
              ) : (
                ""
              )}
            </CCol>
          </CRow>
          <CRow>
            {images.map((image) => {
              return (
                <CCol sm="6" md="3">
                  <CImg src={image.image} fluid className="mb-2" />
                  <CButton color="danger" className="mt-2">
                    Remove{" "}
                  </CButton>
                </CCol>
              );
            })}
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userData.user || "",
    error: state.homepageImagesData.error || "",
    images: state.homepageImagesData.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllImages: (headers) => {
      dispatch(getHomePageImages(headers));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageImages);
