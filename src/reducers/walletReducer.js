import { GET_USER_TRANSACTIONS, GET_USER_WALLET, GET_ALL_WALLETS, GET_ALL_TRANSACTIONS } from '../constants/types';

const initialState = {
    transactions: [],
    user_wallet: {},
    all_wallet: [],
    all_transactions: [],
};

const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload
            };
        case GET_USER_WALLET:
            return {
                ...state,
                user_wallet: action.payload
            };
        case GET_ALL_WALLETS:
            return {
                ...state,
                all_wallet: action.payload
            };
        case GET_ALL_TRANSACTIONS:
            return {
                ...state,
                all_transactions: action.payload
            };
        default:
            return state;
    }
}

export default walletReducer