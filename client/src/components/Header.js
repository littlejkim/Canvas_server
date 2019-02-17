import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
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
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google">
                        {" "}
                        <i className="user circular bordered icon" />{" "}
                    </a>
                );
            default:
                return (
                    <Link to="/profile">
                        <img
                            className="ui avatar image"
                            src={this.props.auth.photo}
                            alt={this.props.auth.name}
                        />
                    </Link>
                );
        }
    }

    renderHeaderItems() {
        if (!this.props.auth) {
            return;
        }
        return (
            <div className="item">
                <NavLink activeClassName="active item" to="/">
                    Home
                </NavLink>
                <NavLink
                    activeClassName="active item"
                    to={"/dashboard/"}
                    className="item"
                >
                    Dashboard
                </NavLink>
            </div>
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
                {this.renderHeaderItems()}

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
