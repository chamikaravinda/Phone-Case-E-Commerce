import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_ERROR,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_ERROR,
  USER_LOGOUT_SUCCESS,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_ERROR,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
} from "./types";
import { SERVER_URL } from "../constant";
import axios from "axios";
import { history } from "../index";
import { toast } from "react-toastify";

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
        dispatch(userLoginFailed(""));
        dispatch(userLoginSuccess(data));
        toast.success("Loged successfully");
        history.push("/");
      })
      .catch((error) => {
        dispatch(userLoginFailed(error.message));
        toast.error(error.message, {
          position: "top-center",
        });
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
    email: user.email,
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
        dispatch(userSignUpError(""));
        dispatch(userSignUpSuccess(data));
        toast.success("Account Created Successfully");
        history.push("/");
      })
      .catch((error) => {
        dispatch(userSignUpError(error.message));
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };
};
//GET PROFILE DETAILS-----------------------------
export const getProfileSuccess = (data) => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: data,
  };
};

export const getProfileError = (data) => {
  return {
    type: GET_USER_PROFILE_ERROR,
    payload: data,
  };
};

export const getProfile = (header) => {
  return (dispatch) => {
    return axios
      .get(
        `https://us-central1-phone-e-commerce-api.cloudfunctions.net/dev/auth/profile/`,
        {
          headers: header,
        }
      )
      .then((response) => {
        dispatch(getProfileError(""));
        dispatch(getProfileSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProfileError(error.message));
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };
};

//UPDATE PROFILE DETAILS-----------------------------
export const updateProfileSuccess = (data) => {
  return {
    type: USER_PROFILE_UPDATE_SUCCESS,
    payload: data,
  };
};

export const updateProfileError = (data) => {
  return {
    type: USER_PROFILE_UPDATE_ERROR,
    payload: data,
  };
};

export const updateProfile = (user, header) => {
  const data = {
    firstname: user.firstname,
    lastname: user.lastname,
    companyname: user.companyname,
    shippingAddress: user.shippingAddress,
    city: user.city,
    postalCode: user.postalCode,
    phonenum: user.phonenum,
    email: user.email,
  };
  return (dispatch) => {
    return axios
      .put(
        `https://us-central1-phone-e-commerce-api.cloudfunctions.net/dev/auth/profile/`,
        data,
        {
          headers: header,
        }
      )
      .then((response) => {
        dispatch(updateProfileError(""));
        dispatch(updateProfileSuccess(data));
        toast.success("Updated Successfully");
        history.push("/");
      })
      .catch((error) => {
        dispatch(updateProfileError(error.message));
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };
};
