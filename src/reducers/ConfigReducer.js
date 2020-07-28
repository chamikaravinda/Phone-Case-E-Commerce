import {config} from "./InitialState";

const configReducer = (state = config(), action) => {
    switch (action.type) {
        case 'SET_INITIALSTATE':
            return state;
        case 'LOGIN':
            return {...state, page: 1};
        case 'SIGN_UP':
            return {...state, page: 2};
        case 'SHOPPING_CART':
            return {...state, page: 3};
        case 'REVIEW_AND_DESCRIPTION':
            return {...state, page: 4};
        case 'HOME_PAGE':
            return {...state, page: 0};
        default:
            return state
    }
};

export default configReducer