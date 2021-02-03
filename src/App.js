import React from 'react';
import store from './store';
import jwt_decode from "jwt-decode";
import LoginView from './views/auth/login';
import CartPage from './views/users/cartpage';
import ShoppageView from './views/users/shop';
import SecuredRoute from './utils/secureRoute';
import { logout } from './actions/user.actions';
import { Switch, Route } from 'react-router-dom';
import { setJWTToken } from './utils/setupUtils';
import RegisterView from './views/auth/register';
import HomepageView from './views/users/homepage';
import OrderView from './views/private/order/order';
import ProductPageView from './views/users/product';
import SecureSubRoute from './utils/secureSubRoute';
import { SET_CURRENT_USER } from './constants/types';
import DashboardView from './views/private/dashboard';
import CheckoutPage from './views/users/checkoutpage';
import ProfileView from './views/private/users/profile';
import SecureAdminRoute from './utils/secureAdminRoute';
import AllUserView from './views/private/users/allUsers';
import ProductView from './views/private/product/product';
import TransferView from './views/private/payment/transfer';
import ReferralView from './views/private/referral/referal';
import CategoryView from './views/private/category/category';
import SecureActivateRoute from './utils/secureActivateRoute';
import SubscribeView from './views/private/payment/subscribe';
import OrderDetailView from './views/private/order/orderDetail';
import AddProductView from './views/private/product/addProduct';
import PayReferralView from './views/private/payment/payReferal';
import TransactionView from './views/private/payment/transaction';
import AddCategoryView from './views/private/category/addCategory';
import SingleProductView from './views/private/product/singleProduct';
import UpdateProductView from './views/private/product/updateProduct';
import ChangePasswordView from './views/private/users/changePassword';
import AllTransactionView from './views/private/payment/allTransaction';
import UpdateCategoryView from './views/private/category/updateCategory';

// import swal from 'sweetalert';
// import $ from 'jquery'; 

// Logout User When the Token expire time reached
const jwtToken = localStorage.jwtToken;
if (jwtToken){
  // Current User
  setJWTToken(jwtToken)
  const decoded_jwtToken = jwt_decode(jwtToken)
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  // Call function each 1 seconds to check if Token expire
  setInterval(() => {
    // Logout User When the Token expire time reached
    const currentTime = Date.now() / 1000;
    if (decoded_jwtToken.exp < currentTime) {
      store.dispatch(logout());
    }
  }, 1000);
}

const App = () => {

  return (
    <Switch>
      <Route exact path='/' component={HomepageView} />
      <Route exact path='/login/' component={LoginView} />
      <Route exact path='/shop/cart/' component={CartPage} />
      <Route exact path='/register/' component={RegisterView} />
      <Route exact path='/shop/checkout' component={CheckoutPage} />
      <Route exact path='/shop/product/' component={ShoppageView} />
      <Route exact path='/shop/product/:id/' component={ProductPageView} />

      <SecuredRoute exact path='/user/order' component={OrderView} />
      <SecuredRoute exact path='/user/profile' component={ProfileView} />
      <SecuredRoute exact path='/user/subscribe' component={SubscribeView} />
      <SecuredRoute exact path='/user/dashboard' component={DashboardView} />
      <SecuredRoute exact path='/user/order/:id' component={OrderDetailView} />
      <SecuredRoute exact path='/user/wallet/transfer' component={TransferView} />
      <SecuredRoute exact path='/user/wallet/transaction' component={TransactionView} />
      <SecuredRoute exact path='/user/:username/change_password' component={ChangePasswordView} />
      
      <SecureActivateRoute exact path='/user/referral/:id' component={ReferralView} />

      <SecureAdminRoute exact path='/user/wallet/all_users' component={AllUserView} />
      <SecureAdminRoute exact path='/user/wallet/pay_referal' component={PayReferralView} />
      <SecureAdminRoute exact path='/user/wallet/all_transaction' component={AllTransactionView} />

      <SecureSubRoute exact path='/user/product' component={ProductView} />
      <SecureSubRoute exact path='/user/category' component={CategoryView}/>
      <SecureSubRoute exact path='/user/add_product' component={AddProductView} />
      <SecureSubRoute exact path='/user/add_category' component={AddCategoryView} />
      <SecureSubRoute exact path='/user/product/:id' component={SingleProductView} />
      <SecureSubRoute exact path='/user/product/:id/edit/' component={UpdateProductView}/>
      <SecureSubRoute exact path='/user/category/:id/edit' component={UpdateCategoryView} />
    </Switch>
  );
}

export default App;
