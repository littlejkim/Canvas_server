import React from "react";

const Dashboard = () => (
    <div>
        <h1 style={{ marginBottom: "1em" }}>Dashboard</h1>
        <div
            style={{ bottom: "0", height: "46vh" }}
            className="ui placeholder segment"
        >
            <div className="ui icon header">
                <i className="search icon" />
                No skeds are listed for this user.
            </div>
            <a href="/create" className="ui primary button">
                Add Schedule
            </a>
        </div>
    </div>
);

export default Dashboard;
