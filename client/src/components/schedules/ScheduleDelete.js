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

    render() {
        return (
            <Modal
                title="Delete Schedule"
                content="Are you sure you want to delete this schedule?"
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
