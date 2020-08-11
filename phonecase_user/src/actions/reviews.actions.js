import {
    ADD_REVIEW_Error,
    ADD_REVIEW_SUCCESS, GET_ALL_REVIEWS_ERROR, GET_ALL_REVIEWS_SUCCESS,
} from "./types";
import {SERVER_URL} from "../constant";
import axios from "axios";
import {history} from "../index";
import {toast} from "react-toastify";
import {getHomePageImagesError, getHomePageImagesSuccess} from "./homePageImages.actions";
import {emailSubscribtionError, emailSubscribtionSuccess} from "./emailSubscribe.actions";


//ADD REVIEW-----------------------------
export const addReviewSuccess = (data) => {
    return {
        type: ADD_REVIEW_SUCCESS,
        payload: data,
    };
};
export const addReviewError = (data) => {
    return {
        type: ADD_REVIEW_Error,
        payload: data,
    };
};

export const addReview = (object) => {
    const data = {
        username: object.username,
        email: object.email,
        review: object.review,
        rate: object.rate,

    };
    return (dispatch) => {
            return axios
                .post(`${SERVER_URL}/signup/email`, data)
                .then((response) => {
                    dispatch(addReviewSuccess(data));
                    toast.success("Thank you for reviewing");
                    dispatch(addReviewError(""));
                })
                .catch((error) => {
                    dispatch(addReviewError("An error occurred.Please try again letter"));
                });

    };
};
//GET RREVIEW DETAILS-----------------------------
export const getAllReviewsSuccess = (data) => {
    return {
        type: GET_ALL_REVIEWS_SUCCESS,
        payload: data,
    };
};

export const getAllReviewsError = (data) => {
    return {
        type: GET_ALL_REVIEWS_ERROR,
        payload: data,
    };
};

export const getAllReviews = () => {
    return (dispatch) => {
        return axios
            .get(`${SERVER_URL}/signup/email`)
            .then((response) => {
                dispatch(getAllReviewsSuccess(response.data));
                dispatch(getAllReviewsError(""));
            })
            .catch((error) => {
                dispatch(getHomePageImagesError("Failed to load"));
            });
    };
};

