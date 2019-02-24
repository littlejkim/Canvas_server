import React, { Component } from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSchedule } from "../../actions";

class ScheduleDelete extends Component {
    renderActions() {
        return (
            <React.Fragment>
                <button
                    onClick={() =>
                        this.props.deleteSchedule(this.props.match.params.id)
                    }
                    className="ui button negative"
                >
                    Delete
                </button>
                <Link to="/dashboard" className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return `Are you sure you want to delete the schedule with title?`;
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => this.props.history.push("/dashboard")}
            />
        );
    }
}

export default connect(
    null,
    { deleteSchedule }
)(ScheduleDelete);
