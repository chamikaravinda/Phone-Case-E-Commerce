import {
    ADD_REVIEW_SUCCESS, GET_ALL_REVIEWS_SUCCESS,

} from "../actions/types";

const reviewInitialState = {
    reviews: [],
    error: "",
};

const reviewReducer = (state = reviewInitialState, action) => {
    switch (action.type) {
        case ADD_REVIEW_SUCCESS:
          return { ...state };
        case GET_ALL_REVIEWS_SUCCESS:
            return { ...state, reviews: action.payload };
        default:
            return state;
    }
};

export default reviewReducer;