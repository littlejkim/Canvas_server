import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";
class ScheduleCreate extends React.Component {
    componentWillMount() {
        if (!this.props.auth) {
            console.log("Unauthorized user re-routed to landing page");
            return <Redirect to="/" />;
        }
    }
    render() {
        return <div>Create Schedule</div>;
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(ScheduleCreate);
