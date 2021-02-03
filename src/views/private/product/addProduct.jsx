import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { addProduct } from '../../../actions/product.action';
import { getAllCategorys } from '../../../actions/category.actions';

const AddProductView = (props) => {
    
    document.title = 'Add Product';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategorys());
    }, [dispatch]);

    const { all_category } = useSelector(state => state.category);
    const ProductCategory = all_category !==null && all_category !== undefined && all_category.length>0 &&
    all_category.map((category, ind) => (
        <option key={ind} value={category.id}>{category.title}</option>
    ))
    
    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-sectin-heading tb-style1 tb-uikits-heading">
                                <div className="tb-sectin-heading-left tb-uikits-heading-2">
                                    <h2 className="tb-uikits-title">Product</h2>
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                        <li><Link to="/user/product">Product</Link></li>
                                        <li>Add Product</li>
                                    </ul>
                                </div>
                                <div className="tb-sectin-heading-right">
                                    <div className="tb-button-group tb-style1">
                                        <Link 
                                            to='/user/product' 
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
                                        <h2 className="tb-card-title">Product Form</h2>
                                    </div>
                                </div>
                                <div className="tb-card-body">
                                    <div className="tb-padd-lr-30 tb-alert-wrap">
                                        <div className="tb-height-b25 tb-height-lg-b25"></div>
                                        <Formik
                                            initialValues={{ 
                                                title: "", 
                                                description: "",
                                                regular_price: '',
                                                category: '',
                                                stock_status: '',
                                                quantity_stocked: '',
                                                delivery_location: '',
                                                images: [],
                                            }}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.title) {
                                                    errors.title = 'Required';
                                                } 
                                                if (!values.category){
                                                    errors.category = 'Select category'
                                                }
                                                if (!values.stock_status){
                                                    errors.stock_status = 'Select Stock Status'
                                                }
                                                return errors;
                                            }}
                                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                                setTimeout(() => {
                                                    setSubmitting(false);
                                                    props.addProduct(values, props.history);
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
                                                setFieldValue,
                                            }) => (
                                                <form onSubmit={handleSubmit}>
                                                    <div>
                                                        <div className="form-group">
                                                            <label htmlFor="title">Title <span style={{color:'red'}}>*</span></label>
                                                            <input
                                                                type="text"
                                                                name="title"
                                                                id="title"
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
                                                        <div className="form-group">
                                                            <label htmlFor="regular_price">Price</label>
                                                            <input
                                                                type="text"
                                                                name="regular_price"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.regular_price}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="category">Category <span style={{color:'red'}}>*</span></label>
                                                            <select 
                                                                name="category" 
                                                                id="category" 
                                                                value={values.category} 
                                                                onChange={handleChange}
                                                                className="form-control form-control-lg"
                                                            >
                                                                <option value="#">Select Category</option>
                                                                {ProductCategory}
                                                            </select>
                                                            <div className="invalid-feedback">
                                                                {errors.category && touched.category && errors.category}
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="stock_status">Stock Status <span style={{color:'red'}}>*</span></label>
                                                            <select 
                                                                name="stock_status" 
                                                                value={values.stock_status} 
                                                                onChange={handleChange} 
                                                                className="form-control form-control-lg"
                                                            >
                                                                <option value="#">Select Stock Status</option>
                                                                <option value="In stock">In stock</option>
                                                                <option value="Out of stock">Out of stock</option>
                                                                <option value="On backorder">On backorder</option>
                                                            </select>
                                                            <div className="invalid-feedback">
                                                                {errors.stock_status && touched.stock_status && errors.stock_status}
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="quantity_stocked">Quantity Stocked</label>
                                                            <input
                                                                type="number"
                                                                name="quantity_stocked"
                                                                id="quantity_stocked"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.quantity_stocked}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="delivery_location">Delivery Location</label>
                                                            <textarea 
                                                                rows="4"
                                                                name='delivery_location' 
                                                                id='delivery_location'
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.delivery_location}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="images">Product image</label>
                                                            <input
                                                                type="file"
                                                                name="images"
                                                                id="images"
                                                                onChange={(e) => setFieldValue('images', e.target.files)}
                                                                multiple
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
                                                        <div className="tb-height-b30 tb-height-lg-b30"></div>
                                                    </div>
                                                </form>
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

AddProductView.propTypes = {
    addProduct: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    addProduct: (params, history) => dispatch(addProduct(params, history)),
});

export default connect(null, mapDispatchToProps)(AddProductView);