import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div
                style={{ bottom: "20px", position: "fixed" }}
                className="ui vertical footer segment"
            >
                <div className="ui center aligned container">
                    <div className="ui stackable divided grid">
                        <div className="three wide column">
                            <h4 className="ui header">About</h4>
                            <div className="ui link list">
                                <a className="item">Sitemap</a>
                                <a className="item">Contact Us</a>
                                <a className="item">Plans</a>
                                <a className="item">Introduction</a>
                            </div>
                        </div>
                        <div className="three wide column">
                            <h4 className="ui header">Services</h4>
                            <div className="ui link list">
                                <a className="item">Sitemap</a>
                                <a className="item">Contact Us</a>
                                <a className="item">Plans</a>
                                <a className="item">Introduction</a>
                            </div>
                        </div>
                        <div className="seven wide column">
                            <h4 className="ui header">More information</h4>
                            <div className="ui link list">
                                <label className="item">Sitemap</label>
                                <a className="item">Contact Us</a>
                                <a className="item">Plans</a>
                                <a className="item">Introduction</a>
                            </div>
                        </div>
                    </div>
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
            </div>
        );
    }
}

export default Footer;
