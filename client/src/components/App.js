import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import CreateForm from "./schedules/CreateForm";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";

const noExistingLink = () => {
    return <Redirect to="/" />;
};
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
                                component={CreateForm}
                            />
                            <Route component={noExistingLink} />
                        </Switch>
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
