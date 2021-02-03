import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../../../components/private/footer';
import SideBar from '../../../components/private/sidebar';
import Settings from '../../../components/private/themeOption';
import PaginationActionsTable from '../../../components/table/largeTable';
import { getAllTransactions} from '../../../actions/wallet.actions';

const AllTransactionView = () => {

    document.title = 'Transaction History';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTransactions());
    }, [dispatch]);

    const { all_transactions } = useSelector(state => state.wallet)
    const Transactions = all_transactions !== null && all_transactions !== undefined && all_transactions

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
                                        <li>All Transactions</li>
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
                                        <h2 className="tb-card-title">Transaction List</h2>
                                    </div>
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

export default AllTransactionView