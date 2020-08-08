import {
  GET_HOMEPAGE_IMGS_SUCCESS,
  GET_HOMEPAGE_IMGS_ERROR,
} from "../actions/types";

const homepageImagesInitialState = {
  images: [],
};

const homePageImagesReducer = (state = homepageImagesInitialState, action) => {
  switch (action.type) {
    case GET_HOMEPAGE_IMGS_SUCCESS:
      return { ...state, images: action.payload };
    case GET_HOMEPAGE_IMGS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default homePageImagesReducer;
