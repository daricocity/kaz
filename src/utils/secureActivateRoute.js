import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const SecureActivateRoute = ({ component: Component, authentication, users, ...otherProps }) => (
    <Route {...otherProps}
        render={(props) =>
            authentication.validToken === true &&  authentication.user.has_paid_activation === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/user/dashboard" />
            )
        }
    />
);

SecureActivateRoute.propTypes = {
    users: PropTypes.object.isRequired,
    authentication: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    users: state.users,
    authentication: state.authentication,
});

export default connect(mapStateToProps)(SecureActivateRoute);