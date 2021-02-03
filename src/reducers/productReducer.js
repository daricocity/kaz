import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT, GET_PRODUCTS, GET_PRODUCT } from '../constants/types';

const initialState = {
    products: [],
    all_product: [],
    single_product: {},
    category: {},
    user: {}
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                category: action.payload.category,
                user: action.payload.user
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                all_product: action.payload
            };
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                single_product: action.payload
            };
        default:
            return state;
    }
}

export default productReducer;