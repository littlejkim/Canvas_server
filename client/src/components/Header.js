import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google" className="item">
                        Log in
                    </a>
                );
            default:
                return (
                    <a href="/api/logout" className="item">
                        Log out
                    </a>
                );
        }
    }
    render() {
        return (
            <div className="ui massive text menu">
                <a href="/">
                    <div className="item">
                        <img src={require("../assets/images/logo.png")} />
                    </div>
                </a>

                <div className="ui right item">{this.renderContent()}</div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);
