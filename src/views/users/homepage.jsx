import { Link } from 'react-router-dom';
import React, { useEffect, } from 'react';
import Footer from '../../components/layout/footer';
import Header from '../../components/layout/header';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../actions/product.action';
import ProductItem from '../../components/product/productItem';
import { getAllCategorys } from '../../actions/category.actions';

const HomepageView = (props) => {
	document.title = 'Home';
	const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getAllProducts());
		dispatch(getAllCategorys()); 
	}, [dispatch]);

	const { all_product } = useSelector(state => state.product);
	const { all_category } = useSelector(state => state.category);
	const productCategory = all_category !==null && all_category !== undefined && all_category.length > 0 &&
	all_category.map((category,ind) => (
		<div className="col-12 col-sm-6 col-md-6 col-lg-3 wrap-border" key={ind}>
			<div className="single-shop-by-category">
				{/* <div className="shop-by-cat-images">
					<Link to="/"><img src="/assets/img/category/cat5.jpg" alt="cate_thumb3"/></Link>
				</div> */}
				{all_product.filter(pro => pro.category === category.id).length !== 0 ? (
					<div className="shop-by-cat-content">
						<h3 style={{fontSize: '15px'}}>{category.title}</h3>
						<ul>
							{all_product !== null && all_product !== undefined && all_product.length > 0 && all_product.filter(pro => pro.category === category.id).map(proCat => (
								<li key={proCat.id}><Link to={`/shop/product/${proCat.id}`}>{proCat.title}</Link></li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</div>
	)).slice(8,12)

	return(
		<div className="wrapper">
			<Header all_category={all_category} all_product={all_product} />
			<section className="slider-area">
				<div className="slider-active owl-carousel">
					<div className="single-slide" style={{backgroundImage: "url('/assets/img/slider/1.jpg')"}}> 
						<div className="container">
							<div className="row">
								<div className="col-sm-10 col-md-8 col-lg-6">
									<div className="slider-content">
										<h2>
											<span className="primary-color">monster <br/> </span>
											<strong>performance <br/> for less</strong>
										</h2>
										<h4>
											<span className="primary-color">better</span>  build, comfort sound <br/>  &clearer calls
										</h4>
										<div className="slider-button default-button">
											<Link to="/shop/product">shop now</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="single-slide" style={{backgroundImage:"url('/assets/img/slider/2.jpg')"}}>
						<div className="container">
							<div className="row">
								<div className="col-sm-10 col-md-8 col-lg-6">
									<div className="slider-content">
										<h2>
											<strong>Women’s wear</strong>
											<span></span>
										</h2>
										<h3>
											flat 50% off
										</h3>
										<div className="slider-button default-button">
											<Link to="shop.html">shop now</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>            	
			</section>

			<section className="store-policy-method">
				<div className="container ">
					<div className="store-policy-method-wrapper wrap-border">
						<div className="row">
							<div className="col-12 col-sm-6 col-lg-3">
								<div className="single-method-box">
									<i className="material-icons">wb_cloudy</i>
									<div className="method-content">
										<h5>Free Delivery</h5>
										<p>On orders of $200+</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3">
								<div className="single-method-box">
									<i className="material-icons">credit_card</i>
									<div className="method-content">
										<h5>Cod</h5>
										<p>Cash on Delivery</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3">
								<div className="single-method-box">
									<i className="material-icons">card_giftcard</i>
									<div className="method-content">
										<h5>Free Gift Box</h5>
										<p>Buy a Gift</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3">
								<div className="single-method-box">
									<i className="material-icons">ring_volume</i>
									<div className="method-content">
										<h5>Free Support 24/7</h5>
										<p>Online 24hrs a Day</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="shop-by-category">
				<div className="container ">
					<div className="section-title section-title-style1">
						<h2>Shop by categories</h2>
					</div>
					<div className="">
						<div className="row">
							{productCategory}
						</div>
					</div>
				</div>
			</section>

			<div className="three-column-banner-area">
            	<div className="container">
            		<div className="row">
            			<div className="col-12 col-sm-4">
            				<div className="banner-add single-three-column-banner">
            					<Link to="shop.html"><img src="/assets/img/banner/three-column1.jpg" alt="three-column1"/></Link>
            				</div>
            			</div>
            			<div className="col-12 col-sm-4">
            				<div className="banner-add single-three-column-banner">
            					<Link to="shop.html"><img src="/assets/img/banner/three-column2.jpg" alt="three-column1"/></Link>
            				</div>
            			</div>
            			<div className="col-12 col-sm-4">
            				<div className="banner-add single-three-column-banner">
            					<Link to="shop.html"><img src="/assets/img/banner/three-column3.jpg" alt="three-column1"/></Link>
            				</div>
            			</div>
            		</div>
            	</div>
            </div>

			<div className="tab-product-area">
            	<div className="container">
            		<div className="row">
            			<div className="col-12 col-sm-12">
            				<div className="tab-product-nav">
								<ul className="nav nav-tabs section-title-style1 nav-section-title section-title-border" role="tablist">
								  <li> <Link className="active" id="new-product" data-toggle="tab" to="#newproduct" role="tab" aria-controls="newproduct" aria-selected="true">New Product</Link></li>
								</ul>
							</div>
							<div className="tab-main-content">
								<div className="tab-content">
								  <div className="tab-pane fade show active" id="newproduct" role="tabpanel" aria-labelledby="new-product">
								    <div className="home-tab-carouselj product-grid-wrapper row">
										{all_product.map(product => <ProductItem key={product.id} product={product} />)}
								    </div>								  	
								  </div>
								</div>
							</div>
            			</div>
            		</div>
            	</div>
            </div>
			<Footer/>
		</div>
	)
}

// HomepageView.propTypes = {
// 	all_category: PropTypes.object.isRequired,
// 	getAllCategorys: PropTypes.func.isRequired,
// };
  
export default HomepageView;