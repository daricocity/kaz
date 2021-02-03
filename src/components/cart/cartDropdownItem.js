import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../utils/setupUtils';

const CartDropdownItem = ({item: {images, regular_price, title, quantity}}) => (
    <div className="mini-cart-sing-item">
        <div className="mini-cart-content">
            <img src={`${baseUrl}${images[0]}`} alt="mini cart 1"/>
            <div className="minicart-item-desc">
                <Link to="#">{title}</Link>
                <span className="minicart-price">&#8358;{regular_price}</span>
                <p className="minicart-qty"><span>Qty:</span><input type="number" value={quantity} readOnly/></p>
            </div>
        </div>
        <div className="mini-cart-edit-item">
            <Link className="item-edit" to="#" title="edit"><i className="material-icons">settings</i></Link>
            <Link className="item-delete" to="#" title="delete"><i className="material-icons">delete_forever</i></Link>
        </div>
    </div>
)

export default CartDropdownItem