import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { updateProduct } from '../../../actions/product.action';
import { getAllCategorys } from '../../../actions/category.actions';

const UpdateProductView = (props) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategorys());
    }, [dispatch]);

    const { id } = props.match.params !== null && props.match.params !== undefined && props.match.params;
    const proDetail = useSelector(state => state.product.products);
    const detail = proDetail !== null && proDetail !== undefined && proDetail.find(pro => pro.id === parseInt(id));

    const { title, description, regular_price, category, stock_status, quantity_stocked, delivery_location } = detail !== null && detail !== undefined && detail

    const { all_category } = useSelector(state => state.category);
    const ProductCategory = all_category !== null && all_category !== undefined && all_category.length > 0 &&
    all_category.map((cat, ind) => {
        return (
            <option key={ind} value={cat.id}>
                {cat.title}
            </option>
        )
    })

    document.title = 'Update Product';
    
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
                                        <h2 className="tb-card-title">Product Update Form</h2>
                                    </div>
                                </div>
                                <div className="tb-card-body">
                                    <div className="tb-padd-lr-30 tb-alert-wrap">
                                        <div className="tb-height-b25 tb-height-lg-b25"></div>
                                        <Formik
                                            initialValues={{ 
                                                title: title, 
                                                description: description,
                                                regular_price: regular_price, 
                                                category: category.id, 
                                                stock_status: stock_status, 
                                                quantity_stocked: quantity_stocked, 
                                                delivery_location: delivery_location,
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
                                                    props.updateProduct(values, id, props.history)
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
                                                    <div className="form-group">
                                                        <label htmlFor="regular_price">Price</label>
                                                        <input
                                                            id="regular_price"
                                                            type="text"
                                                            name="regular_price"
                                                            placeholder="Price"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.regular_price}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="category">Category</label>
                                                        <select 
                                                            name="category" 
                                                            id="category"
                                                            value={values.category} 
                                                            onChange={handleChange}
                                                        >
                                                            {ProductCategory}
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="stock_status">Stock Status</label>
                                                        <select 
                                                            name="stock_status" 
                                                            id="stock_status"
                                                            value={values.stock_status} 
                                                            onChange={handleChange} 
                                                        >
                                                            <option value="In stock">In stock</option>
                                                            <option value="Out of stock">Out of stock</option>
                                                            <option value="On backorder">On backorder</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="quantity_stocked">Stock Status</label>
                                                        <input
                                                            type="number"
                                                            id="quantity_stocked"
                                                            name="quantity_stocked"
                                                            placeholder="Quantity Stocked"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.quantity_stocked}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="delivery_location">Stock Status</label>
                                                        <textarea 
                                                            rows="4"
                                                            id="delivery_location"
                                                            name='delivery_location' 
                                                            placeholder="Delivery Location"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.delivery_location}
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

UpdateProductView.propTypes = {
    updateProduct: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    updateProduct: (params, id, history) => dispatch(updateProduct(params, id, history)),
});

export default connect(null, mapDispatchToProps)(UpdateProductView);