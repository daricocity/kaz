import { Link } from 'react-router-dom';
import React, { useEffect, } from 'react';
import Footer from '../../components/layout/footer';
import Header from '../../components/layout/header';
import { CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../actions/product.action';
import ProductItem from '../../components/product/productItem';
import ListProduct from '../../components/product/listProduct';
import { getAllCategorys } from '../../actions/category.actions';

const ShoppageView = (props) => {
	
	document.title = 'Shop';
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getAllProducts());
        dispatch(getAllCategorys());
    }, [dispatch]);
    
    const { all_product } = useSelector(state => state.product);
	const { all_category } = useSelector(state => state.category);
	
	const productCategory = all_category !== null && all_category !== undefined && all_category.length > 0 &&
        all_category.map((category, ind) => (
            <li key={ind}>
                {all_product.filter(pro => pro.category === category.id).length !== 0 ? (
					<Link to="#">
						{category.title} 
						<span> ({all_product.filter(pro => pro.category === category.id).length})</span>
					</Link>
                ): null}
            </li>
        )).slice(0,12)
    
    return(
        <div className="wrapper">
			<Header all_category={all_category} all_product={all_product} />
            <div className="breadcrump-area">
            	<div className="container">
            		<div className="row">
            			<div className="col-12 col-sm-12">
            				<div className="korando-breadcrump">
								<ul>
									<li><Link to="#" title="Go to Home Page">Home</Link></li>
									<li>Shop Right Sidebar</li>
								</ul>
            				</div>
            			</div>
            		</div>
            	</div>
            </div>
            <section className="main-content-area">
            	<div className="container">
            		<div className="row">
            			<div className="col-12 col-md-8 col-lg-9">
							<div className="main-content">
								<div className="shop-page-header">
									<div className="shop-page-header-image">
										<Link to="#"><img src="/assets/img/banner/bg_shop.jpg" alt="one-column1"/></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-4 col-lg-3">
							<div className="sidebar-area">
								<div className="single-sidebar sidebar-category">
									<div className="sidebar-menu">
										<div className="section-title">
											<h2>Category</h2>
										</div>
										<ul>
											{productCategory}
                                            {/* {all_category !==null && all_category !== undefined && all_category.length > 0 && all_category.map((category,ind) => (
                                                <li key={ind}><Link to="#">{category.title} <span>({all_product.filter(pro => pro.category === category.id).length})</span></Link></li>
                                            )).slice(0,4)} */}
										</ul>
									</div>
								</div>
							</div>
						</div>
            		</div>

                    <div className="row">
            			<div className="col-12 col-md-12 col-lg-12">
							<div className="main-content">
								<div className="shop-page-product-area">
									<div className="shop-page-product-shorting section-title-border">
										<div className="product-shorting-bar">
											<div className="view-mode">
				                                <ul className="nav" role="tablist">
													<li className="grid-view"> 
														<a className="active" id="product-grid" data-toggle="tab" href="#grid-product" role="tab" aria-controls="product-grid" aria-selected="true">
															<i className="material-icons">toggle view</i>
														</a>
													</li>
													<li className="list-view">
														<a id="product-list" data-toggle="tab" href="#list-product" role="tab" aria-controls="product-list" aria-selected="false">
															<i className="material-icons">toggle view</i>
														</a>
													</li>			                                    
												</ul>
		                                    </div>
											<div className="show-page">
												<span>Show</span>
												<div className="per-page short-select-option">
													<select className="orderby">
														<option value="">3</option>
														<option value="">6</option>
														<option value="">8</option>
														<option value="">12</option>
													</select>													
												</div>									
											</div>
		                                    <div className="short-asc-dsc">
		                                    	<Link to="#" title="Set Descending Direction"><i className="fa fa-long-arrow-up"></i></Link>
		                                    </div>												
											<div className="shoort-by">
												<span>Sort by</span>
												<div className="short-select-option">
													<select>
														<option value="">Position</option>
														<option value="">Name</option>
														<option value="">Price</option>
													</select>												
												</div>
											</div>
										</div>
									</div>
									{all_product.length > 0 ? (
										<div className="tab-content shop-page-product-tab">
											<div id="grid-product" className="tab-pane fade active show" aria-labelledby="product-grid" role="tabpanel">
												<div className="row product-grid-view">
													{all_product.map(product => <ProductItem key={product.id} product={product} />)}					
												</div>
											</div>
											<div id="list-product" className="tab-pane fade" role="tabpanel" aria-labelledby="product-list">
												<div className="product-list-view">
													<div className="single-list-product">
														{all_product.map(product => <ListProduct key={product.id} {...product}/>)}
													</div>
												</div>
											</div>
										</div>
									) : (
										<center><CircularProgress/></center>
									)}
									<div className="pagination-area">
										<ul>
											<li><Link to="#"><i className="material-icons">chevron_left</i></Link></li>
											<li><span>1</span></li>
											<li><Link to="#">2</Link></li>
											<li><Link to="#">3</Link></li>
											<li><Link to="#">4</Link></li>
											<li><Link to="#">5</Link></li>
											<li><Link to="#"><i className="material-icons">chevron_right</i></Link></li>
										</ul>
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

export default ShoppageView