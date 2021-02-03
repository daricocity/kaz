import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { getCategorys } from '../../../actions/category.actions';
import PaginationActionsTable from '../../../components/table/table';

const CategoryView = () => {

    document.title = 'Category';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategorys());
    }, [dispatch]);

    const { categories } = useSelector(state => state.category)
    const Category = categories !== null && categories !== undefined && categories
    const isCategory = true
    
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
                                        {/* <li>Category</li> */}
                                    </ul>
                                </div>
                                <div className="tb-sectin-heading-right">
                                    <div className="tb-button-group tb-style1">
                                        <Link 
                                            to='/user/add_category' 
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
                                        <h2 className="tb-card-title">Category List</h2>
                                    </div>
                                    <div className="tb-card-heading-right">
                                    </div>
                                </div>
                                <PaginationActionsTable
                                    tableHead={["S/N", "Name", "Description", "Action"]}
                                    tableData={Category}
                                    url="category"
                                    paginateColSpan={4}
                                    isCategory={isCategory}
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

CategoryView.propTypes = {
    categories: PropTypes.object.isRequired,
    getCategorys: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    categories: state.category
});

const mapDispatchToProps = dispatch => ({
    getCategorys: () => dispatch(getCategorys()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);