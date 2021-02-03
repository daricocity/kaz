import axios from 'axios';
import swal from 'sweetalert';
import { baseUrl } from '../utils/setupUtils';
import { GET_ALL_CATEGORYS, GET_CATEGORYS, GET_ERRORS, GET_CATEGORY, TOGGLE_CATEGORY_HIDDEN } from '../constants/types';

// Category Toggle
export const toggleCategoryHidden = () => ({
    type: TOGGLE_CATEGORY_HIDDEN
});

// Update User's Category Object (Authentication Required)
export const updateCategory = (updateObject, id, history) => async dispatch => {  
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        await axios.put(`${baseUrl}/api/category/${id}/edit/`,updateObject,config);
        swal({
            title: "Success!",
            text: "Category Updated!",
            icon: "success",
            timer: 5000,
            button: false
        });
        // redirect to category
        history.push('/user/category');
    } catch (err) {
        // dispatch to errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
}

// Get User's individual category Object (Authentication Required)
export const getCategory = (id, history) => async dispatch => {
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        const res = await axios.get(`${baseUrl}/api/category/${id}/`,config);
        dispatch({
            type: GET_CATEGORY,
            payload: res.data
        });
    } catch (err) {
        history.push("/user/category");
    }
};

// Get all User's Category Object (Authentication Required)
export const getCategorys = () => async dispatch => {
    const token = localStorage.jwtToken;
    const config = { headers: {Authorization: `Bearer ${token}`} };
    const res = await axios.get(`${baseUrl}/api/category/list/`, config);
    dispatch({
        type: GET_CATEGORYS,
        payload: res.data
    });
};

// Create Category Object (Authentication Required)
export const addCategory = (catObject, history) => async dispatch => {  
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        await axios.post(`${baseUrl}/api/category/create/`, catObject, config);
        swal({
            title: "Success!",
            text: "Category Created!",
            icon: "success",
            timer: 5000,
            button: false
        });
        // redirect to category
        history.push('/user/add_category');
    } catch (err) {
        // dispatch to our errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
}

// Get all Available Category Object
export const getAllCategorys = () => async dispatch => {
    const res = await axios.get(`${baseUrl}/api/category/all/`);
    dispatch({
        type: GET_ALL_CATEGORYS,
        payload: res.data
    });
};