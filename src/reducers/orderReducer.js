import { GET_ORDERS, GET_ORDER_DETAILS } from '../constants/types';

const initialState = {
    orderLists: [],
    orderDetails: [],
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orderLists: action.payload
            };
        case GET_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: action.payload
            };
        default:
            return state;
    }
};

export default orderReducer;