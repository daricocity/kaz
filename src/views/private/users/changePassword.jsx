import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { changePassword } from '../../../actions/user.actions';

const ChangePasswordView = (props) => {

    document.title = 'Change Password';

    const { user } = useSelector(state => state.authentication)
    const authUser = user !== null && user !== undefined && user

    const error = useSelector(state => state.errors)
    
    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-sectin-heading tb-style1 tb-uikits-heading">
                                <div className="tb-sectin-heading-left tb-uikits-heading-2">
                                    <h2 className="tb-uikits-title">Change Password</h2>
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                        <li>Change Password</li>
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
                                        <h2 className="tb-card-title">Change Password</h2>
                                    </div>
                                </div>
                                <div className="tb-card-body">
                                    <div className="tb-padd-lr-30 tb-alert-wrap">
                                        <div className="tb-height-b25 tb-height-lg-b25"></div>
                                        <Formik
                                            initialValues={{ 
                                                old_password: '',
                                                new_password: '',
                                                confirm_new_password: '',
                                            }}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.old_password) {
                                                    errors.old_password = 'Required';
                                                } 
                                                if (!values.new_password) {
                                                    errors.new_password = 'Required';
                                                } 
                                                if (!values.confirm_new_password) {
                                                    errors.confirm_new_password = 'Required';
                                                } 
                                                return errors;
                                            }}
                                            onSubmit={(values, { setSubmitting }) => {
                                                setTimeout(() => {
                                                    setSubmitting(false);
                                                    props.changePassword(values, authUser.username, props.history);
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
                                                        <label htmlFor="old_password">Old Password <span style={{color:'red'}}>*</span></label>
                                                        <input
                                                            id="old_password"
                                                            type="password"
                                                            name="old_password"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.old_password}
                                                        />
                                                        <div className="invalid-feedback">{errors.old_password && touched.old_password && errors.old_password}</div>
                                                        {error.data && (
                                                            <div className="invalid-feedback">{error.data.old_password}</div>
                                                        )}
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="new_password">New Password <span style={{color:'red'}}>*</span></label>
                                                        <input
                                                            id="new_password"
                                                            type="password"
                                                            name="new_password"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.new_password}
                                                        />
                                                        <div className="invalid-feedback">{errors.new_password && touched.new_password && errors.new_password}</div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="confirm_new_password">Confirm New Password <span style={{color:'red'}}>*</span></label>
                                                        <input
                                                            id="confirm_new_password"
                                                            type="password"
                                                            name="confirm_new_password"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.confirm_new_password}
                                                        />
                                                        <div className="invalid-feedback">{errors.new_password && touched.new_password && errors.new_password}</div>
                                                        {error.data && (
                                                            <div className="invalid-feedback">{error.data.new_password}</div>
                                                        )}
                                                    </div>
                                                    <button 
                                                        className="btn btn-primary"
                                                        disabled={isSubmitting}
                                                        onClick={submitForm}
                                                    >
                                                        {isSubmitting ? (
                                                            <span>UPDATING <CircularProgress style={{color:'#fff'}} size={20} /></span> 
                                                        ) : (
                                                            <span>CHANGE</span> 
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

ChangePasswordView.propTypes = {
    changePassword: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    changePassword: (params, username, history) => dispatch(changePassword(params, username, history)),
});

export default connect(null, mapDispatchToProps)(ChangePasswordView);