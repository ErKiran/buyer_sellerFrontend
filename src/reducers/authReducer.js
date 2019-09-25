import isEmpty from '../validations/isEmpty';

import {
    SET_CURRENT_USER,
    PASSWORD_RESET_REQUEST
} from '../actions/types';


const initialState = {
    isAuthenticated: false,
    user: {},
    isResetRequest: false
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
        default:
            return state;
    }
}