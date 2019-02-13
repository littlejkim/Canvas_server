import React from "react";
import { Prompt } from "react-router";

import FormEventDetails from "./FormEventDetails";
class CreateForm extends React.Component {
    state = {
        step: 1,
        title: "",
        description: "",
        location: "",
        timezone: ""
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        const { step } = this.state;
        const { title, description, location, timezone } = this.state;
        const values = { title, description, location, timezone };
        console.log(this.state);
        switch (step) {
            case 1:
                return (
                    <FormEventDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return <h1>FormDateDetails</h1>;
        }
    }
}

export default CreateForm;
