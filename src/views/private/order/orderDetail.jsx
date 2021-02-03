import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { getAllProducts } from '../../../actions/product.action';
import { getOrderDetails } from '../../../actions/order.actions';
import PaginationActionsTable from '../../../components/table/orderDetailTable';

const OrderDetailView = (props) => {

    document.title = 'Order Detail';
    const dispatch = useDispatch();

    const { id } = props.match.params !== null && props.match.params !== undefined && props.match.params;

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getOrderDetails());
    }, [dispatch]);

    const { all_product } = useSelector(state => state.product);
    const { orderDetails }  = useSelector(state => state.order);
    const Cart = orderDetails !== null && orderDetails !== undefined && orderDetails
    const orderDetail = Cart !== null && Cart !== undefined && Cart.filter(order => order.order === parseInt(id));

    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-sectin-heading tb-style1 tb-uikits-heading">
                                <div className="tb-sectin-heading-left tb-uikits-heading-2">
                                    <h2 className="tb-uikits-title">Order</h2>
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                        <li>Order Detail</li>
                                    </ul>
                                </div>
                                <div className="tb-sectin-heading-right">
                                    <div className="tb-button-group tb-style1">
                                        <Link 
                                            to='/user/order' 
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
                        <div className="col-lg-12">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-heading">
                                    <div className="tb-card-heading-left">
                                        <h2 className="tb-card-title">Order Detail</h2>
                                    </div>
                                    <div className="tb-card-heading-right">
                                        
                                    </div>
                                </div>
                                <PaginationActionsTable
                                    tableHead={["S/N", "Product", "Price", "Quantity", "Total"]}
                                    tableData={orderDetail}
                                    paginateColSpan={5}
                                    all_product={all_product}
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
};

OrderDetailView.propTypes = {
    orderDetails: PropTypes.array.isRequired,
    getAllProducts: PropTypes.func.isRequired,
    getOrderDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    orderDetails: state.order
});

const mapDispatchToProps = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
    getOrderDetails: () => dispatch(getOrderDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailView);
