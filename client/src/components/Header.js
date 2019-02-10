import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="ui large fixed menu">
                <div className="ui container">
                    <a className="header item">
                        <img className="logo" src="images/logo.png" />
                    </a>
                    <div className="right menu">
                        <a href="/auth/google" className="item">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
