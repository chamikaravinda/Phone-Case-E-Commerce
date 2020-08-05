import { NEWS_LETTER_SUCCESS, NEWS_LETTER_ERROR } from "./types";

import { SERVER_URL } from "../constant";
import axios from "axios";

export const newsLetterSuccess = (data) => {
  return {
    type: NEWS_LETTER_SUCCESS,
    payload: data,
  };
};

export const newsLetterError = (data) => {
  return {
    type: NEWS_LETTER_ERROR,
    payload: data,
  };
};

export const newsLetter = (data, headers) => {
  return (dispatch) => {
    let config = {
      headers: {
        headers,
      },
    };

    return axios
      .post(`${SERVER_URL}/admin/newsletters`, data, config)
      .then((response) => {
        dispatch(newsLetterSuccess("News Letter Sended Successfully"));
      })
      .catch((error) => {
        dispatch(newsLetterError("Error in sending the news letter"));
      });
  };
};
