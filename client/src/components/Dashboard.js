import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import { Link } from "react-router-dom";
import { Header, Segment, Grid, Card, Icon } from "semantic-ui-react";
import history from "../history";
import { fetchUserSchedules, fetchSchedule } from "../actions";
import LoadingSpinner from "./LoadingSpinner";
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    componentDidMount() {
        this.props
            .fetchUserSchedules()
            .then(response => this.setState({ loading: false }));
    }

    renderContent() {
        if (_.isEmpty(this.props.schedule)) {
            return (
                <Segment basic>
                    <Header icon>
                        <Icon name="search icon" />
                        No skeds for this user.
                    </Header>
                    <a href="/create" className="ui primary button">
                        Add Schedule
                    </a>
                </Segment>
            );
        }

        return (
            <Grid container columns={4}>
                {this.props.schedule.map(schedule => {
                    return (
                        <Grid.Column>
                            <Card
                                onClick={
                                    () => {
                                        this.props.history.push(
                                            `/schedule/${schedule._id}`
                                        );
                                    }
                                    // implement redirect to schedule page
                                }
                            >
                                <Card.Content header={schedule.title} />
                                <Card.Content
                                    description={schedule.description}
                                />
                                <Card.Content extra>
                                    <Icon name="user" />
                                    {moment(schedule.date).fromNow()}
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    );
                })}
            </Grid>
        );
    }
    render() {
        if (this.state.loading) {
            return <LoadingSpinner />;
        }
        return (
            <Segment basic>
                <h1 style={{ marginBottom: "1em" }}>Dashboard</h1>
                {this.renderContent()}
            </Segment>
        );
    }
}

function mapStateToProps(state) {
    return {
        schedule: Object.values(state.schedule),
        auth: state.auth
    };
}

export default connect(
    mapStateToProps,
    { fetchUserSchedules, fetchSchedule }
)(Dashboard);
