import { GET_ALL_CATEGORYS, GET_CATEGORYS, GET_CATEGORY, TOGGLE_CATEGORY_HIDDEN } from '../constants/types';

const initialState = {
    category: {},
    categories: [],
    cathidden: true,
    all_category: [],
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CATEGORY_HIDDEN:
            return {
                ...state,
                cathidden: !state.cathidden
            };
        case GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            };
        case GET_CATEGORYS:
            return {
                ...state,
                categories: action.payload
            };
        case GET_ALL_CATEGORYS:
            return {
                ...state,
                all_category: action.payload
            };
        default:
            return state;
    }
}

export default categoryReducer;