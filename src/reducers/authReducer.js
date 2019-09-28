import isEmpty from '../validations/isEmpty';

import {
    SET_CURRENT_USER,
    PASSWORD_RESET_REQUEST,
    GET_CURRENT_USER,
    GET_REGISTER_USER
} from '../actions/types';


const initialState = {
    isAuthenticated: false,
    user: {},
    isResetRequest: false,
    current: {},
    registered: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case PASSWORD_RESET_REQUEST:
            return {
                ...state,
                isResetRequest: action.payload
            };
        case GET_CURRENT_USER:
            return {
                ...state,
                current: action.payload
            }
        case GET_REGISTER_USER:
            return {
                ...state,
                registered: action.payload
            }
        default:
            return state;
    }
}