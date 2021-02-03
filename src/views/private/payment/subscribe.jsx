import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { activateUser, subUser } from '../../../actions/wallet.actions';

const SubscribeView = (props) => {

    document.title = 'Subscribe';

    const dispatch = useDispatch();

    useEffect(() => {

    }, [dispatch]);

    const error = useSelector(state => state.errors)
    const { user } = useSelector(state => state.authentication)
    const authUser = user !== null && user !== undefined && user
    
    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-sectin-heading tb-style1 tb-uikits-heading">
                                <div className="tb-sectin-heading-left tb-uikits-heading-2">
                                    {authUser.has_paid_activation === true ? (
                                        <h2 className="tb-uikits-title">Subscribe</h2>
                                    ) : (
                                        <h2 className="tb-uikits-title">Activation</h2>
                                    )}
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                        {authUser.has_paid_activation === true ? (
                                            <li>Subscribe</li>
                                        ) : (
                                            <li>Activation</li>
                                        )}
                                    </ul>
                                </div>
                                <div className="tb-sectin-heading-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tb-height-b30 tb-height-lg-b30"></div>
                <div className="container-fluid">
                    {authUser.has_paid_activation === true ? (
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tb-card tb-style1">
                                    <div className="tb-card-heading">
                                        <div className="tb-card-heading-left">
                                            <h2 className="tb-card-title">Pay with Wallet</h2>
                                        </div>
                                    </div>
                                    <div className="tb-card-body">
                                        <div className="tb-padd-lr-30 tb-alert-wrap">
                                            <div className="tb-height-b25 tb-height-lg-b25"></div>
                                            <p>Every member are to pay a monthly subscription fee to keep the shop open every month.</p>
                                            <Formik
                                                initialValues={{ 
                                                    amount: "", 
                                                    reason: ""
                                                }}
                                                validate={values => {
                                                    const errors = {};
                                                    if (!values.amount) {
                                                        errors.amount = 'Required';
                                                    } 
                                                    if (!values.reason) {
                                                        errors.reason = 'Required';
                                                    } 
                                                    return errors;
                                                }}
                                                onSubmit={(values, {setSubmitting }) => {
                                                    setTimeout(() => {
                                                        setSubmitting(false);
                                                        props.subUser(values, props.history)
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
                                                                <label htmlFor="amount">Amount <span style={{color:'red'}}>*</span></label>
                                                                <input
                                                                    type="text"
                                                                    name="amount"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.amount}
                                                                />
                                                                <div className="invalid-feedback">{errors.amount && touched.amount && errors.amount}</div>
                                                                {error.data && (
                                                                    <div className="invalid-feedback">{error.data.amount}</div>
                                                                )}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="reason">Reason <span style={{color:'red'}}>*</span></label>
                                                                <textarea 
                                                                    rows="4"
                                                                    name='reason' 
                                                                    id='reason'
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.reason}
                                                                />
                                                                <div className="invalid-feedback">{errors.reason && touched.reason && errors.reason}</div>
                                                                {error.data && (
                                                                    <div className="invalid-feedback">{error.data.reason}</div>
                                                                )}
                                                            </div>
                                                            <button 
                                                                className="btn btn-primary"
                                                                disabled={isSubmitting}
                                                                onClick={submitForm}
                                                            >
                                                                Pay {isSubmitting && <CircularProgress size={20} />}
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
                            <div className="col-lg-6">
                                <div className="tb-card tb-style1">
                                    <div className="tb-card-heading">
                                        <div className="tb-card-heading-left">
                                            <h2 className="tb-card-title">Pay with Card</h2>
                                        </div>
                                    </div>
                                    <div className="tb-card-body">
                                        <div className="tb-padd-lr-30 tb-alert-wrap">
                                            <div className="tb-height-b25 tb-height-lg-b25"></div>
                                            <p>Pay monthly subscription with card.</p>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="amount">Amount <span style={{color:'red'}}>*</span></label>
                                                    <input type="text" name="amount" id="amount" />
                                                </div>
                                                <button className="btn btn-primary"> Pay </button>
                                            </form>
                                            <div className="tb-height-b30 tb-height-lg-b30"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tb-card tb-style1">
                                    <div className="tb-card-heading">
                                        <div className="tb-card-heading-left">
                                            <h2 className="tb-card-title">Pay with Wallet</h2>
                                        </div>
                                    </div>
                                    <div className="tb-card-body">
                                        <div className="tb-padd-lr-30 tb-alert-wrap">
                                            <div className="tb-height-b25 tb-height-lg-b25"></div>
                                            <p>Every New registered member are to pay a registration activation token fee to be entitled to own a shop</p>
                                            <Formik
                                                initialValues={{ 
                                                    package: "", 
                                                    reason: ""
                                                }}
                                                validate={values => {
                                                    const errors = {};
                                                    if (!values.package) {
                                                        errors.package = 'Required';
                                                    } 
                                                    if (!values.reason) {
                                                        errors.reason = 'Required';
                                                    } 
                                                    return errors;
                                                }}
                                                onSubmit={(values, {setSubmitting }) => {
                                                    setTimeout(() => {
                                                        setSubmitting(false);
                                                        props.activateUser(values, props.history)
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
                                                                <label htmlFor="package">Activation Package <span style={{color:'red'}}>*</span></label>
                                                                <select 
                                                                    name="package" 
                                                                    value={values.package} 
                                                                    onChange={handleChange} 
                                                                    className="form-control form-control-lg"
                                                                >
                                                                    <option value="#">Select Package</option>
                                                                    <option value="$20 Package">$20 Package</option>
                                                                    <option value="$50 Package">$50 Package</option>
                                                                    <option value="$100 Package">$100 Package</option>
                                                                </select>
                                                                <div className="invalid-feedback">{errors.package && touched.package && errors.package}</div>
                                                                {error.data && (
                                                                    <div className="invalid-feedback">{error.data.amount}</div>
                                                                )}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="reason">Reason <span style={{color:'red'}}>*</span></label>
                                                                <textarea 
                                                                    rows="4"
                                                                    name='reason' 
                                                                    id='reason'
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.reason}
                                                                />
                                                                <div className="invalid-feedback">{errors.reason && touched.reason && errors.reason}</div>
                                                                {error.data && (
                                                                    <div className="invalid-feedback">{error.data.reason}</div>
                                                                )}
                                                            </div>
                                                            <button 
                                                                className="btn btn-primary"
                                                                disabled={isSubmitting}
                                                                onClick={submitForm}
                                                            >
                                                                {isSubmitting ? (
                                                                    <span>PROCESSING <CircularProgress style={{color:'#fff'}} size={20} /></span> 
                                                                ) : (
                                                                    <span>PAY</span> 
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
                            <div className="col-lg-6">
                                <div className="tb-card tb-style1">
                                    <div className="tb-card-heading">
                                        <div className="tb-card-heading-left">
                                            <h2 className="tb-card-title">Pay with Card</h2>
                                        </div>
                                    </div>
                                    <div className="tb-card-body">
                                        <div className="tb-padd-lr-30 tb-alert-wrap">
                                            <div className="tb-height-b25 tb-height-lg-b25"></div>
                                            <p>Pay activation fee with Card</p>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="package">Activation Package</label>
                                                    <select name="package" className="form-control form-control-lg">
                                                        <option value="$20 Package">$20 Package</option>
                                                        <option value="$50 Package">$50 Package</option>
                                                        <option value="$100 Package">$100 Package</option>
                                                    </select>
                                                </div>
                                                <button className="btn btn-primary"> Pay </button>
                                            </form>
                                            <div className="tb-height-b30 tb-height-lg-b30"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Footer/>
            </div>
            <Settings/>
        </React.Fragment>
    );
}

SubscribeView.propTypes = {
    subUser: PropTypes.func.isRequired,
    activateUser: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    subUser: (params, history) => dispatch(subUser(params, history)),
    activateUser: (params, history) => dispatch(activateUser(params, history)),
});

export default connect(null, mapDispatchToProps)(SubscribeView);