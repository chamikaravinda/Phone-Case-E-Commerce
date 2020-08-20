import { GET_HOMEPAGE_IMGS_SUCCESS, GET_HOMEPAGE_IMGS_ERROR } from "./types";

import { SERVER_URL } from "../constant";
import axios from "axios";
//GET HOME PAGE IMAGES --------------------------------------
export const getHomePageImagesSuccess = (data) => {
  return {
    type: GET_HOMEPAGE_IMGS_SUCCESS,
    payload: data,
  };
};

export const getHomePageImagesError = (data) => {
  return {
    type: GET_HOMEPAGE_IMGS_ERROR,
    payload: data,
  };
};

export const getHomePageImages = () => {
  return (dispatch) => {
    return axios
      .get(`${SERVER_URL}/homepageimgs`)
      .then((response) => {
        dispatch(getHomePageImagesSuccess(response.data));
        dispatch(getHomePageImagesError(""));
      })
      .catch((error) => {
        dispatch(getHomePageImagesError("Error in getting the images"));
      });
  };
};
