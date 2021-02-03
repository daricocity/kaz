import PropTypes from "prop-types";
import dateFormat from 'dateformat';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import TablePaginationActions from '../../utils/pagination';
import { deleteProduct } from '../../actions/product.action';
import TablePagination from '@material-ui/core/TablePagination';

const PaginationActionsTable = (props) => {
    
    const { tableHead, tableData, isReferral, isCategory, isProduct, all_category, url, paginateColSpan } = props;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    return(
        <div className="tb-card-body">
            {tableData.length > 0 ? (
                <React.Fragment>
                    <div className="tb-table tb-style1 tb-type1 table-responsive">
                        <table className="table">
                            {tableHead !== undefined ? (
                                <thead>
                                    <tr>
                                        {tableHead.map((prop, key) => {
                                            return(
                                                <th key={key}>{prop}</th>
                                            );
                                        })}
                                    </tr>
                                </thead>
                            ) : null}
                            <tbody>
                                {(rowsPerPage > 0
                                    ? tableData.sort((a,b) => b.id - a.id).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : tableData
                                ).map((row, ind) => (
                                    <tr key={ind}>
                                        {/* {isReferral ? (
                                            <td>{ind+1}</td>
                                        ) : (
                                            <td>{row.id}</td>
                                        )}  */}
                                        <td>{ind+1}</td>
                                        {isReferral ? (
                                            <td>{row.downline_name}</td>
                                        ) : (
                                            <td>{row.title}</td>
                                        )}

                                        {isReferral ? (
                                            <td>{row.referral_id}</td>
                                        ) : null}

                                        {isProduct ? (
                                            <td>{row.regular_price}</td>
                                        ) : null}

                                        {isCategory ? (
                                            <td>{row.description}</td>
                                        ) : null}

                                        {isProduct ? (
                                            all_category.filter(cat => cat.id === row.category.id).map(proCat => (
                                                <td>{proCat.title}</td>
                                            ))
                                        ) : null}
                                        <td>
                                            {isReferral ? (
                                                <span>{dateFormat(row.date_activated,"mmm dd, yyyy, h:MM TT")}</span>
                                            ) : (
                                                <Link 
                                                    to={`/user/${url}/${row.id}/edit`} 
                                                    style={{color:'#fff',}} 
                                                    className="tb-solial-btn social-facebook opacity-color tb-radious50"
                                                >
                                                    <i className="material-icons">edit</i>
                                                </Link>
                                            )}
                                            {isProduct ? (
                                                <Link 
                                                    to={`/user/${url}/${row.id}`}
                                                    className="tb-solial-btn social-facebook opacity-color tb-radious50"
                                                    style={{marginLeft:'10px', color:'#fff', background:'#43a047'}}
                                                >
                                                    <i className="material-icons">visibility</i>
                                                </Link>
                                            ) : null}
                                            {isProduct ? (
                                                <Link 
                                                    onClick={() => props.deleteProduct(`${row.id}`, props.history)}
                                                    className="tb-solial-btn social-facebook opacity-color tb-radious50"
                                                    style={{marginLeft:'10px', color:'#fff', background:'#f50057'}}
                                                    // to="/user/product"
                                                >
                                                    <i className="material-icons">delete</i>
                                                </Link>
                                            ) : null}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="tb-table-footer">
                        <div className="tb-table-footer-left">
                            <div className="tb-table-footer-left-text"></div>
                        </div>
                        <div className="">
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, 50, 100, 250, 500, { label: 'All', value: -1 }]}
                                colSpan={paginateColSpan}
                                count={tableData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: false,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <div style={{
                    height: "20vh",
                    width: "100%",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'transparent'
                }}>
                    <CircularProgress />
                </div>
            )}
        </div>
    );
};

PaginationActionsTable.propTypes = {
    deleteProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    deleteProduct: (id, history) => dispatch(deleteProduct(id, history)),
});

export default connect(null, mapDispatchToProps)(PaginationActionsTable);