import Header from './header';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { logout, getUser } from '../../actions/user.actions';
import { connect, useSelector, useDispatch } from 'react-redux';
// import { sideBarHeader, colorPicker } from './actions';

const toFirstCharUppercase = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const SideBar = (props) => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.authentication)
    const authUser = user !== null && user !== undefined && user

    useEffect(() => {
        // sideBarHeader();
        // colorPicker();
        dispatch(getUser(authUser.user_id));
    }, [dispatch, authUser.user_id]);

    // const { user_details } = useSelector(state => state.users)
    // const user_detail = user_details !== null && user_details !== undefined && user_details
    
    return (
        <div>
            <div className="tb-height-b60 tb-height-lg-b60"></div>
            <Header toFirstCharUppercase={toFirstCharUppercase} authUser={authUser}/>
            <div className="tb-sidebarheader-toggle">
                <div className="tb-button-bar1"></div>
                <div className="tb-button-bar2"></div>
                <div className="tb-button-bar3"></div>
            </div>
            <div className="tb-sidebarheader">
                <div className="tb-sidebarheader-in" data-scrollbar>
                    <div className="tb-sidebar-nav">
                        <ul className="tb-sidebar-nav-list tb-mp0">
                            <li>
                                <Link to="/user/dashboard">
                                    <span className="tb-sidebar-link-title">
                                        <span className="tb-sidebar-link-icon"><i className="material-icons">home</i></span>
                                        <span className="tb-sidebar-link-text">Dashboard</span>
                                    </span>
                                </Link>
                            </li>
                            <div className="tb-height-b5 tb-height-lg-b5"></div>
                            {authUser.is_subscribe === true ? (
                                <li>
                                    <Link to="/user/category">
                                        <span className="tb-sidebar-link-title">
                                            <span className="tb-sidebar-link-icon"><i className="material-icons">shopping_cart</i></span>
                                            <span className="tb-sidebar-link-text">Category</span>
                                        </span>
                                    </Link>
                                </li>
                            ) : (
                                <li className="disabled">
                                    <Link to="/user/category">
                                        <span className="tb-sidebar-link-title" style={{color:"#DCDCDC"}}>
                                            <span className="tb-sidebar-link-icon"><i className="material-icons">shopping_cart</i></span>
                                            <span className="tb-sidebar-link-text">Category</span>
                                        </span>
                                    </Link>
                                </li>
                            )}
                            <div className="tb-height-b5 tb-height-lg-b5"></div>
                            {authUser.is_subscribe === true ? (
                                <li>
                                    <Link to="/user/product">
                                        <span className="tb-sidebar-link-title">
                                            <span className="tb-sidebar-link-icon"><i className="material-icons">add_shopping_cart</i></span>
                                            <span className="tb-sidebar-link-text">Product</span>
                                        </span>
                                    </Link>
                                </li>
                            ) : (
                                <li className="disabled">
                                    <Link to="/user/product">
                                        <span className="tb-sidebar-link-title" style={{color:"#DCDCDC"}}>
                                            <span className="tb-sidebar-link-icon"><i className="material-icons">add_shopping_cart</i></span>
                                            <span className="tb-sidebar-link-text">Product</span>
                                        </span>
                                    </Link>
                                </li>
                            )}
                            <div className="tb-height-b5 tb-height-lg-b5"></div>
                            <li >
                                <Link to="/user/order">
                                    <span className="tb-sidebar-link-title">
                                        <span className="tb-sidebar-link-icon"><i className="material-icons">assignment</i></span>
                                        <span className="tb-sidebar-link-text">Order</span>
                                    </span>
                                </Link>
                            </li>
                            <div className="tb-height-b5 tb-height-lg-b5"></div>
                            {authUser.has_paid_activation === true ? (
                                <li className="tb-sidebar-has-children">
                                    <a href="#top">
                                        <span className="tb-sidebar-link-title">
                                            <span className="tb-sidebar-link-icon"><i className="material-icons">group</i></span>
                                            <span className="tb-sidebar-link-text">My Network</span>
                                        </span>
                                    </a>
                                    <ul className="tb-sidebar-nav-dropdown">
                                        <li>
                                            <Link to="/user/referral/1">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">Ist Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/2">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">2nd Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/3">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">3rd Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/4">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">4th Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/5">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">5th Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/6">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">6th Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/7">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">7th Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/8">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">8th Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="disabled tb-sidebar-has-children">
                                    <a href="#top">
                                        <span className="tb-sidebar-link-title" style={{color:"#DCDCDC"}}>
                                            <span className="tb-sidebar-link-icon"><i className="material-icons">group</i></span>
                                            <span className="tb-sidebar-link-text">My Network</span>
                                        </span>
                                    </a>
                                    <ul className="tb-sidebar-nav-dropdown">
                                        <li>
                                            <Link to="/user/referral/1">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">Ist Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/2">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">2nd Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/3">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">3rd Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/4">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">4th Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/5">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">5th Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/6">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">6th Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/7">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">7th Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/referral/8">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">8th Generation</span>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            )}
                            <div className="tb-height-b5 tb-height-lg-b5"></div>
                            <li className="tb-sidebar-has-children">
                                <a href="#top">
                                    <span className="tb-sidebar-link-title">
                                        <span className="tb-sidebar-link-icon"><i className="material-icons">attach_money</i></span>
                                        <span className="tb-sidebar-link-text">E-Account</span>
                                    </span>
                                </a>
                                <ul className="tb-sidebar-nav-dropdown">
                                    {authUser.has_paid_activation === true ? (
                                        <li>
                                            <Link to="/user/wallet/transfer">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">Transfer</span>
                                                </span>
                                            </Link>
                                        </li>
                                    ) : (
                                        <li className="disabled">
                                            <Link to="/user/wallet/transfer">
                                                <span className="tb-sidebar-link-title" style={{color:"#DCDCDC"}}>
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">Transfer</span>
                                                </span>
                                            </Link>
                                        </li>
                                    )}
                                    {authUser.admin === true ? (
                                        <li>
                                            <Link to="/user/wallet/pay_referal">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">Pay Referral</span>
                                                </span>
                                            </Link>
                                        </li>
                                    ) : null}
                                    <li>
                                        <Link to="/user/wallet/transaction">
                                            <span className="tb-sidebar-link-title">
                                                <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                <span className="tb-sidebar-link-text">Transaction Records</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <div className="tb-height-b5 tb-height-lg-b5"></div>
                            <li >
                                <Link to="/user/subscribe">
                                    <span className="tb-sidebar-link-title">
                                        <span className="tb-sidebar-link-icon"><i className="material-icons">credit_card</i></span>
                                        <span className="tb-sidebar-link-text">Subscribe</span>
                                    </span>
                                </Link>
                            </li>
                            <div className="tb-height-b5 tb-height-lg-b5"></div>
                            <li >
                                <Link to="/user/profile">
                                    <span className="tb-sidebar-link-title">
                                        <span className="tb-sidebar-link-icon"><i className="material-icons">account_circle</i></span>
                                        <span className="tb-sidebar-link-text">Profile</span>
                                    </span>
                                </Link>
                            </li>
                            <div className="tb-height-b5 tb-height-lg-b5"></div>
                            {authUser.admin === true ? (
                                <li className="tb-sidebar-has-children">
                                    <a href="#top">
                                        <span className="tb-sidebar-link-title">
                                            <span className="tb-sidebar-link-icon"><i className="material-icons">assignment</i></span>
                                            <span className="tb-sidebar-link-text">Records</span>
                                        </span>
                                    </a>
                                    <ul className="tb-sidebar-nav-dropdown">
                                        <li>
                                            <Link to="/user/wallet/all_users">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">All Users</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">User Referral List</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/wallet/all_transaction">
                                                <span className="tb-sidebar-link-title">
                                                    <span className="tb-sidebar-link-icon"><i className="material-icons">adjust</i></span>
                                                    <span className="tb-sidebar-link-text">All Transactions</span>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            ) : null}
                            <div className="tb-height-b5 tb-height-lg-b5"></div>
                            <li >
                                <Link to={`/user/${authUser.username}/change_password`}>
                                    <span className="tb-sidebar-link-title">
                                        <span className="tb-sidebar-link-icon"><i className="material-icons">lock</i></span>
                                        <span className="tb-sidebar-link-text">Change Password</span>
                                    </span>
                                </Link>
                            </li>
                            <div className="tb-height-b5 tb-height-lg-b5"></div>
                            <li >
                                <Link onClick={() => props.logout()} to="/">
                                    <span className="tb-sidebar-link-title">
                                        <span className="tb-sidebar-link-icon"><i className="material-icons">power_settings_new</i></span>
                                        <span className="tb-sidebar-link-text">Logout</span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    logout: (history) => dispatch(logout(history)),
});

export default connect(null, mapDispatchToProps)(SideBar);