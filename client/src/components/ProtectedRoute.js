import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        console.log(this.props.auth);
        return (
            <Route
                {...rest}
                render={props => {
                    if (true) {
                        return <Component {...props} />;
                    } else {
                        return <Redirect to="/" />;
                    }
                }}
            />
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(ProtectedRoute);
