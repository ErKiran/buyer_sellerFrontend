import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { BASE_URL } from './api';

import {
    SET_CURRENT_USER,
    GET_ERRORS,
    PASSWORD_RESET_REQUEST,
    GET_CURRENT_USER,
    GET_REGISTER_USER
} from './types';

// Register User
export const registerUser = (userData, history) => async dispatch => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/register`, userData);
        dispatch({
            type: GET_REGISTER_USER,
            payload: res.data
        })
        if (res.data) {
            history.push('/login')
        }
    }
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const loginUser = userData => async dispatch => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, userData);
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    }
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};


/**
 * Forget Password
 * 
 */

export const forgetPassword = (userData, history) => async dispatch => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/forget-password`, userData);
        dispatch({
            type: PASSWORD_RESET_REQUEST,
            payload: res.data.passwordResetToken
        })
        if (res.data) {
            history.push('/info')
        }
    }
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
    }
};

export const getCurrentUser = () => async dispatch => {
    try {
        const res = await axios.get(`${BASE_URL}/auth/current`);
        dispatch({
            type: GET_CURRENT_USER,
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