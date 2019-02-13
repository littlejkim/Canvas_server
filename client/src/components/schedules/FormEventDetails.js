import React from "react";

class FormEventDetails extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui image header">
                        <div
                            style={{ marginBottom: "20px" }}
                            className="content"
                        >
                            Enter Event Details
                        </div>
                    </h2>
                    <form className="ui form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="folder icon" />
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        autoComplete="off"
                                        autoCapitalize="off"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="globe icon" />
                                    <input
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        autoComplete="off"
                                        autoCapitalize="off"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div
                                onClick={this.continue}
                                className="ui primary button"
                            >
                                Continue
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormEventDetails;
