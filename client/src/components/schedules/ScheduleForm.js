import React from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class ScheduleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        };
    }

    handleStartDateChange = date => this.setState({ startDate: date });
    handleEndDateChange = date => this.setState({ endDate: date });

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };
    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className="ui form error"
                >
                    <div className="ui grid">
                        <div className="six wide column">
                            <Field
                                name="title"
                                component={this.renderInput}
                                label="Title"
                            />
                        </div>
                        <div className="ten wide column">
                            <Field
                                name="description"
                                component={this.renderInput}
                                label="Description"
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: "10px" }} className="ui form">
                        <div className="three fields">
                            <div className="field">
                                <label>Start Date</label>

                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleStartDateChange}
                                />
                            </div>
                            <div className="field">
                                <label>End date</label>

                                <DatePicker
                                    selected={this.state.endDate}
                                    onChange={this.handleEndDateChange}
                                />
                            </div>
                        </div>
                    </div>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "must enter title";
    } else if (formValues.title.length < 5) {
        errors.title = "title too short";
    }
    if (!formValues.description) {
        errors.description = "must enter description";
    }

    return errors;
};
export default reduxForm({
    form: "scheduleForm",
    validate
})(ScheduleForm);
