import dateFormat from 'dateformat';
import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import TablePaginationActions from '../../utils/pagination';
import TablePagination from '@material-ui/core/TablePagination';

const PaginationActionsTable = (props) => {
    const { tableHead, tableData, paginateColSpan, allUser } = props;

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
            <div>
                <div className="tb-table tb-style1 tb-type1 table-responsive">
                    <table className="table" id="large-table">
                        {tableHead !== undefined ? (
                            <thead>
                                <tr>
                                    {tableHead.map((prop, key) => {
                                        return (
                                            <th key={key}>{prop}</th>
                                        );
                                    })}
                                </tr>
                            </thead>
                        ) : null}
                        {allUser ? (
                            <tbody>
                                {(rowsPerPage > 0
                                    ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : tableData
                                ).map((row, ind) => (
                                    <tr key={ind}>
                                        <td> {ind+1} </td>
                                        <td> {row.username} </td>
                                        {row.full_name ? (
                                            <td > {row.full_name} </td>
                                        ) : (
                                            <td> ---- </td>
                                        )}
                                        {row.phone_number ? (
                                            <td> {row.phone_number} </td>
                                        ) : (
                                            <td> ---- </td>
                                        )}
                                        {row.bank_account_name ? (
                                            <td> {row.bank_account_name} </td>
                                        ) : (
                                            <td> ---- </td>
                                        )}
                                        {row.bank_account_number ? (
                                            <td> {row.bank_account_number} </td>
                                        ) : (
                                            <td> ---- </td>
                                        )}
                                        {row.bank_name ? (
                                            <td> {row.bank_name} </td>
                                        ) : (
                                            <td> ---- </td>
                                        )}
                                        {row.email ? (
                                            <td> {row.email} </td>
                                        ) : (
                                            <td> ---- </td>
                                        )}
                                        {row.occupation ? (
                                            <td> {row.occupation} </td>
                                        ) : (
                                            <td> ---- </td>
                                        )}
                                        {row.address ? (
                                            <td style={{width:'600px'}}> {row.address} </td>
                                        ) : (
                                            <td> ---- </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <tbody>
                                {(rowsPerPage > 0
                                    ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : tableData
                                ).map((row, ind) => (
                                    <tr key={ind}>
                                        <td> {ind+1} </td>
                                        <td> {row.transaction_id} </td>
                                        <td> {row.amount} </td>
                                        <td> {row.current_balance} </td>
                                        <td> {row.running_balance} </td>
                                        {row.depositor ? (
                                            <td> {row.depositor} </td>
                                        ) : (
                                            <td> ---- </td>
                                        )}
                                        {row.recipient ? (
                                            <td> {row.recipient} </td>
                                        ) : (
                                            <td> ---- </td>
                                        )}
                                        <td> {dateFormat(row.created_at,"mmm dd, yyyy, h:MM TT")} </td>
                                        <td> {row.reason} </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
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
            </div>
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

export default PaginationActionsTable;