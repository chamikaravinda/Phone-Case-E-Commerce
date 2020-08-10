import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_ERROR,
  USER_LOGOUT_SUCCESS,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_ERROR,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_ERROR,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
} from "../actions/types";

const userInitialState = {
  user: [],
  profile: [],
  error: "",
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case USER_LOGIN_FAILED:
      return { ...state, error: action.payload };
    case USER_LOGIN_ERROR:
      return { ...state, error: action.payload };
    case USER_SIGNUP_SUCCESS:
      return { ...state, user: action.payload };
    case USER_SIGNUP_FAILED:
      return { ...state, error: action.payload };
    case USER_SIGNUP_ERROR:
      return { ...state, error: action.payload };
    case USER_PROFILE_UPDATE_SUCCESS:
      return { ...state, profile: action.payload };
    case USER_PROFILE_UPDATE_ERROR:
      return { ...state, error: action.payload };
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, profile: action.payload };
    case GET_USER_PROFILE_ERROR:
      return { ...state, error: action.payload };
    case USER_LOGOUT_SUCCESS:
      return { ...state, user: [] };
    default:
      return state;
  }
};

export default userReducer;
