import React from "react";
import { connect } from "react-redux";
import { fetchUserSchedules } from "../actions";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUserSchedules(this.props.auth.googleId);
    }
    renderContent() {
        if (false) {
            return (
                <div>
                    <div className="ui icon header">
                        <i className="search icon" />
                        No skeds are listed for this user.
                    </div>
                    <a href="/create" className="ui primary button">
                        Add Schedule
                    </a>
                </div>
            );
        } else {
            console.log("we're here");
        }
    }
    render() {
        return (
            <div>
                <h1 style={{ marginBottom: "1em" }}>Dashboard</h1>
                <div
                    style={{ bottom: "0", height: "46vh" }}
                    className="ui placeholder segment"
                />
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {};
};

export default connect(
    mapStateToProps,
    { fetchUserSchedules }
)(Dashboard);
