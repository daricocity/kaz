import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { placeOrder } from '../../actions/order.actions';
import { selectCartItems, selectCartTotal } from '../../selectors/cartSelector';

const OrderItem = ({total, cartItems, placeOrder}) => {
    const orderItemToPlace = {total, cartItems};
    return(
        <div className="your-order">
            <h3>Your order</h3>
            <div className="your-order-table table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="cart-product-name">Product</th>
                            <th className="cart-product-total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.length ? (
                            cartItems.map(cartItem => (
                                <tr className="cart_item" key={cartItem.id}>
                                    <td className="cart-product-name">{cartItem.title}<strong className="product-quantity"> × {cartItem.quantity}</strong></td>
                                    <td className="cart-product-total"><span className="amount">&#8358;{cartItem.regular_price*cartItem.quantity}</span></td>  
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <span className='empty-message' style={{fontSize:'15px',}}>Your order is Empty</span>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td><span className="amount">&#8358;{total}</span></td>
                        </tr>
                        <tr className="order-total">
                            <th>Order Total</th>
                            <td><strong><span className="amount">&#8358;{total}</span></strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="payment-method">
                <div className="payment-accordion">
                    <div id="accordion">
                        <div className="card">
                            <div id="#payment-1" className="card-header">
                                <h5 className="panel-title">
                                    <Link aria-controls="collapseOne" aria-expanded="true" data-target="#collapseOne" data-toggle="collapse" className="">
                                        Direct Bank Transfer.
                                    </Link>
                                </h5>
                            </div>
                            <div data-parent="#accordion" className="collapse show" id="collapseOne">
                                <div className="card-body">
                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div id="#payment-2" className="card-header">
                                <h5 className="panel-title">
                                <Link aria-controls="collapseTwo" aria-expanded="false" data-target="#collapseTwo" data-toggle="collapse" className="collapsed">
                                    Cheque Payment
                                </Link>
                                </h5>
                            </div>
                            <div data-parent="#accordion" className="collapse" id="collapseTwo">
                                <div className="card-body">
                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div id="#payment-3" className="card-header">
                                <h5 className="panel-title">
                                    <Link aria-controls="collapseThree" aria-expanded="false" data-target="#collapseThree" data-toggle="collapse" className="collapsed">
                                        Master Card
                                    </Link>
                                </h5>
                            </div>
                            <div data-parent="#accordion" className="collapse" id="collapseThree">
                                <div className="card-body">
                                    <p>Make your payment by master card. We support many card. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account. <br/> <img src="/assets/img/payment-logo.png" alt="payment-logo"/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-button-payment">
                        <button onClick={() => placeOrder(orderItemToPlace)}>Place order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

OrderItem.propTypes = {
    total: PropTypes.number.isRequired,
    cartItems: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    placeOrder: cartItems => dispatch(placeOrder(cartItems))
})

const mapStateToProps = state => ({
    total: selectCartTotal(state),
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);