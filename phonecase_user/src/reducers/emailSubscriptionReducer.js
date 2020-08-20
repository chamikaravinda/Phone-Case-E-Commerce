import {
  EMAIL_SUBSCRIBE_SUCCESS,
  EMAIL_SUBSCRIBE_ERROR,
} from "../actions/types";

const emailSubscriptionInitialState = {};

const emailSubscriptionReducer = (
  state = emailSubscriptionInitialState,
  action
) => {
  switch (action.type) {
    case EMAIL_SUBSCRIBE_SUCCESS:
      return { ...state };
    case EMAIL_SUBSCRIBE_ERROR:
      return { ...state };
    default:
      return state;
  }
};

export default emailSubscriptionReducer;
