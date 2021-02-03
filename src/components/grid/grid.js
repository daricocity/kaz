import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    grid: {
        margin: "0 -15px !important",
        width: "unset"
    },
    gridI: {
        padding: "0 15px !important"
      }
};

const useStyles = makeStyles(styles);

export const GridContainer = (props) => {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid container {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

GridContainer.propTypes = {
  children: PropTypes.node
};
  
export const GridItem = (props) => {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid item {...rest} className={classes.gridI}>
            {children}
        </Grid>
    );
}
  
GridItem.propTypes = {
    children: PropTypes.node
};