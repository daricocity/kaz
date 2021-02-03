import { GET_ALL_USERS, GET_USER_DETAIL } from '../constants/types';

const initialState = {
    all_users: [],
    user_details: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                all_users: action.payload
            };
        case GET_USER_DETAIL:
            return {
                ...state,
                user_details: action.payload
            };
        default:
            return state;
    }
}

export default userReducer