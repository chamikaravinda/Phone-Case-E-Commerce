import {config} from "./InitialState";

const configReducer = (state = config(), action) => {
    switch (action.type) {
        case 'SET_INITIALSTATE':
            return state;
        case 'LOGIN':
            return {...state , page:1};
        case 'SIGN_UP':
            return {...state, page:2};
        default:
            return state
    }
};

export default configReducer