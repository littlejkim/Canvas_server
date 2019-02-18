import React from "react";
import { connect } from "react-redux";
import { createSchedule } from "../../actions";
import ScheduleForm from "./ScheduleForm";

class ScheduleCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createSchedule(formValues);
    };

    render() {
        return (
            <div className="ui text container">
                <h3>Create Schedule</h3>
                <ScheduleForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    null,
    { createSchedule }
)(ScheduleCreate);
