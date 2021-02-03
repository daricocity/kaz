import React from 'react';
import PropTypes from "prop-types";
import CartDropdownItem from './cartDropdownItem';
import { connect, useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { toggleCartHidden } from '../../actions/cart.actions';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../selectors/cartSelector';

const CartDropdown = ({cartItems, history, toggleCartHidden, itemCount, total}) => {
    const dispatch = useDispatch();
    return(
        <div className="mini-cart1">
            <div className="mini-cart-inner">
                <span className="minicart-close"><i className="material-icons" onClick={toggleCartHidden}>clear</i></span>
                <div className="minicart-total-wraper">
                    <p><strong>{itemCount}</strong> Items in Cart</p>
                    <b>Cart Subtotal: <span className="minitotal-price">&#8358;{total}</span></b>
                    <Link to="#" onClick={() => {history.push('/shop/cart'); dispatch(toggleCartHidden(true))}}>View Cart</Link>
                </div>
                <div className="mini-cart-sing-item-wrapper">
                    {cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartDropdownItem key={cartItem.id} item={cartItem}/>
                        ))
                    ) : (
                        <span className='empty-message'>Your Cart is Empty</span>
                    )}
                </div>
            </div>
        </div>
    )
}

CartDropdown.propTypes = {
    total: PropTypes.number.isRequired,
    cartItems: PropTypes.array.isRequired,
    itemCount: PropTypes.number.isRequired,
    toggleCartHidden: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = state => ({
    total: selectCartTotal(state),
    cartItems: selectCartItems(state),
    itemCount: selectCartItemsCount(state),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))