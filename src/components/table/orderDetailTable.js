import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import TablePaginationActions from '../../utils/pagination';
import TablePagination from '@material-ui/core/TablePagination';

const PaginationActionsTable = (props) => {
    
    const { tableHead, tableData, paginateColSpan, all_product } = props;

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
                                        <td>{ind+1}</td>
                                        {all_product !== null && all_product !== undefined && all_product.filter(pro => pro.id === row.product).map((proCat, ind) => (
                                            <td key={ind}> {proCat.title}</td>
                                        ))}
                                        {all_product !== null && all_product !== undefined && all_product.filter(pro => pro.id === row.product).map((proCat, ind) => (
                                            <td key={ind}>&#8358;{proCat.regular_price}</td>
                                        ))}
                                        <td>{row.quantity}</td>
                                        <td>&#8358;{row.line_total}</td>
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

export default PaginationActionsTable;