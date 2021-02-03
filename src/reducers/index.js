import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import orderReducer from './orderReducer';
import errorReducer from './errorReducer';
import referReducer from './referReducer';
import walletReducer from './walletReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
    cart: cartReducer,
    users: userReducer,
    order: orderReducer,
    errors: errorReducer,
    wallet: walletReducer,
    referral: referReducer,
    product: productReducer,
    category: categoryReducer,
    authentication: authReducer,
});