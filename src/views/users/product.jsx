import { Link } from 'react-router-dom';
import React, { useEffect, } from 'react';
import { baseUrl } from '../../utils/setupUtils';
import Footer from '../../components/layout/footer';
import Header from '../../components/layout/header';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../actions/product.action';
import { getSingleProduct } from '../../actions/product.action';
import { getAllCategorys } from '../../actions/category.actions';

const ProductPageView = (props) => {
	
    const dispatch = useDispatch();

    const { id } = props.match.params !== null && props.match.params !== undefined && props.match.params;

    useEffect(() => {
		dispatch(getAllProducts());
        dispatch(getAllCategorys());
        dispatch(getSingleProduct(id))
    }, [dispatch, id]);
    
    const { all_product } = useSelector(state => state.product);
    const { all_category } = useSelector(state => state.category);
    const { single_product } = useSelector(state => state.product);

    const {title, description, regular_price, category, stock_status, quantity_stocked, images, user} = single_product !== null && single_product !== undefined && single_product

    const ProductCategory = all_category !==null && all_category!== undefined && all_category.length>0 &&
    all_category.filter(cat => cat.id === category).map((proCat, ind) => (
        <span key={ind}> {proCat.title}</span>
    ))
	const Detail = user !== null && user !== undefined && user
	document.title = `Product | ${title}`

	const productImage = images !== null && images !== undefined && images.length > 0 && images.map((im, ind) => (
		<a href={`${baseUrl}${im}`} key={ind}>
			<img src={`${baseUrl}${im}`} alt='product' />
		</a>
	))

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
									<li>{title}</li>
								</ul>
            				</div>
            			</div>
            		</div>
            	</div>
            </div>
            <section className="main-content-area">
            	<div className="container">
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="single-product-image">
								<div className="fotorama">
									{productImage}
								</div>
							</div>							
						</div>
						<div className="col-12 col-md-6">
							<div className="single-product-description">
								<div className="product-description-content">
									<h2>{title}</h2>
									<div className="price-box">
										<span className="regular-price">&#8358;{regular_price}</span>
									</div>
									<div className="product-review">
										<i className="material-icons">grade</i>
										<i className="material-icons">grade</i>
										<i className="material-icons">grade</i>
										<i className="material-icons">grade</i>
										<i className="material-icons">grade</i>
									</div>

									<div className="product-meta">
                                        <p className="availability">Category : {ProductCategory}</p>
										<p className="availability">Availability : <span> {stock_status}</span></p>
										<p className="product-sku">SKU : <span> {quantity_stocked}</span></p>
										<p className="availability">Contact : <span> {Detail.full_name}</span></p>	
										<p className="availability">Phone Number : <span> {Detail.phone_number}</span></p>
									</div>
									<div className="main-content">
										<p>{description}</p>
									</div>
								</div>
								<div className="product-variation">
									<div className="product-cart-option">
										<ul>
											<li><Link to="#"><i className="material-icons">favorite_border</i> Add to Cart </Link></li>
											<li><Link to="#"><i className="material-icons">autorenew</i> Add to compare</Link></li>
											<li><Link to="#"><i className="material-icons">mail_outline</i> Email</Link></li>
										</ul>
									</div>
								</div>										
							</div>	
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-sm-12">
							<div className="product-description-tab">
								<div className="product-description-tab-menu">
	                                <ul className="nav" role='tablist'>
										<li>
											<a  className="active" id="product-tad-desc" data-toggle="tab" href="#tab-dec" role="tab" aria-controls="product-tad-desc" aria-selected="true">
												Details
											</a>
										</li>		                                    
									</ul>											
								</div>
								<div className="product-description-tab-content tab-content">
									<div id="tab-dec" className="tab-pane fade active show" aria-labelledby="product-tad-desc" role="tabpanel">
										<div className="product-tab-description">
											<p>{description}</p>
										</div>
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
}


export default ProductPageView;