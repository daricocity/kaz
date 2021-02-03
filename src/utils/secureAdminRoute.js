import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const SecureAdminRoute = ({ component: Component, users, authentication, ...otherProps }) => (
    <Route {...otherProps}
        render={(props) =>
            authentication.validToken === true &&  authentication.user.admin === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/user/dashboard" />
            )
        }
    />
);

SecureAdminRoute.propTypes = {
    authentication: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    authentication: state.authentication,
});

export default connect(mapStateToProps)(SecureAdminRoute);

// users.user_details.is_subscribe