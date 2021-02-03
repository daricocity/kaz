import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { updateCategory } from '../../../actions/category.actions';

const UpdateCategoryView = (props) => {
    
    const { id } = props.match.params !== null && props.match.params !== undefined && props.match.params;
    const { categories } = useSelector(state => state.category);
    const detail = categories !== null && categories !== undefined && categories.find(cat => cat.id===parseInt(id));
    const { title, description } = detail !== null && detail !== undefined && detail
    
    document.title = `Update | ${title}`;
    
    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-sectin-heading tb-style1 tb-uikits-heading">
                                <div className="tb-sectin-heading-left tb-uikits-heading-2">
                                    <h2 className="tb-uikits-title">Category</h2>
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                        <li><Link to="/user/category">Category</Link></li>
                                        <li>Update Category</li>
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
                        <div className="col-lg-8 offset-2">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-heading">
                                    <div className="tb-card-heading-left">
                                        <h2 className="tb-card-title">Category Update Form</h2>
                                    </div>
                                </div>
                                <div className="tb-card-body">
                                    <div className="tb-padd-lr-30 tb-alert-wrap">
                                        <div className="tb-height-b25 tb-height-lg-b25"></div>
                                        <Formik
                                            initialValues={{ 
                                                title: title, 
                                                description: description 
                                            }}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.title) {
                                                errors.title = 'Required';
                                                } 
                                                return errors;
                                            }}
                                            onSubmit={(values, {setSubmitting }) => {
                                                setTimeout(() => {
                                                    setSubmitting(false);
                                                    props.updateCategory(values, id, props.history)
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
                                                        <label htmlFor="title">Title</label>
                                                        <input
                                                            id="title"
                                                            type="text"
                                                            name="title"
                                                            placeholder="Title"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.title}
                                                        />
                                                        {errors.title && touched.title && errors.title}
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="description">Description</label>
                                                        <textarea 
                                                            rows="4"
                                                            name="description"
                                                            id="description"
                                                            placeholder="Description"
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

UpdateCategoryView.propTypes = {
    categories: PropTypes.object.isRequired,
    updateCategory: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    categories: state.category
});

const mapDispatchToProps = dispatch => ({
    updateCategory: (params, id, history) => dispatch(updateCategory(params, id, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCategoryView);