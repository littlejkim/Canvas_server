import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div>
                        <a href="/auth/google" className="item">
                            Log in
                        </a>
                    </div>
                );
            default:
                return (
                    <a href="/api/logout" className="item">
                        Log out
                    </a>
                );
        }
    }

    renderProfile() {
        if (!this.props.auth) {
            return <i className="user circular bordered icon" />;
        }
        return (
            <img
                className="ui bordered avatar image"
                src={this.props.auth.photo}
                alt={this.props.auth.name}
            />
        );
    }

    render() {
        return (
            <div className="ui massive text menu">
                <Link to={this.props.auth ? "/" : "/"}>
                    <div style={{ marginRight: "1.5em" }} className="item">
                        <img
                            src={require("../assets/images/logo.png")}
                            alt="logo"
                        />
                    </div>
                </Link>
                <a className="active item">Home</a>
                <a className="item">Dashboard</a>

                <div className="ui right item">
                    {this.renderProfile()}
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);
