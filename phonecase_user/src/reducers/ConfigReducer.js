import {config} from "./InitialState";
import {invalidUser} from "../actions";

const configReducer = (state = config(), action) => {
    switch (action.type) {
        case 'SET_INITIALSTATE':
            return state;

        case 'HOME_PAGE':
            return {...state, page: 0};

        case 'LOGIN':
            return {...state, activeWindow: 1};

        case 'SIGN_UP':
            return {...state, activeWindow: 2};

        case 'REDIRECT_HOME':
            if (action.status === 200) {
                return {
                    ...state,
                    page: 0,
                    activeWindow: 0,
                    username: action.user.username,
                    password: action.user.password
                };
            }

        case 'SIGN_UP_FAILED':
            return {...state, error:true , errorMessage: action.message};
        case 'UPDATE_STATE':
            return {...state, error: false, errorMessage: undefined};

        case 'SHOPPING_CART':
            return {...state, page: 3};

        case 'REVIEW_AND_DESCRIPTION':
            return {...state, page: 4};

        case 'SINGLE_PRODUCT':
            return {...state, page: 5};
        case 'ITEM':
            return {...state, page: 6};

        case 'BACK_TO_SHOP':
            return {...state, page: 0, activeWindow: 0};
        default:
            return state
    }
};

export default configReducer