import axios from 'axios';
import { baseUrl } from '../utils/setupUtils';
import { GET_REFERRALS } from '../constants/types';

// Get User's referral Object (Authentication Required)
export const getReferral = (id, history) => async dispatch => {
    try {
        const token = localStorage.jwtToken;
        const config = { headers: {Authorization: `Bearer ${token}`} };
        const res = await axios.get(`${baseUrl}/api/referral/${id}/`,config);
        dispatch({
            type: GET_REFERRALS,
            payload: res.data
        });
    } catch (err) {
        history.push("/user/dashboard");
    }
};