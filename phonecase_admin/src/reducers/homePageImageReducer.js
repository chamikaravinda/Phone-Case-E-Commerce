import {
  HOME_PAGE_IMAGE_SUCCESS,
  HOME_PAGE_IMAGE_ERROR,
} from "../actions/types";

const homepageImageInitialState = {
  images: [],
};

const homepageImageReducer = (state = homepageImageInitialState, action) => {
  switch (action.type) {
    case HOME_PAGE_IMAGE_SUCCESS:
      return { ...state, images: action.payload };
    case HOME_PAGE_IMAGE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default homepageImageReducer;
