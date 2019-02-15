import React from "react";
import { connect } from "react-redux";
import { fetchUserSchedules } from "../actions";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUserSchedules();
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
            return this.props.schedule.map(schedule => {
                return <div key={schedule._id}>{schedule.title}</div>;
            });
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

function mapStateToProps(state) {
    return {
        schedule: Object.values(state.schedule)
    };
}

export default connect(
    mapStateToProps,
    { fetchUserSchedules }
)(Dashboard);
