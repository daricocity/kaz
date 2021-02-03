import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import PaginationActionsTable from '../../../components/table/largeTable';
import { getTransactions, getWallet } from '../../../actions/wallet.actions';

const TransactionView = () => {

    document.title = 'Transaction History';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTransactions());
        dispatch(getWallet());
        // window.location.reload();
    }, [dispatch]);

    const { transactions, user_wallet } = useSelector(state => state.wallet)
    const Transactions = transactions !== null && transactions !== undefined && transactions

    const money = Transactions.map(amounts => (parseFloat(amounts.amount)))
    const totalSent = money !== null && money !== undefined && money.filter(n => n < 0).reduce((a,b) => a + b, 0)
    const totalRecieved = money !== null && money !== undefined && money.filter(n => n > 0).reduce((a,b) => a + b, 0)

    const Wallet = user_wallet !== null && user_wallet !== undefined && user_wallet
    const wallet = Wallet[0]
    const { current_balance, weekly_earn_bonus } = wallet !== null && wallet !== undefined && wallet

    return (
        <React.Fragment>
            <SideBar/>
            <div className="tb-content tb-style1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tb-sectin-heading tb-style1 tb-uikits-heading">
                                <div className="tb-sectin-heading-left tb-uikits-heading-2">
                                    <h2 className="tb-uikits-title">Transaction</h2>
                                    <ul className="tb-breadcamb tb-style1 tb-mp0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>
                                        <li>Transaction</li>
                                    </ul>
                                </div>
                                <div className="tb-sectin-heading-right">
                                    <div className="tb-button-group tb-style1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tb-height-b30 tb-height-lg-b30"></div>
                    <div className="row row-mt-30">
                        <div className="col-lg-6">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-body">
                                    <div className="tb-iconbox tb-style2">
                                        <div className="tb-icon tb-icon-color1 tb-radious50 tb-flex">
                                            <i className="material-icons">attach_money</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">{current_balance}</h3>
                                            <div className="tb-iconbox-sub-heading">Available Balance</div>
                                        </div>
                                        <div className="tb-progressbar-wrap tb-style1 tb-color1">
                                            <div className="tb-single-progress">
                                                <div className="tb-progressbar" data-progress-percentage="60">
                                                    <div className="tb-progressbar-in"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-body">
                                    <div className="tb-iconbox tb-style2">
                                        <div className="tb-icon tb-icon-color2 tb-radious50 tb-flex">
                                            <i className="material-icons">attach_money</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">{weekly_earn_bonus}</h3>
                                            <div className="tb-iconbox-sub-heading">Total Referal Earn this week</div>
                                        </div>
                                        <div className="tb-progressbar-wrap tb-style1 tb-color2">
                                            <div className="tb-single-progress">
                                                <div className="tb-progressbar" data-progress-percentage="60">
                                                <div className="tb-progressbar-in"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-body">
                                    <div className="tb-iconbox tb-style2">
                                        <div className="tb-icon tb-icon-color3 tb-radious50 tb-flex">
                                            <i className="material-icons">attach_money</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">{totalRecieved.toFixed(2)}</h3>
                                            <div className="tb-iconbox-sub-heading">Total Recieved</div>
                                        </div>
                                        <div className="tb-progressbar-wrap tb-style1 tb-color3">
                                            <div className="tb-single-progress">
                                                <div className="tb-progressbar" data-progress-percentage="60">
                                                <div className="tb-progressbar-in"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tb-card tb-style1">
                                <div className="tb-card-body">
                                    <div className="tb-iconbox tb-style2">
                                        <div className="tb-icon tb-icon-color4 tb-radious50 tb-flex">
                                            <i className="material-icons">attach_money</i>
                                        </div>
                                        <div className="tb-iconbox-text">
                                            <h3 className="tb-iconbox-heading">{(Math.abs(totalSent)).toFixed(2)}</h3>
                                            <div className="tb-iconbox-sub-heading">Total Sent</div>
                                        </div>
                                        <div className="tb-progressbar-wrap tb-style1 tb-color4">
                                            <div className="tb-single-progress">
                                                <div className="tb-progressbar" data-progress-percentage="60">
                                                <div className="tb-progressbar-in"></div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <h2 className="tb-card-title">Transaction List</h2>
                                    </div>
                                    {/* <div className="tb-card-heading-right">
                                        <form action="#" className="tb-search tb-style2">
                                            <input type="text" placeholder="Search..." className="tb-search-input"/>
                                            <button type="submit"><i className="material-icons">search</i></button>
                                        </form>
                                        <Link to="#" className="tb-btn tb-style1 tb-small">View All</Link>
                                    </div> */}
                                </div>
                                <PaginationActionsTable
                                    tableHead={["S/N", "Transaction Id", "Transaction Amount", "Current Balance", "Running Balance", "Depositor", "Recipient", "Transaction Date", "Reason"]}
                                    tableData={Transactions}
                                    paginateColSpan={4}
                                />
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

export default TransactionView