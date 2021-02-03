import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import { getAllWallets } from '../../../actions/wallet.actions';

const PayReferralView = (props) => {
    
    document.title = 'Pay Referal';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllWallets());
    }, [dispatch]);

    const { all_wallet } = useSelector(state => state.wallet);
    const referalWalletToPay = all_wallet !==null && all_wallet !== undefined && all_wallet.length > 0 && all_wallet.filter(wal => parseInt(wal.user) !== 1 && parseInt(wal.current_balance) !== 0).map((wallet, ind) => (
        <tr key={ind}>
            <td>{ind+1}</td>
            <td>{wallet.username}</td>
            <td>{wallet.current_balance}</td>
            <td> <input type="checkbox" name="userwallet" value={wallet.user}/> </td>
        </tr>
    ))

    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-sectin-heading tb-style1 tb-uikits-heading">
                                <div className="tb-sectin-heading-left tb-uikits-heading-2">
                                    <h2 className="tb-uikits-title">Pay Referral</h2>
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                        <li>Pay Referral</li>
                                    </ul>
                                </div>
                                <div className="tb-sectin-heading-right">
                                    <div className="tb-button-group tb-style1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tb-height-b30 tb-height-lg-b30"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-heading">
                                    <div className="tb-card-heading-left">
                                        <h2 className="tb-card-title">Pay Referal</h2>
                                    </div>
                                </div>
                                <div className="tb-card-body">
                                    <div className="tb-table tb-style1 tb-type1 table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr style={{fontWeight:'700'}}>
                                                    <td>S/N</td>
                                                    <td>Username</td>
                                                    <td>Wallet Balance</td>
                                                    <td>Pay</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {referalWalletToPay}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            <Settings/>
        </React.Fragment>
    );
}

export default PayReferralView
