import axios from 'axios';
import swal from 'sweetalert';
import jwt_decode from "jwt-decode";
import { baseUrl, setJWTToken } from '../utils/setupUtils';
import { GET_ERRORS, SET_CURRENT_USER, GET_USER_DETAIL, GET_ALL_USERS } from '../constants/types';

import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

// Update User's Password Object (Authentication Required)
export const changePassword = (passwordObject, username, history) => async dispatch => {  
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        await axios.put(`${baseUrl}/api/account/user/${username}/change_password/`, passwordObject, config);
        swal({
            title: "Success!",
            text: "Password Changed Sucessfully!",
            icon: "success",
            timer: 5000,
            button: false
        });
        // redirect to profile
        history.push('/');
    } catch (err) {
        // dispatch to errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
}

// Update User's Profile Object (Authentication Required)
export const updateProfile = (updateObject, id, history) => async dispatch => {  
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        await axios.put(`${baseUrl}/api/account/user/${id}/edit/`, updateObject, config);
        swal({
            title: "Success!",
            text: "Profile Sucessfully Update!",
            icon: "success",
            timer: 5000,
            button: false
        });
        // redirect to profile
        history.push('/user/profile');
    } catch (err) {
        // dispatch to errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
}

// Get all Wallets Object (Authentication Required)
export const getAllUsers = () => async dispatch => {
    const token = localStorage.jwtToken;
    const config = { headers: {Authorization: `Bearer ${token}`} };
    const res = await axios.get(`${baseUrl}/api/account/users/`, config);
    dispatch({
        type: GET_ALL_USERS,
        payload: res.data
    });
};

// Get User's individual Product Object (Authentication Required)
export const getUser = (id) => async dispatch => {
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        const res = await axios.get(`${baseUrl}/api/account/user/${id}/`, config);
        dispatch({
            type: GET_USER_DETAIL,
            payload: res.data
        });
    } catch (err) {
        history.push("/user/dashboard");
    }
};

// === User Logout ===
export const logout = () => dispatch => {
    // remove stored token in the localStorage
    localStorage.removeItem("jwtToken");
    // set our token in header ***
    setJWTToken(false);
    window.location.href = "/login";
    // dispatch to authReducer
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
}

// === User Login ===
export const login = (LoginRequest) => async dispatch => {
    try {
        // post => Login Request
        const res = await axios.post(`${baseUrl}/api/account/login/`, LoginRequest);
        // extract token from response
        const token = await res.data.token;
        // store the token in the localStorage
        localStorage.setItem("jwtToken", token);
        // set token in header
        setJWTToken(token);
        // decode token on React
        const decoded = await jwt_decode(token);
        // dispatch to authReducer
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded
        });
    } catch (err){
        // dispatch to errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
};

// === User Registration ===
export const register = (user, history) => async dispatch => {
    try {
        await axios.post(`${baseUrl}/api/account/signup/`, user);
        // redirect to login
        history.push('/login');
        // dispatch to errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (err){
        // dispatch to errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
};