import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../utils/setupUtils';
import { addItem } from '../../actions/cart.actions';
import { selectCartItems } from '../../selectors/cartSelector';

const ProductItem = ({product, addItem, cartItems}) => {
    // const { title, regular_price, images, id } = props
    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }
    return (
        <div className="single-grid-product col-12 col-sm-6 col-md-6 col-lg-3">
            <div className="grid-product-image">
                <Link to="#"><img src={`${baseUrl}${product.images[0]}`} alt="product grid"/></Link>
                <div className="product-action">
                    <Link to="#"><i className="material-icons">favorite_border</i></Link>
                    <Link to="#"><i className="material-icons">autorenew</i></Link>
                    <Link data-toggle="modal" data-target="#productQucikView" to="/shop/cart" title="View Cart"><i className="material-icons">visibility</i></Link>
                </div>
                {isInCart(product) && 
                    <Link className="grid-btn" onClick={() => addItem(product)}>Add more</Link>
                }
                {!isInCart(product) && 
                    <Link className="grid-btn" onClick={() => addItem(product)}>Add to cart</Link>
                }
            </div>
            <div className="grid-product-info">
                <div className="price-box">
                    <span className="regular-price">&#8358;{product.regular_price}</span>
                </div>
                <Link to={`/shop/product/${product.id}`}>{product.title}</Link>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: product => dispatch(addItem(product))
})

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);