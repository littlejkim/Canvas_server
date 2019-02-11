import React from "react";

const Landing = () => {
    return (
        <div className="ui text center aligned container">
            <h1
                style={{
                    marginTop: "3em",
                    marginBottom: "0em",
                    fontSize: "4em"
                }}
                className="ui header"
            >
                Sked.
            </h1>
            <h2>Do whatever</h2>
            <div className="ui huge primary button">
                Get Started
                <i className="right arrow icon" />
            </div>
            <div />
        </div>
    );
};
export default Landing;
