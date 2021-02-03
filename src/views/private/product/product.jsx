import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { getProducts } from '../../../actions/product.action';
import { getCategorys } from '../../../actions/category.actions';
import PaginationActionsTable from '../../../components/table/table';

const ProductView = (props) => {
    document.title = 'Product';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategorys());
    }, [dispatch]);

    const isProduct = true

    const { products } = useSelector(state => state.product);
    const { categories } = useSelector(state => state.category);

    const Product = products !== null && products !== undefined && products
    const allCategory = categories !== null && categories !== undefined && categories
    
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
                                        <li>Product</li>
                                    </ul>
                                </div>
                                <div className="tb-sectin-heading-right">
                                    <div className="tb-button-group tb-style1">
                                        <Link 
                                            to='/user/add_product' 
                                            style={{color:'#fff', marginBottom:'15px'}} 
                                            className="tb-solial-btn social-facebook opacity-color tb-radious50"
                                        >
                                                <i className="material-icons">add</i>
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
                                        <h2 className="tb-card-title">Product List</h2>
                                    </div>
                                    <div className="tb-card-heading-right">
                                    </div>
                                </div>
                                <PaginationActionsTable
                                    tableHead={["S/N", "Name", "Price", "Category", "Actions"]}
                                    tableData={Product}
                                    isProduct={isProduct}
                                    all_category={allCategory}
                                    url="product"
                                    paginateColSpan={5}
                                    history={props.history}
                                />
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

export default ProductView