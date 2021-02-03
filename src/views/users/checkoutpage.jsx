import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import Footer from '../../components/layout/footer';
import Header from '../../components/layout/header';
import { useSelector, useDispatch } from 'react-redux';
import OrderItem from '../../components/checkout/orderItem';
import { getAllProducts } from '../../actions/product.action';
import { getAllCategorys } from '../../actions/category.actions';
import ChectoutForm from '../../components/checkout/checkoutForm';

const CheckoutPage = () => {

    document.title = 'Checkout';
	const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getAllProducts());
		dispatch(getAllCategorys()); 
	}, [dispatch]);

	const { all_product } = useSelector(state => state.product);
    const { all_category } = useSelector(state => state.category);
    
    return(
        <div className="wrapper">
            <Header all_category={all_category} all_product={all_product} />
            <div className="breadcrump-area">
            	<div className="container">
            		<div className="row">
            			<div className="col-12 col-sm-12">
            				<div className="korando-breadcrump">
								<ul>
									<li><Link to="/" title="Go to Home Page">Home</Link></li>
									<li>Checkout</li>
								</ul>
            				</div>
            			</div>
            		</div>
            	</div>
            </div>
            <section className="main-content-area checkout">
				<div className="container">
			        <div className="row">
	                    <div className="col-12">
	                        <div className="coupon-accordion">
	                            <h3>Returning customer? <span id="showlogin">Click here to login</span></h3>
	                            <div className="coupon-content" id="checkout-login">
	                                <div className="coupon-info">
	                                    <form action="#">
	                                        <p className="form-row-first">
	                                            <label>Username or email <span className="required">*</span></label>
	                                            <input type="text"/>
	                                        </p>
	                                        <p className="form-row-last">
	                                            <label>Password  <span className="required">*</span></label>
	                                            <input type="text"/>
	                                        </p>
	                                        <p className="form-row">
	                                            <input type="submit" value="Login"/>
	                                            <label>
	                                                <input type="checkbox"/>
	                                                 Remember me 
	                                            </label>
	                                        </p>
	                                        <p className="lost-password"><Link to="#">Lost your password?</Link></p>
	                                    </form>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
			        </div>
			        <div className="row">
			            <div className="col-lg-6 col-12">
							<ChectoutForm/>
			            </div>
			            <div className="col-lg-6 col-12">
			                <OrderItem/>
			            </div>
			        </div>
			    </div>         	
            </section>	
            <Footer/>
        </div>
    )
};

export default CheckoutPage;