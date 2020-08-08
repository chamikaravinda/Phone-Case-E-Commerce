import { EMAIL_SUBSCRIBE_SUCCESS, EMAIL_SUBSCRIBE_ERROR } from "./types";
import { SERVER_URL } from "../constant";
import axios from "axios";
import { toast } from "react-toastify";

export const emailSubscribtionSuccess = (data) => {
  return {
    type: EMAIL_SUBSCRIBE_SUCCESS,
    payload: data,
  };
};

export const emailSubscribtionError = (data) => {
  return {
    type: EMAIL_SUBSCRIBE_ERROR,
    payload: data,
  };
};

export const emailSubscribtion = (data) => {
  return (dispatch) => {
    return axios
      .post(`${SERVER_URL}/subscribes`, data)
      .then((response) => {
        dispatch(emailSubscribtionSuccess(response.data.message));
        toast.success(response.data.message);
        dispatch(emailSubscribtionError(""));
      })
      .catch((error) => {
        dispatch(emailSubscribtionError("Error in subscribing to news letter"));
      });
  };
};
