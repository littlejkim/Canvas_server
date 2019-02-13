import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class ProtectedRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        const isAuthenticated = this.props.auth ? true : false;
        return (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated || this.props.auth == null ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    )
                }
            />
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(
    mapStateToProps,
    { fetchUser }
)(ProtectedRoute);
