import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import Footer from '../../components/layout/footer';
import Header from '../../components/layout/header';
import CartItem from '../../components/cart/cartItem';
import { getAllProducts } from '../../actions/product.action';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getAllCategorys } from '../../actions/category.actions';
import { selectCartItems, selectCartTotal } from '../../selectors/cartSelector';

const CartPage = ({cartItems, total}) => {

    document.title = 'Cart';
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
									<li>Cart</li>
								</ul>
            				</div>
            			</div>
            		</div>
            	</div>
            </div>
            <section className="main-content-area">
				<div className="container">
            		<div className="row">
            			<div className="col-12 col-sm-12">
							<div className="section-title section-title-style1">
								<h2>Shopping Cart</h2>
							</div>            				
            			</div>
            		</div>				
					<div className="row">
						<div className="col-12 col-sm-12">
							<div className="korando-table-area">
								<div className="cart-table table-responsive">
									<table className="table">
										<thead>
											<tr>
												<th className="width-7">Remove</th>
												<th className="width-2">Images</th>
												<th className="width-3">Product Name</th>	
												<th className="width-6">Unit Price 	</th>	
												<th className="width-1">Qty</th>	
												<th className="width-8">Subtotal</th>	
											</tr>														
										</thead>
										<tbody>
                                            {cartItems.length ? (
                                                cartItems.map(cartItem => (<CartItem key={cartItem.id} cartItem={cartItem}/>))
                                            ) : (
												<tr>
													<td></td>
													<td></td>
													<td><span className='empty-message' style={{fontSize:'15px', fontWeight:'700'}}>Your Cart is Empty</span></td>
													<td></td>
													<td></td>
													<td></td>
												</tr>
                                                
                                            )}
										</tbody>									
									</table>
								</div>
								<div className="cartpage-button">
									<div className="primary-btn default-button">
										<Link to="/shop/product">Continue Shopping</Link>
									</div>
									{/* <div className="primary-btn default-button">
										<Link to="#">Clear Cart</Link>
									</div>	 */}
								</div>							
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-sm-12 col-md-4">
							<div className="cart-page-single-area estimate-shiping">
								<h2 className="cartpage-title">Estimate Shipping And Tax</h2>
								<p>Enter your destination to get a shipping estimate.</p>
								<div className="form-group">
									<div className="country-select clearfix">
										<label>Country <sup>*</sup></label>
										<select className="nice-select wide">
											<option value="1">United State</option>
											<option value="2">Azerbaijan</option>
											<option value="3">Bahamas</option>
											<option value="4">Bahrain</option>
											<option value="5">Bangladesh</option>
											<option value="6">Barbados</option>
											<option value="7">Belarus</option>
											<option value="8">Belgium</option>
											<option value="9">Belize</option>
											<option value="10">Benin</option>
											<option value="11">Bermuda</option>
											<option value="12">Bhutan</option>
											<option value="13">Bolivia</option>
											<option value="14">Bosnia and Herzegovina</option>
											<option value="15">Botswana</option>
											<option value="16">Bouvet Island</option>
											<option value="17">Brazil</option>
											<option value="18">British Indian Ocean Territory</option>
											<option value="19">British Virgin Islands</option>
											<option value="20">Brunei</option>
											<option value="21">Bulgaria</option>
											<option value="22">Burkina Faso</option>
											<option value="23">Burundi</option>
											<option value="24">Cambodia</option>
											<option value="25">Cameroon</option>
											<option value="26">Canada</option>
											<option value="27">Cape Verde</option>
											<option value="28">Cayman Islands</option>
											<option value="29">Central African Republic</option>
											<option value="30">Chad</option>
											<option value="31">Chile</option>
											<option value="32">China</option>
											<option value="33">Christmas Island</option>
											<option value="34">Cocos (Keeling) Islands</option>
											<option value="35">Colombia</option>
											<option value="36">Comoros</option>
											<option value="37">Congo - Brazzaville</option>
											<option value="38">Congo - Kinshasa</option>
											<option value="39">Cook Islands</option>
											<option value="40">Costa Rica</option>
											<option value="41">Côte d’Ivoire</option>
											<option value="42">Croatia</option>
											<option value="43">Cuba</option>
											<option value="44">Cyprus</option>
											<option value="45">Czech Republic</option>
											<option value="46">Denmark</option>
											<option value="47">Djibouti</option>
											<option value="48">Dominica</option>
											<option value="49">Dominican Republic</option>
											<option value="50">Ecuador</option>
											<option value="41">Egypt</option>
											<option value="42">El Salvador</option>
											<option value="43">Equatorial Guinea</option>
											<option value="44">Eritrea</option>
											<option value="45">Estonia</option>
											<option value="46">Ethiopia</option>
											<option value="47">Falkland Islands</option>
											<option value="48">Faroe Islands</option>
											<option value="49">United State</option>
										</select>
									</div>								
								</div>
								{/* <div className="form-group">
									<label>State/Province</label>
									<input type="text" className="form-control" />								
								</div>
								<div className="form-group">
									<label>Zip/Postal Code</label>
									<input type="text" className="form-control" />								
								</div> */}
								<div className="primary-btn default-button">
									<Link to="#" className="add-tag-btn">GET A QUOTE</Link>
								</div>
							</div>						
						</div>
						<div className="col-12 col-sm-12 col-md-4">
							<div className="cart-page-single-area cartpage-descount">
								<h2 className="cartpage-title">Discount Codes</h2>
								<div className="form-group">
									<label>Enter your coupon code if you have one.</label>
									<input type="text" className="form-control" />
								</div>	
								<div className="primary-btn default-button">
									<Link to="#">APPLY COUPON</Link>
								</div>														
							</div>							
						</div>
						<div className="col-12 col-sm-12 col-md-4">
							<div className="cart-page-single-area cartpage-total-amount">
								<div className="cartpage-total-price">
									<div className="total-price-box">
										<p><span className="sub-t">Subtotal: <span className="sub-t-p">&#8358;{total}.00</span></span></p>
										<p><span className="grand-t">Grand Total: <span className="grand-t-p">&#8358;{total}.00</span></span></p>	
									</div>
									<div className="primary-btn default-button">
										<Link to="/shop/checkout">Proceed to Checkout</Link>
									</div>
								</div>
							</div>					
						</div>
					</div>
				</div>            	
            </section>	
            <Footer/>
        </div>
    )
};

CartPage.propTypes = {
    total: PropTypes.number.isRequired,
    cartItems: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    total: selectCartTotal(state),
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartPage)