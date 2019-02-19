import React, { Component } from "react";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // PROCEED TO NEXT STEP

  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1
    });
  };

  // GO TO PREVIOUS STEP

  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1
    });
  };

  // HANDLE FIELDS CHANGE

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, occupation, city, bio } = this.state;
    const values = { firstName, lastName, occupation, city, bio };

    // return(

    // )

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>FormPersonalDetails</h1>;
      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>Success</h1>;
    }
  }
}
