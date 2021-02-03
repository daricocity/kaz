import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { getAllWallets, transferFund } from '../../../actions/wallet.actions';

const TransferView = (props) => {

    document.title = 'Fund Transfer';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllWallets());
    }, [dispatch]);

    const { user } = useSelector(state => state.authentication)
    const authUser = user !== null && user !== undefined && user

    const { all_wallet } = useSelector(state => state.wallet);
    const Wallets = all_wallet !==null && all_wallet !== undefined && all_wallet.length > 0 &&
    all_wallet.filter(wal => wal.username !== authUser.username).map((wallet, ind) => (
        <option key={ind} value={wallet.user}>{wallet.username}</option>
    ))

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
                                    <h2 className="tb-uikits-title">Fund Transfer</h2>
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                        <li>Fund Transfer</li>
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
                    <div className="row">
                        <div className="col-lg-8 offset-2">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-heading">
                                    <div className="tb-card-heading-left">
                                        <h2 className="tb-card-title">Fund Transfer Form</h2>
                                    </div>
                                </div>
                                <div className="tb-card-body">
                                    <div className="tb-padd-lr-30 tb-alert-wrap">
                                        <div className="tb-height-b25 tb-height-lg-b25"></div>
                                        <Formik
                                            initialValues={{ 
                                                wallet: "", 
                                                amount: "",
                                                reason: ""
                                            }}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.wallet) {
                                                    errors.wallet = 'Required';
                                                } 
                                                if (!values.amount) {
                                                    errors.amount = 'Required';
                                                } 
                                                if (!values.reason) {
                                                    errors.reason = 'Required';
                                                } 
                                                return errors;
                                            }}
                                            onSubmit={(values, {setSubmitting, resetForm }) => {
                                                setTimeout(() => {
                                                    setSubmitting(false);
                                                    props.transferFund(values, props.history);
                                                    resetForm();
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
                                                            <label htmlFor="wallet">Wallets <span style={{color:'red'}}>*</span></label>
                                                            <select 
                                                                name="wallet" 
                                                                id="wallet" 
                                                                value={values.wallet} 
                                                                onChange={handleChange}
                                                                className="form-control form-control-lg"
                                                            >
                                                                <option value="">Select Wallet</option>
                                                                { Wallets }
                                                            </select>
                                                            <div className="invalid-feedback">{errors.wallet && touched.wallet && errors.wallet}</div>
                                                            {error.data && (
                                                                <div className="invalid-feedback">{error.data.wallet}</div>
                                                            )}
                                                        </div>
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
                                                            {isSubmitting ? (
                                                                <span>PROCESSING <CircularProgress style={{color:'#fff'}} size={20} /></span> 
                                                            ) : (
                                                                <span>TRANSFER</span> 
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

TransferView.propTypes = {
    transferFund: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    transferFund: (params, history) => dispatch(transferFund(params, history)),
});

export default connect(null, mapDispatchToProps)(TransferView);