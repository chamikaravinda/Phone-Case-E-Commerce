import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_ERROR,
  USER_LOGOUT_SUCCESS,
} from "./types";
import { SERVER_URL } from "../constant";
import axios from "axios";
import { history } from "../index";

//LOGIN-----------------------------
export const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const userLoginFailed = (data) => {
  return {
    type: USER_LOGIN_FAILED,
    payload: data,
  };
};

export const userLoginError = (data) => {
  return {
    type: USER_LOGIN_ERROR,
    payload: data,
  };
};

export const userLogin = (user) => {
  const data = {
    email: user.username,
    password: user.password,
  };

  return (dispatch) => {
    return axios
      .post(`${SERVER_URL}/admin/login`, data)
      .then((response) => {
        data.token = response.data.token;
        dispatch(userLoginSuccess(data));
      })
      .catch((error) => {
        const failed = "false";
        dispatch(userLoginFailed(failed));
      });
  };
};

//LOGOUT-------------------------------------
export const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

export const userLogout = () => {
  return (dispatch) => {
    dispatch(userLogoutSuccess());
    history.push("./#/login");
  };
};
