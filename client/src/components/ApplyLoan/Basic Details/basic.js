import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Loan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
    };
  }

  handleChange = (event) => {
    this.setSate({ username: event.target.value });
  };

  render() {
    return (
      <>
        <Card>
          <Card.Header>
            <h3>Loan Applicant Details</h3>
          </Card.Header>
          <Card.Body>
            <form>
            <p className="forgot-password text-right">
                All fields are required
              </p>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter first name"
                  name="fname"
                //   value={this.state.username}
                //   onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Middle Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter middle name"
                  name="mname"
                //   value={this.state.username}
                //   onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter last name"
                  name="lname"
                //   value={this.state.username}
                //   onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-group">
                <label>ID Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter ID number"
                  name="idno"
                //   value={this.state.username}
                //   onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label>Date of birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="idno"
                //   value={this.state.username}
                //   onChange={(e) => this.handleChange(e)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={(e) => this.onSubmit(e)}
              >
                Submit
              </button>
            </form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default Loan;
