import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { addCategory } from '../../../actions/category.actions';

const AddCategoryView = (props) => {

    document.title = 'Add Category';
    
    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-sectin-heading tb-style1 tb-uikits-heading">
                                <div className="tb-sectin-heading-left tb-uikits-heading-2">
                                    <h2 className="tb-uikits-title" id="tb-uikits-title">New Category</h2>
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li>
                                            <Link to="/user/dashboard"><i className="material-icons">home</i></Link>
                                        </li>
                                        <li><Link to="/user/category">Category</Link></li>
                                    </ul>
                                </div>
                                <div className="tb-sectin-heading-right">
                                    <div className="tb-button-group tb-style1">
                                        <Link 
                                            to='/user/category' 
                                            style={{color:'#fff', marginBottom:'15px'}} 
                                            className="tb-solial-btn social-facebook opacity-color tb-radious50"
                                        >
                                                <i className="material-icons">first_page</i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tb-height-b30 tb-height-lg-b30"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-sm-12">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-heading">
                                    <div className="tb-card-heading-left">
                                        <h2 className="tb-card-title">Category Form</h2>
                                    </div>
                                </div>
                                <div className="tb-card-body">
                                    <div className="tb-padd-lr-30 tb-alert-wrap">
                                        <div className="tb-height-b25 tb-height-lg-b25"></div>
                                        <Formik
                                            initialValues={{ 
                                                title: "", 
                                                description: "" 
                                            }}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.title) {
                                                errors.title = 'Required';
                                                } 
                                                return errors;
                                            }}
                                            onSubmit={(values, {setSubmitting, resetForm, setErrors }) => {
                                                setTimeout(() => {
                                                    setSubmitting(false);
                                                    props.addCategory(values, props.history);
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
                                                resetForm,
                                                // handleReset,
                                            }) => (
                                                <div>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group">
                                                        <label htmlFor="title">Title <span style={{color:'red'}}>*</span></label>
                                                        <input
                                                            id="title"
                                                            type="text"
                                                            name="title"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.title}
                                                        />
                                                        <div className="invalid-feedback">
                                                            {errors.title && touched.title && errors.title}
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="description">Description</label>
                                                        <textarea 
                                                            rows="4"
                                                            name="description"
                                                            id="description"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.description}
                                                        />
                                                    </div>
                                                    <button 
                                                        className="btn btn-primary"
                                                        disabled={isSubmitting}
                                                        onClick={submitForm}
                                                    >
                                                        {isSubmitting ? (
                                                            <span>SUBMITING <CircularProgress style={{color:'#fff'}} size={20} /></span> 
                                                        ) : (
                                                            <span>SUBMIT</span> 
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

AddCategoryView.propTypes = {
    addCategory: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    addCategory: (params, history) => dispatch(addCategory(params, history)),
});

export default connect(null, mapDispatchToProps)(AddCategoryView);