import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import {makeStyles, useTheme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

const TablePaginationActions = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
        <div className={classes.root}>
            <div className="tb-navigation tb-style1">
                <ul className="tb-social-btn-list tb-style1 tb-social-brand-color tb-mp0">
                    <li>
                        <Link 
                            to="#" 
                            className="tb-solial-btn social-facebook opacity-color tb-radious50"
                            style={{color:'#fff'}}
                            onClick={handleFirstPageButtonClick}
                            disabled={page === 0}
                            aria-label="first page"
                        >
                            {theme.direction === 'rtl' ? <i className="material-icons">last_page</i> : <i className="material-icons">first_page</i>}
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="#" 
                            style={{color:'#fff'}}
                            className="tb-solial-btn social-facebook opacity-color tb-radious50"
                            onClick={handleBackButtonClick} 
                            disabled={page === 0}
                            aria-label="previous page"
                        >
                            {theme.direction === 'rtl' ? <i className="material-icons">keyboard_arrow_right</i> : <i className="material-icons">keyboard_arrow_left</i>}
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="#" 
                            style={{color:'#fff'}}
                            className="tb-solial-btn social-facebook opacity-color tb-radious50"
                            onClick={handleNextButtonClick}
                            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                            aria-label="next page"
                        >
                            {theme.direction === 'rtl' ? <i className="material-icons">keyboard_arrow_left</i> : <i className="material-icons">keyboard_arrow_right</i>}
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="#" 
                            style={{color:'#fff'}}
                            className="tb-solial-btn social-facebook opacity-color tb-radious50"
                            onClick={handleLastPageButtonClick}
                            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                            aria-label="last page"
                        >
                            {theme.direction === 'rtl' ? <i className="material-icons">first_page</i> : <i className="material-icons">last_page</i>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
  
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

export default TablePaginationActions;