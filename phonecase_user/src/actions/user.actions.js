import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_ERROR,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_ERROR,
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
      .post(`${SERVER_URL}/login/email`, data)
      .then((response) => {
        const headers = {
          Bearer: response.data.token,
          "Content-Type": "application/json",
        };
        data.headers = headers;
        dispatch(userLoginSuccess(data));
        //history.push("/");
      })
      .catch((error) => {
        const failed = "Wrong Email or Password";
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
    history.push("./login");
  };
};

//SIGN UP-----------------------------
export const userSignUpSuccess = (data) => {
  return {
    type: USER_SIGNUP_SUCCESS,
    payload: data,
  };
};

export const userSignUpFailed = (data) => {
  return {
    type: USER_SIGNUP_FAILED,
    payload: data,
  };
};

export const userSignUpError = (data) => {
  return {
    type: USER_SIGNUP_ERROR,
    payload: data,
  };
};

export const userSignUp = (user) => {
  const data = {
    email: user.username,
    password: user.password,
    firstname: user.firstname,
    lastname: user.lastname,
    phonenum: user.phonenum,
  };

  return (dispatch) => {
    return axios
      .post(`${SERVER_URL}/signup/email`, data)
      .then((response) => {
        const headers = {
          Bearer: response.data.token,
          "Content-Type": "application/json",
        };
        data.headers = headers;
        dispatch(userSignUpSuccess(data));
        history.push("/");
      })
      .catch((error) => {
        const failed = "Error in sign up";
        dispatch(userSignUpError(failed));
      });
  };
};
