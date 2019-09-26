import {
    GET_PROFILE_DATA,
} from '../actions/types';


const initialState = {
    profileData: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_DATA:
            return {
                ...state,
                profileData: action.payload
            };
        default:
            return state;
    }
}