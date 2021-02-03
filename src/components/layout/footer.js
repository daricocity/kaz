import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render() {
        return (
            <footer className="footer-area">
            	<div className="newsletter-area">
	            	<div className="container">
	            		<div className="row">
	            			<div className="col-12 col-sm-12 col-md-6 col-lg-5">
	            				<div className="newsletter">
	            					<h2>Sign up for newsletter</h2>
	            					<p>Get the latest deals and special offers</p>
	            				</div>
	            			</div>
	            			<div className="col-12 col-sm-12 col-md-6 col-lg-7">
	            				<div className="newsletter-form">
	            					<form action="#">
	            						<input type="email" id="email" name="email" className="form-contral" placeholder="Enter your email address" />
	            						<input type="submit" value="Sign Up" className="form-contral" />
	            					</form>
	            				</div>
	            			</div>
	            		</div>
	            	</div>
	            </div>
	            <div className="footer-ourservice">
	            	<div className="container">
	            		<div className="row">
							<div className="col-12 col-sm-6 col-md-3">
								<div className="single-foo-service">
									<div className="single-foo-service-image">
										<img src="/assets/img/service/service_icon1.png" alt="service_icon"/>
									</div>
									<div className="single-foo-service-content">
										<h5>100% SECURE PAYMENTS</h5>
										<p>Moving your card details to a much more secured place</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-3">
								<div className="single-foo-service">
									<div className="single-foo-service-image">
										<img src="/assets/img/service/service_icon2.png" alt="service_icon"/>
									</div>
									<div className="single-foo-service-content">
										<h5>TRUSTPAY</h5>
										<p>Moving your card details to a much more secured place</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-3">
								<div className="single-foo-service">
									<div className="single-foo-service-image">
										<img src="/assets/img/service/service_icon3.png" alt="service_icon"/>
									</div>
									<div className="single-foo-service-content">
										<h5>HELP CENTER</h5>
										<p>Got a question? Look no further Browse our FAQs.</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-3">
								<div className="single-foo-service">
									<div className="single-foo-service-image">
										<img src="/assets/img/service/service_icon4.png" alt="service_icon"/>
									</div>
									<div className="single-foo-service-content">
										<h5>SHOP ON THE GO</h5>
										<p>Download the app and get exciting app only offers at your fingertips</p>
									</div>
								</div>
							</div>
	            		</div>
	            	</div>
	            </div>
	            <div className="footer-middle">
	            	<div className="container">
            			<div className="row">
            				<div className="col-12 col-sm-6 col-md-6 col-lg-3">
	            				<div className="footer-about-us">
	            					<div className="logo-footer">
	            						<Link to="/">
	            							<img src="/assets/img/logo.png" alt="footer logo"/>
	            						</Link>
	            					</div>
	            					<div className="footer-content">
	            						<p>Organic world market is a global online market. We are here to increase your online presence. Advertise your products on our platform with little and reach where you couldn’t.</p>
	            						<div className="footer-content-address">
	            							<label>Contact info: </label>
	            							378 Ikorodu Rd, Maryland, Lagos
	            						</div>
	            						<div className="footer-social">
	            							<ul>
	            								<li className="twitter"><Link to="#"><i className="fa fa-twitter"></i></Link></li>
	            								<li className="facebook"><Link to="#"><i className="fa fa-facebook"></i></Link></li>
	            								<li className="google-plus"><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
	            								<li className="youtube"><Link to="#"><i className="fa fa-youtube"></i></Link></li>
	            								<li className="pinterest"><Link to="#"><i className="fa fa-pinterest"></i></Link></li>
	            								<li className="rss"><Link to="#"><i className="fa fa-rss"></i></Link></li>
	            							</ul>
	            						</div>
	            					</div>
	            				</div>            				
            				</div>
        					<div className="col-12 col-sm-6 col-md-6 col-lg-3">
        						<div className="footer-menu">
        							<h4>Customer Service</h4>
        							<ul>
									    <li><Link to="#">Contact Us</Link></li>
									    <li><Link to="#">orders and returns</Link></li>
									    <li><Link to="#">Privacy Policy</Link></li>
									    <li><Link to="#">Custom Service</Link></li>
									    <li><Link to="#">search terms</Link></li>
									    <li><Link to="#">Delivery Information</Link></li>
									    <li><Link to="#">Order History</Link></li>
        							</ul>
        						</div>
        					</div>
        					<div className="col-12 col-sm-6 col-md-6 col-lg-3">
        						<div className="footer-menu">
        							<h4>information</h4>
        							<ul>
									    <li><Link to="#">About us</Link></li>
									    <li><Link to="#">My Account</Link></li>
									    <li><Link to="#">Logout</Link></li>
									    <li><Link to="#">My cart</Link></li>
									    <li><Link to="#">Checkout</Link></li>
									    <li><Link to="#">Gift Vouchers</Link></li>
									    <li><Link to="#">Login</Link></li>
        							</ul>
        						</div>
        					</div>
        					<div className="col-12 col-sm-6 col-md-6 col-lg-3">
        						<div className="footer-menu">
        							<h4>Extras</h4>
        							<ul>
									    <li><Link to="#">Wish List</Link></li>
									    <li><Link to="#">compare</Link></li>
									    <li><Link to="#">Site Map</Link></li>
									    <li><Link to="#">Advanced Search</Link></li>
									    <li><Link to="#">FAQ</Link></li>
									    <li><Link to="#">Warranty</Link></li>
									    <li><Link to="#">Order status</Link></li>
        							</ul>
        						</div>
        					</div>
            			</div>
	            	</div>
	            </div>
	            <div className="footer-tag">
	            	<div className="container">
	            		<div className="row">
	            			<div className="col-12">
	            				<div className="footer-tag-list">
	            					<ul>
										<li><Link to="#">Online Shopping</Link></li>
										<li><Link to="#">Promotions</Link></li>
										<li><Link to="#">My Orders</Link></li>
										<li><Link to="#">Help</Link></li>
										<li><Link to="#">Customer</Link></li>
										<li><Link to="#">Service</Link></li>
										<li><Link to="#">Support Most</Link></li>
										<li><Link to="#">Populars</Link></li>
										<li><Link to="#">New Arrivals</Link></li>
										<li><Link to="#">Special</Link></li>
										<li><Link to="#">Products</Link></li>
										<li><Link to="#">Manufacturers</Link></li>
										<li><Link to="#">Our Stores</Link></li>
										<li><Link to="#">Shipping Payments</Link></li>
										<li><Link to="#">Warantee Refunds</Link></li>
										<li><Link to="#">Checkout</Link></li>
										<li><Link to="#">Discount</Link></li>
										<li><Link to="#">Terms & Conditions</Link></li>
										<li><Link to="#">Policy</Link></li>
										<li><Link to="#">Shipping</Link></li>
										<li><Link to="#">Payments</Link></li>
										<li><Link to="#">Returns</Link></li>
										<li><Link to="#">Refunds</Link></li>
	            					</ul>
	            				</div>
	            				<div className="footer-payment-logo">
	            					<img src="/assets/img/payment.png" alt="accept payment"/>
	            				</div>
	            			</div>
	            		</div>
	            	</div>
	            </div>
	            <div className="footer-copy-right">
	            	<div className="container">
	            		<div className="row">
	            			<div className="col-12">
	            				<div className="copyright-text">
	            					<p>&copy; 2020 <a href="/">OrganicWorld</a>, Inc. All rights reserved.</p>
	            				</div>
	            			</div>
	            		</div>
	            	</div>
	            </div>
            </footer>
        )
    }
}

export default Footer