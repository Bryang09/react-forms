import React, { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1 style={{ textTransform: "capitalize" }}>
            Thank you for your submission
          </h1>
          <p style={{ textTransform: "capitalize" }}>
            You will get an email soon
          </p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
