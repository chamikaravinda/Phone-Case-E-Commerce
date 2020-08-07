import {
  EMAIL_SUBSCRIBE_SUCCESS,
  EMAIL_SUBSCRIBE_ERROR,
} from "../actions/types";

const emailSubscriptionInitialState = {
  message: "",
  error: "",
};

const emailSubscriptionReducer = (
  state = emailSubscriptionInitialState,
  action
) => {
  switch (action.type) {
    case EMAIL_SUBSCRIBE_SUCCESS:
      return { ...state, message: action.payload };
    case EMAIL_SUBSCRIBE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default emailSubscriptionReducer;
