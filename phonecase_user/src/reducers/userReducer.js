import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_ERROR,
  USER_LOGOUT_SUCCESS,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_ERROR,
} from "../actions/types";

const userInitialState = {
  user: [],
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
    case USER_LOGOUT_SUCCESS:
      return { ...state, user: [] };
    default:
      return state;
  }
};

export default userReducer;
