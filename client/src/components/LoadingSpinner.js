import React from "react";
import { Segment } from "semantic-ui-react";
const LoadingSpinner = () => {
    return (
        <Segment basic>
            <div className="ui active elastic inverted dimmer">
                <div className="ui huge text loader">Loading</div>
            </div>
        </Segment>
    );
};

export default LoadingSpinner;
