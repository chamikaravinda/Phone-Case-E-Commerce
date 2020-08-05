import { HOME_PAGE_IMAGE_SUCCESS, HOME_PAGE_IMAGE_ERROR } from "./types";

import { SERVER_URL } from "../constant";
import axios from "axios";

//GET ALL IMAGES---------------------------------
export const getHomePageImagesSuccess = (data) => {
  return {
    type: HOME_PAGE_IMAGE_SUCCESS,
    payload: data,
  };
};

export const getHomePageImagesError = (data) => {
  return {
    type: HOME_PAGE_IMAGE_ERROR,
    payload: data,
  };
};

export const getHomePageImages = (headers) => {
  return (dispatch) => {
    let config = {
      headers: {
        headers,
      },
    };

    return axios
      .get(`${SERVER_URL}/admin/homepageimgs`, config)
      .then((response) => {
        dispatch(getHomePageImagesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(
          getHomePageImagesError("Error in getting the home page images")
        );
      });
  };
};
