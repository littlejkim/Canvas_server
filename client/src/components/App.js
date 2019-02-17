import React from "react";
import { Link, Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import ScheduleCreate from "./schedules/ScheduleCreate";
import ScheduleShow from "./schedules/ScheduleShow";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import history from "../history";
const noExistingLink = () => {
    return <Redirect to="/" />;
};
class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div style={{ height: "100%" }} className="ui container">
                <Router history={history}>
                    <div
                        style={{
                            minHeight: "100%",
                            display: "grid",
                            gridTemplateRows: "auto 1fr auto",
                            gridTemplateColumns: "100%"
                        }}
                    >
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <ProtectedRoute
                                exact
                                path="/dashboard"
                                component={Dashboard}
                            />
                            <ProtectedRoute
                                exact
                                path="/create"
                                component={ScheduleCreate}
                            />
                            <ProtectedRoute
                                exact
                                path="/profile"
                                component={Profile}
                            />
                            <ProtectedRoute
                                exact
                                path="/schedule/:id"
                                component={ScheduleShow}
                            />
                            <Route component={noExistingLink} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(App);
