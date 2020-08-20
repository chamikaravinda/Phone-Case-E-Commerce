import { NEWS_LETTER_SUCCESS, NEWS_LETTER_ERROR } from "../actions/types";

const newsLetterInitialState = {
  message: "",
};

const newsLetterReducer = (state = newsLetterInitialState, action) => {
  switch (action.type) {
    case NEWS_LETTER_SUCCESS:
      return { ...state, message: action.payload };
    case NEWS_LETTER_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default newsLetterReducer;
