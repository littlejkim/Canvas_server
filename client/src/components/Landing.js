import React from "react";
import { connect } from "react-redux";

class Landing extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google" className="ui huge yellow button">
                        Get Started with Google
                        <i className="right arrow icon" />
                    </a>
                );
            default:
                return (
                    <a href="/create" className="ui huge yellow button">
                        Create Schedule
                        <i className="right arrow icon" />
                    </a>
                );
        }
    }
    render() {
        return (
            <div className="ui text center aligned container">
                <h1
                    style={{
                        marginTop: "3em",
                        marginBottom: "0em",
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
