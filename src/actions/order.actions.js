import axios from 'axios';
import swal from 'sweetalert';
import { baseUrl } from '../utils/setupUtils';
import { GET_ORDERS, GET_ERRORS, GET_ORDER_DETAILS, CLEAR_CART } from '../constants/types';

// Get all User's Order Object (Authentication Required)
export const getOrderDetails = () => async dispatch => {
    const token = localStorage.jwtToken;
    const config = {headers: {Authorization: `Bearer ${token}`}};
    const res = await axios.get(`${baseUrl}/api/order/detail/`, config);
    dispatch({
        type: GET_ORDER_DETAILS,
        payload: res.data
    });
};

// Get all User's Order Object (Authentication Required)
export const getOrders = () => async dispatch => {
    const token = localStorage.jwtToken;
    const config = {headers: {Authorization: `Bearer ${token}`}};
    const res = await axios.get(`${baseUrl}/api/order/list/`, config);
    dispatch({
        type: GET_ORDERS,
        payload: res.data
    });
};

// Create Order Object (Authentication Required)
export const placeOrder = (orderItemToPlace) => async dispatch => {  
    try {
        const token = localStorage.jwtToken;
        const config = {headers: {Authorization: `Bearer ${token}`}};
        await axios.post(`${baseUrl}/api/order/create/`, orderItemToPlace, config);
        swal({
            title: "Success!",
            text: "Order Place Successfully!",
            icon: "success",
            timer: 5000,
            button: false
        });
        // Clear Cart 
        dispatch({
            type: CLEAR_CART
        });
    } catch (err) {
        // dispatch to errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
}