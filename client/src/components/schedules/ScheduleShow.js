import React from "react";

class ScheduleShow extends React.Component {
    constructor(props) {
        super(props);
        const { id } = props.match.params;
        console.log(id);
    }
    render() {
        return <div>ScheduleShow</div>;
    }
}

export default ScheduleShow;
