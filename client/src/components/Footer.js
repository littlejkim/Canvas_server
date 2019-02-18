import React from "react";
class Footer extends React.Component {
    render() {
        return (
            <div className="ui center aligned container">
                <div className="ui section divider" />

                <div className="ui horizontal small link list">
                    <a href="https://www.facebook.com/littlejkim">
                        <button className="ui circular facebook icon button">
                            <i className="facebook icon" />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/littlejkim/">
                        <button className="ui circular linkedin icon button">
                            <i className="linkedin icon" />
                        </button>
                    </a>
                    <a href="https://github.com/littlejkim/">
                        <button className="ui circular github icon button">
                            <i className="github icon" />
                        </button>
                    </a>
                    <a href="mailto: yzk5147@gmail.com">
                        <button className="ui circular google plus g icon button">
                            <i className="google plus g icon" />
                        </button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;
