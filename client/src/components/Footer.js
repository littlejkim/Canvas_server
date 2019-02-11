import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div
                style={{ bottom: "0", position: "fixed" }}
                className="ui vertical footer segment"
            >
                <div className="ui container">
                    <div className="ui stackable inverted inverted divided equal heigh stackable grid">
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
