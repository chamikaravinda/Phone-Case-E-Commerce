import {
  GET_ALL_SUBSCRIBERS_SUCCESS,
  GET_ALL_SUBSCRIBERS_ERROR,
} from "../actions/types";

const subscribersInitialState = {
  subscribers: [],
};

const subscribersReducer = (state = subscribersInitialState, action) => {
  switch (action.type) {
    case GET_ALL_SUBSCRIBERS_SUCCESS:
      return { ...state, subscribers: action.payload };
    case GET_ALL_SUBSCRIBERS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default subscribersReducer;
