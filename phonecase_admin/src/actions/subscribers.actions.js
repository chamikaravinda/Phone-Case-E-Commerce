import {
  GET_ALL_SUBSCRIBERS_SUCCESS,
  GET_ALL_SUBSCRIBERS_ERROR,
} from "./types";

import { SERVER_URL } from "../constant";
import axios from "axios";

//GET ALL SUBSCRIBERS---------------------------------
export const getAllSubscribersSuccess = (data) => {
  return {
    type: GET_ALL_SUBSCRIBERS_SUCCESS,
    payload: data,
  };
};

export const getAllSubscribersError = (data) => {
  return {
    type: GET_ALL_SUBSCRIBERS_ERROR,
    payload: data,
  };
};

export const getAllSubscribers = (headers) => {
  return (dispatch) => {
    let config = {
      headers: {
        headers,
      },
    };

    return axios
      .get(`${SERVER_URL}/admin/subscribes`, config)
      .then((response) => {
        dispatch(getAllSubscribersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAllSubscribersError("Error in getting the subscribers"));
      });
  };
};
