import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import "react-dates/initialize";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { fetchUserSchedules } from "../actions";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            open: false,
            selectedSchedule: null
        };
    }

    toggleDropDown = schedule => {
        if (schedule) {
            this.setState({ selectedSchedule: schedule });
        } else {
            this.setState({ selectedSchedule: null });
        }
        this.setState({ open: !this.state.open });
    };

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
                            alt="Add new schedule"
                            key="plusicon"
                            className="ui tiny image"
                            src={require("../assets/images/plus-icon.png")}
                        />
                    </div>
                </a>
                {this.props.schedule.map(schedule => {
                    return (
                        <a
                            key={schedule._id}
                            className="ui raised card"
                            onClick={() => {
                                this.props.history.push(
                                    `/schedule/${schedule._id}`
                                );
                            }}
                        >
                            <div className="content">
                                <div
                                    onClick={event => {
                                        event.stopPropagation();
                                        this.toggleDropDown(schedule._id);
                                    }}
                                    onBlur={() => {
                                        this.toggleDropDown(null);
                                    }}
                                    className="ui right floated dropdown"
                                >
                                    <i className="ellipsis vertical icon" />
                                    {this.state.open &&
                                    this.state.selectedSchedule ===
                                        schedule._id ? (
                                        <div
                                            style={{
                                                display: "block"
                                            }}
                                            className="menu"
                                        >
                                            <div className="item">
                                                <i className="edit icon" /> Edit
                                                Post
                                            </div>
                                            <div
                                                onClick={() =>
                                                    this.props.history.push(
                                                        `/schedule/delete/${
                                                            schedule._id
                                                        }`
                                                    )
                                                }
                                                className="item"
                                            >
                                                <i className="delete icon" />{" "}
                                                Remove Post
                                            </div>
                                            <div className="item">
                                                <i className="hide icon" /> Hide
                                                Post
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
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
            <div
                onClick={() => {
                    this.setState({ open: false });
                }}
            >
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
    { fetchUserSchedules }
)(Dashboard);
