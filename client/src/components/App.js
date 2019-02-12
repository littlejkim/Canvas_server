import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import ScheduleCreate from "./schedules/ScheduleCreate";
const Dashboard = () => <h2 style={{ textAlign: "center" }}>Dashboard</h2>;

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route
                            exact
                            path="/create"
                            component={ScheduleCreate}
                        />
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(App);
