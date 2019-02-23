import React from "react";
import { connect } from "react-redux";
// import { fetchSchedule } from "../../actions";

class ScheduleShow extends React.Component {
    componentDidMount() {
        // this.props.fetchSchedule(this.props.match.params.id);
    }
    render() {
        const { id, title, description } = this.props.selectedSchedule;
        return (
            <div>
                <h1 style={{ marginBottom: "1em" }}>
                    {(id, title, description)}
                </h1>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        selectedSchedule: state.schedule[ownProps.match.params.id],
        auth: state.auth
    };
}
export default connect(
    mapStateToProps,
    {}
)(ScheduleShow);
