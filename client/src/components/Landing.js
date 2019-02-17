import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Landing extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a
                        href="/auth/google"
                        className="ui huge yellow animated button"
                    >
                        <div className="visible content">
                            Get Started with Google
                        </div>
                        <div className="hidden content">
                            <i className="right arrow icon" />
                        </div>
                    </a>
                );
            default:
                return (
                    <Link
                        to="/create"
                        className="ui huge yellow animated button"
                    >
                        <div className="visible content">Create Schedule</div>
                        <div className="hidden content">
                            <i className="right arrow icon" />
                        </div>
                    </Link>
                );
        }
    }
    render() {
        return (
            <div className="ui text center aligned container">
                <h1
                    style={{
                        marginTop: "3em",

                        fontSize: "4em"
                    }}
                    className="ui header"
                >
                    Sked.
                </h1>
                <h2>Do whatever</h2>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Landing);
