import axios from 'axios';
import { GET_ERRORS } from './types';
import { BASE_URL } from './api';

export const changePasswordAction = (userData, history) => async dispatch => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/change_password`, userData);
        console.log(res.data)
        if (res.data) {
            history.push('/dashboard')
        }
    }
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
    }
};

export const addSeekerProfile = (userData, history) => async dispatch => {
    try {
        const res = await axios.post(`${BASE_URL}/profile/add_seeker`, userData);
        if (res.data) {
            history.push('/dashboard')
        }
    }
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
    }
};