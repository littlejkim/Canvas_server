import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div
                style={{ marginBottom: "30px" }}
                className="ui center aligned container"
            >
                <div className="ui section divider" />
                <img
                    className="ui centered mini image"
                    src={require("../assets/images/logo.png")}
                    alt="logo"
                />
                <div className="ui horizontal small divided link list">
                    <a className="item">Sitemap</a>
                    <a className="item">Contact Us</a>
                    <a className="item">Plans</a>
                    <a className="item">Introduction</a>
                </div>
            </div>
        );
    }
}

export default Footer;
