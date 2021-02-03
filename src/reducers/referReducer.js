import { GET_REFERRALS } from '../constants/types';

const initialState = {
    referrals: [],
};

const referReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REFERRALS:
            return {
                ...state,
                referrals: action.payload
            };
        default:
            return state;
    }
}

export default referReducer