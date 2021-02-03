import React, { useEffect } from 'react';
import { getUser } from '../../actions/user.actions';
import { useSelector, useDispatch } from 'react-redux';

const ChectoutForm = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.authentication)
    const authUser = user !== null && user !== undefined && user

    useEffect(() => {
        dispatch(getUser(authUser.user_id));
    }, [dispatch, authUser.user_id]);

    const { user_details } = useSelector(state => state.users)
    const user_detail = user_details !== null && user_details !== undefined && user_details

    const { email, full_name, phone_number, address } = user_detail !== null && user_detail !== undefined && user_detail

    return(
        <form action="#">
            <div className="checkbox-form">
                <h3>Billing Details</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Full Name <span className="required">*</span></label>
                            <input type="text" placeholder="Full Name" value={full_name} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Email Address <span className="required">*</span></label>
                            <input type="email" placeholder="Email" value={email} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-form-list">
                            <label>Phone  <span className="required">*</span></label>
                            <input type="text" placeholder="Phone Number" value={phone_number} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="checkout-form-list">
                            <label>Address <span className="required">*</span></label>
                            <textarea placeholder="Street address" value={address} ></textarea>
                        </div>
                    </div>
                </div>
                <div className="different-address">
                    <div className="order-notes">
                        <div className="checkout-form-list">
                            <label>Order Notes</label>
                            <textarea placeholder="Notes about your order, e.g. special notes for delivery." rows="10" cols="30" id="checkout-mess"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ChectoutForm;