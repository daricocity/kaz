import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCartHidden } from '../../actions/cart.actions';
import { selectCartItemsCount } from '../../selectors/cartSelector';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <li className="cart-tigger" onClick={toggleCartHidden}>
        <Link to="#">
            <i className="material-icons">shopping_cart</i>
            <span>{itemCount}</span>
        </Link>
    </li>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
