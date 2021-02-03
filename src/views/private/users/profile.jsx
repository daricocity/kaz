import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { getUser, updateProfile } from '../../../actions/user.actions';

const ProfileView = (props) => {
    
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.authentication)
    const authUser = user !== null && user !== undefined && user

    useEffect(() => {
        dispatch(getUser(authUser.user_id));
    }, [dispatch, authUser.user_id]);

    const { user_details } = useSelector(state => state.users)
    const user_detail = user_details !== null && user_details !== undefined && user_details

    const { email, full_name, phone_number, occupation, address, bank_account_name, bank_account_number, bank_name } = user_detail !== null && user_detail !== undefined && user_detail

    document.title = 'Profile';
    
    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-sectin-heading tb-style1 tb-uikits-heading">
                                <div className="tb-sectin-heading-left tb-uikits-heading-2">
                                    <h2 className="tb-uikits-title">Profile</h2>
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                        <li>Profile</li>
                                    </ul>
                                </div>
                                <div className="tb-sectin-heading-right">
                                    <div className="tb-button-group tb-style1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tb-height-b30 tb-height-lg-b30"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 offset-2">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-heading">
                                    <div className="tb-card-heading-left">
                                        <h2 className="tb-card-title">Profile</h2>
                                    </div>
                                </div>
                                <div className="tb-card-body">
                                    <div className="tb-padd-lr-30 tb-alert-wrap">
                                        <div className="tb-height-b25 tb-height-lg-b25"></div>
                                        <Formik
                                            initialValues={{ 
                                                email: email, 
                                                address: address,
                                                bank_name: bank_name,
                                                full_name: full_name, 
                                                occupation: occupation, 
                                                phone_number: phone_number,  
                                                bank_account_name: bank_account_name, 
                                                bank_account_number: bank_account_number, 
                                            }}
                                            onSubmit={(values, { setSubmitting }) => {
                                                setTimeout(() => {
                                                    setSubmitting(false);
                                                    props.updateProfile(values, authUser.user_id, props.history)
                                                }, 5000);
                                            }}
                                        >
                                            {({
                                                values,
                                                errors,
                                                touched,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                isSubmitting,
                                                submitForm,
                                            }) => (
                                                <div>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group">
                                                        <label htmlFor="title">Email</label>
                                                        <input
                                                            id="email"
                                                            type="text"
                                                            name="email"
                                                            placeholder="Email"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="full_name">Full Name</label>
                                                        <input
                                                            id="full_name"
                                                            type="text"
                                                            name="full_name"
                                                            placeholder="Full Name"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.full_name}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="phone_number">Phone Number</label>
                                                        <input
                                                            id="phone_number"
                                                            type="text"
                                                            name="phone_number"
                                                            placeholder="Phone Number"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.phone_number}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="occupation">Occupation</label>
                                                        <input
                                                            id="occupation"
                                                            type="text"
                                                            name="occupation"
                                                            placeholder="Occupation"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.occupation}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="address">Address</label>
                                                        <textarea 
                                                            rows="2"
                                                            id="address"
                                                            name='address' 
                                                            placeholder="Address"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.address}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="bank_account_name">Account Name</label>
                                                        <input
                                                            id="bank_account_name"
                                                            type="text"
                                                            name="bank_account_name"
                                                            placeholder="Account Name"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.bank_account_name}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="bank_account_number">Account Number</label>
                                                        <input
                                                            id="bank_account_number"
                                                            type="text"
                                                            name="bank_account_number"
                                                            placeholder="Account Number"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.bank_account_number}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="occupation">Bank Name</label>
                                                        <input
                                                            id="bank_name"
                                                            type="text"
                                                            name="bank_name"
                                                            placeholder="Bank Name"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.bank_name}
                                                        />
                                                    </div>
                                                    <button 
                                                        className="btn btn-primary"
                                                        disabled={isSubmitting}
                                                        onClick={submitForm}
                                                    >
                                                        {isSubmitting ? (
                                                            <span>UPDATING <CircularProgress style={{color:'#fff'}} size={20} /></span> 
                                                        ) : (
                                                            <span>UPDATE</span> 
                                                        )}
                                                    </button>
                                                </form>
                                                <div className="tb-height-b30 tb-height-lg-b30"></div>
                                                </div>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            <Settings/>
        </React.Fragment>
    );
}

ProfileView.propTypes = {
    updateProfile: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    updateProfile: (params, id, history) => dispatch(updateProfile(params, id, history)),
});

export default connect(null, mapDispatchToProps)(ProfileView);