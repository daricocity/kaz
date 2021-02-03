import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const SecureSubRoute = ({ component: Component, users, authentication, ...otherProps }) => (
    <Route {...otherProps}
        render={(props) =>
            authentication.validToken === true &&  authentication.user.is_subscribe === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/user/dashboard" />
            )
        }
    />
);

SecureSubRoute.propTypes = {
    users: PropTypes.object.isRequired,
    authentication: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    users: state.users,
    authentication: state.authentication,
});

export default connect(mapStateToProps)(SecureSubRoute);

// users.user_details.is_subscribe