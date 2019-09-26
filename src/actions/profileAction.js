import axios from 'axios';
import { GET_ERRORS, GET_PROFILE_DATA } from './types';
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

export const getProfileData = () => async dispatch => {
    try {
        const res = await axios.get(`${BASE_URL}/profile/get_seeker`);
        dispatch({
            type: GET_PROFILE_DATA,
            payload: res.data
        })
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

export const editSeekerProfile = (userData, history) => async dispatch => {
    try {
        const res = await axios.patch(`${BASE_URL}/profile/edit_seeker`, userData);
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