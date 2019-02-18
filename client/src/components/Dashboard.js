import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import "react-dates/initialize";

import LoadingSpinner from "./LoadingSpinner";
import { fetchUserSchedules, fetchSchedule } from "../actions";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    componentDidMount() {
        this.props
            .fetchUserSchedules()
            .then(response => this.setState({ loading: false }));
    }

    renderContent() {
        if (_.isEmpty(this.props.schedule)) {
            return (
                <div className="ui placeholder segment">
                    <div className="ui icon header">
                        <i className="search icon" />
                        No skeds are listed for this user.
                    </div>
                    <a href="/create" className="ui primary button">
                        Add Schedule
                    </a>
                </div>
            );
        }

        return (
            <div className="ui three stackable cards">
                <a
                    href="/create"
                    style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    className="ui raised card"
                >
                    <div className="item">
                        <img
                            className="ui tiny image"
                            src={require("../assets/images/plus-icon.png")}
                        />
                    </div>
                </a>
                {this.props.schedule.map(schedule => {
                    return (
                        <a
                            className="ui raised card"
                            onClick={() => {
                                this.props.history.push(
                                    `/schedule/${schedule._id}`
                                );
                            }}
                        >
                            <div className="content">
                                <div className="header">{schedule.title}</div>
                                <div className="description">
                                    <p>{schedule.description}</p>
                                </div>
                                <div className="meta">
                                    <span className="right floated time">
                                        {moment(schedule.date).fromNow()}
                                    </span>
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="right floated author">
                                    <img
                                        alt={
                                            this.props.auth
                                                ? this.props.name
                                                : null
                                        }
                                        className="ui avatar image"
                                        src={
                                            this.props.auth
                                                ? this.props.auth.photo
                                                : null
                                        }
                                    />
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        );
    }
    render() {
        if (this.state.loading) {
            return <LoadingSpinner />;
        }
        return (
            <div>
                <h1 style={{ marginBottom: "1em" }}>Dashboard</h1>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        schedule: Object.values(state.schedule),
        auth: state.auth
    };
}

export default connect(
    mapStateToProps,
    { fetchUserSchedules, fetchSchedule }
)(Dashboard);
