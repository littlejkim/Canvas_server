import React from "react";

const LoadingSpinner = () => {
    return (
        <div className="ui segment">
            <div className="ui active inverted dimmer">
                <div className="ui huge text loader">Loading</div>
            </div>
            <p />
        </div>
    );
};

export default LoadingSpinner;
