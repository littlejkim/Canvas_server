import React from "react";
import { connect } from "react-redux";

class ScheduleCreate extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ marginBottom: "1em" }}>Create Event</h1>
                <div className="ui raised text segment">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title of event"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(ScheduleCreate);
