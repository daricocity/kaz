import axios from 'axios';
import swal from 'sweetalert';
import { baseUrl } from '../utils/setupUtils';
import { GET_USER_TRANSACTIONS, GET_USER_WALLET, GET_ALL_WALLETS, GET_ERRORS, GET_ALL_TRANSACTIONS } from '../constants/types';

// Monthly Subscripeion Object (Authentication Required)
export const subUser = (subObject, history) => async dispatch => {  
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        await axios.post(`${baseUrl}/api/wallet/subscribe/`, subObject, config);
        swal({
            title: "Success!",
            text: "Subscription Sucessfully!",
            icon: "success",
            timer: 5000,
            button: false
        });
        // redirect to dashboard
        history.push('/user/dashboard');
    } catch (err) {
        // dispatch to our errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
}

// Registration Activation Object (Authentication Required)
export const activateUser = (actObject, history) => async dispatch => {  
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        await axios.post(`${baseUrl}/api/wallet/activate/`, actObject, config);
        swal({
            title: "Success!",
            text: "User Sucessfully Activated!",
            icon: "success",
            timer: 5000,
            button: false
        });
        // redirect to dashboard
        history.push('/user/dashboard');
    } catch (err) {
        // dispatch to our errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
}

// Transfer Fund Object (Authentication Required)
export const transferFund = (transObject, history) => async dispatch => {  
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        await axios.post(`${baseUrl}/api/wallet/transfer/`, transObject, config);
        swal({
            title: "Success!",
            text: "Fund Sucessfully Transfered!",
            icon: "success",
            timer: 5000,
            button: false
        });
        // redirect to transaction
        history.push('/user/wallet/transfer');
    } catch (err) {
        // dispatch to our errorReducer
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        });
    }
}

// Get all Wallets Object (Authentication Required)
export const getAllWallets = () => async dispatch => {
    const token = localStorage.jwtToken;
    const config = { headers: {Authorization: `Bearer ${token}`} };
    const res = await axios.get(`${baseUrl}/api/wallet/all_wallet/`, config);
    dispatch({
        type: GET_ALL_WALLETS,
        payload: res.data
    });
};

// Get all User's Transactions Object (Authentication Required)
export const getWallet = () => async dispatch => {
    const token = localStorage.jwtToken;
    const config = { headers: {Authorization: `Bearer ${token}`} };
    const res = await axios.get(`${baseUrl}/api/wallet/wallet/`, config);
    dispatch({
        type: GET_USER_WALLET,
        payload: res.data
    });
};

// Get all Transactions Object (Authentication Required, Accessible by Admin)
export const getAllTransactions = () => async dispatch => {
    const token = localStorage.jwtToken;
    const config = { headers: {Authorization: `Bearer ${token}`} };
    const res = await axios.get(`${baseUrl}/api/wallet/all_transactions/`, config);
    dispatch({
        type: GET_ALL_TRANSACTIONS,
        payload: res.data
    });
};

// Get all User's Transactions Object (Authentication Required)
export const getTransactions = () => async dispatch => {
    const token = localStorage.jwtToken;
    const config = { headers: {Authorization: `Bearer ${token}`} };
    const res = await axios.get(`${baseUrl}/api/wallet/transactions/`, config);
    dispatch({
        type: GET_USER_TRANSACTIONS,
        payload: res.data
    });
};