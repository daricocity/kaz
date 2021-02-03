import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../utils/setupUtils';
import { clearItemFromCart, removeItem, addItem } from '../../actions/cart.actions';

const CartItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {id, images, regular_price, title, quantity} = cartItem
    return(
        <tr className="carttr_1">
            <td>
                <div className="cartpage-item-remove">
                    <Link className="tb-solial-btn social-facebook opacity-color tb-radious50" to="#" title="Remove" onClick={() => clearItem(cartItem)} style={{color:'#fff', paddingTop:'18px'}}><i className="material-icons">delete</i></Link>
                </div>
            </td>
            <td>
                <div className="cartpage-image">
                    <Link to={`/shop/product/${id}`}><img src={`${baseUrl}${images[0]}`} alt={title} style={{width:'100px', height:'100px'}} /></Link>
                </div>
            </td>
            <td>
                <div className="cartpage-pro-dec">
                    <p><Link to={`/shop/product/${id}`}>{title}</Link></p>
                </div>
            </td>
            <td>
                <div className="cart-pro-price">
                    <p>&#8358;{regular_price}</p>
                </div>											
            </td>
            <td>
                <Link to='#' className="tb-solial-btn social-facebook opacity-color tb-radious50" onClick={() => removeItem(cartItem)} style={{marginRight:'10px', color:'#fff'}}>&#10094;</Link>
                <span className='value'>{quantity}</span>
                <Link to='#' className="tb-solial-btn social-facebook opacity-color tb-radious50" onClick={() => addItem(cartItem)} style={{marginLeft:'10px', color:'#fff'}}>&#10095;</Link>
            </td>
            <td>
                <div className="cart-pro-price">
                    <p>&#8358;{regular_price*quantity}</p>
                </div>
            </td>
        </tr>
    )
};

CartItem.propTypes = {
    addItem: PropTypes.func.isRequired,
    clearItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
})

export default connect(null,mapDispatchToProps)(CartItem)