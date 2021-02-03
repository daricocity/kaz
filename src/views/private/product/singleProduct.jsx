import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { baseUrl } from '../../../utils/setupUtils';
import { CircularProgress } from '@material-ui/core';
import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getAllCategorys } from '../../../actions/category.actions';
import { getProduct, deleteProduct } from '../../../actions/product.action';

const SingleProductView = (props) => {

    document.title = 'Product';
    const dispatch = useDispatch();

    const { id } = props.match.params !== null && props.match.params !== undefined && props.match.params;

    useEffect(() => {
        dispatch(getAllCategorys());
        dispatch(getProduct(id, props.history));
    }, [dispatch, id, props.history]);

    const detail = useSelector(state => state.product.product);

    const { title, description, regular_price, category, stock_status, quantity_stocked, delivery_location, user, images } = detail !== null && detail !== undefined && detail;

    const { full_name, email, phone_number, address } = user !== null && user !== undefined && user;

    const { all_category } = useSelector(state => state.category);
    
    const ProductCategory = all_category !== null && all_category !== undefined && all_category.length > 0 &&
    all_category.filter(cat => cat.id === category).map(proCat => (
        <p key={proCat.id}>{proCat.title}</p>
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
                                        <li>Single Product</li>
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
                                        <Link 
                                            to={`/user/product/${id}/edit`} 
                                            style={{color:'#fff', marginBottom:'15px', marginLeft: '10px'}} 
                                            className="tb-solial-btn social-facebook opacity-color tb-radious50"
                                        >
                                            <i className="material-icons">edit</i>
                                        </Link>
                                        <Link 
                                            onClick={() => props.deleteProduct(id, props.history)}
                                            style={{color:'#fff', marginBottom:'15px', marginLeft: '10px', background:'#f50057'}} 
                                            className="tb-solial-btn social-facebook opacity-color tb-radious50"
                                            // to="/user/product"
                                        >
                                            <i className="material-icons">delete</i>
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
                        <div className="col-lg-12">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-heading">
                                    <div className="tb-card-heading-left">
                                        <h2 className="tb-card-title">Single Product</h2>
                                    </div>
                                    <div className="tb-card-heading-right">
                                    </div>
                                </div>
                                <div className="tb-height-b30 tb-height-lg-b30"></div>
                                {detail ? (
                                    <>
                                        <div className="row">
                                            <div className='col-lg-6'>
                                                <div style={{marginLeft: '30px', fontSize: "25px"}}>
                                                    <h3>{title}</h3>
                                                    {images !== null && images !== undefined && images ?
                                                        <a href={`${baseUrl}${images[0]}`}>
                                                            <img src={`${baseUrl}${images[0]}`} alt='product' />
                                                        </a>
                                                    : (
                                                        <p>No images</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <h4>Product Description</h4>
                                                <p>{description}</p>

                                                <h4>Product Category</h4>
                                                {ProductCategory}
                                            </div>
                                        </div>
                                        <div className="tb-height-b30 tb-height-lg-b30"></div>
                                        <div className="tb-table tb-style1 tb-type1 table-responsive">
                                            <h3 style={{fontSize: "25px", marginLeft: '30px'}}>Other Info</h3>
                                            <table className="table table-bordered table-striped table-earning">
                                                <tbody>
                                                    <tr>
                                                        <td >Quantity</td>
                                                        <td>{quantity_stocked}</td>
                                                    </tr>
                                                    <tr>
                                                        <td >Price</td>
                                                        <td>{regular_price}</td>
                                                    </tr>
                                                    <tr>
                                                        <td >Status</td>
                                                        <td>{stock_status}</td>
                                                    </tr>
                                                    <tr>
                                                        <td >Delivery Location</td>
                                                        <td>{delivery_location}</td>
                                                    </tr>
                                                </tbody>
                                            </table> 
                                        </div>
                                        <div className="tb-table tb-style1 tb-type1 table-responsive">
                                            <h3 style={{fontSize: "25px", marginLeft: '30px'}}>Contact Info</h3>
                                            <table className="table table-bordered table-striped table-earning">
                                                <tbody>
                                                    <tr>
                                                        <td >Name</td>
                                                        <td>{full_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td >Email</td>
                                                        <td>{email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td >Phone Number</td>
                                                        <td>{phone_number}</td>
                                                    </tr>
                                                    <tr>
                                                        <td >Contact Address</td>
                                                        <td>{address}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                ) : (
                                    <div style={{
                                        height: "20vh",
                                        width: "100%",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: 'transparent'
                                    }}>
                                        <CircularProgress />
                                    </div>
                                )}
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

SingleProductView.propTypes = {
    getProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    getAllCategorys: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    getAllCategorys: () => dispatch(getAllCategorys()),
    getProduct: (id, history) => dispatch(getProduct(id, history)),
    deleteProduct: (id, history) => dispatch(deleteProduct(id, history)),
});

export default connect(null, mapDispatchToProps)(SingleProductView);