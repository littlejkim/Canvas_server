import React from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "react-datepicker";

import PlacesAutocomplete from "react-places-autocomplete";
import "react-datepicker/dist/react-datepicker.css";
import { ReactMultiEmail } from "react-multi-email";
import "react-multi-email/style.css";

class ScheduleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            location: "",
            emails: []
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
        console.log(this.state.emails);
        const { emails } = this.state;
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
                            <div className="field">
                                <label>Location</label>
                                <PlacesAutocomplete
                                    value={this.state.location}
                                    onChange={address =>
                                        this.setState({ location: address })
                                    }
                                >
                                    {({
                                        getInputProps,
                                        suggestions,
                                        getSuggestionItemProps,
                                        loading
                                    }) => (
                                        <div>
                                            <input
                                                {...getInputProps({
                                                    placeholder:
                                                        "Search Places ...",
                                                    className:
                                                        "location-search-input"
                                                })}
                                            />
                                            <div className="autocomplete-dropdown-container">
                                                {loading && (
                                                    <div>Loading...</div>
                                                )}
                                                {suggestions.map(suggestion => {
                                                    const className = suggestion.active
                                                        ? "suggestion-item--active"
                                                        : "suggestion-item";
                                                    // inline style for demonstration purpose
                                                    const style = suggestion.active
                                                        ? {
                                                              backgroundColor:
                                                                  "#fafafa",
                                                              cursor: "pointer"
                                                          }
                                                        : {
                                                              backgroundColor:
                                                                  "#ffffff",
                                                              cursor: "pointer"
                                                          };
                                                    return (
                                                        <div
                                                            {...getSuggestionItemProps(
                                                                suggestion,
                                                                {
                                                                    className,
                                                                    style
                                                                }
                                                            )}
                                                        >
                                                            <span>
                                                                {
                                                                    suggestion.description
                                                                }
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </PlacesAutocomplete>
                            </div>
                        </div>
                    </div>
                    <div className="ui grid">
                        <div className="ten wide column">
                            <label>Invitees</label>
                            <ReactMultiEmail
                                placeholder="Enter email(s)"
                                emails={emails}
                                onChange={_emails => {
                                    this.setState({ emails: _emails });
                                }}
                                getLabel={(email, index, removeEmail) => {
                                    return (
                                        <div data-tag key={index}>
                                            {email}
                                            <span
                                                data-tag-handle
                                                onClick={() =>
                                                    removeEmail(index)
                                                }
                                            >
                                                ×
                                            </span>
                                        </div>
                                    );
                                }}
                            />
                        </div>
                    </div>
                    <br />
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
