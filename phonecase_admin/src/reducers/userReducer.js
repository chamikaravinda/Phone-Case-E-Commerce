import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_ERROR,
  USER_LOGOUT_SUCCESS,
} from "../actions/types";

const userInitialState = {
  user: "false",
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case USER_LOGIN_FAILED:
      return { ...state, error: action.payload };
    case USER_LOGIN_ERROR:
      return { ...state, error: action.payload };
    case USER_LOGOUT_SUCCESS:
      return { ...state, user: "false" };
    default:
      return state;
  }
};

export default userReducer;
