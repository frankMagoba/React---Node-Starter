import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { classes } from "../Dashboard/themer";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import LibraryBooksTwoToneIcon from "@material-ui/icons/LibraryBooksTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Applicant Details", "Loan Details", "Guarantor Details"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <AppBar position="relative">
            <Toolbar>
              <LibraryBooksTwoToneIcon className={classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                Loans
              </Typography>{" "}
              {""}
              <MeetingRoomTwoToneIcon className={classes.icons} />
              <Typography variant="h6" color="inherit" noWrap>
                <a href="/sign-in">Logout</a>
              </Typography>
            </Toolbar>
          </AppBar>
          <form>
            <p className="forgot-password text-right">
              All fields are required
            </p>
            <div className="container-fluid row mt-4">
              <div className="form-group col-4">
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
              <div className="form-group col-4">
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
              <div className="form-group col-4">
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
            </div>
            <div className="container-fluid row mt-4">
              <div className="form-group col-6">
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
              <div className="form-group col-6">
                <label>Date of birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="idno"
                  //   value={this.state.username}
                  //   onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
          </form>
        </>
      );
    case 1:
      return (
        <>
          <form>
            <p className="forgot-password text-right">
              All fields are required
            </p>
            <div className="container-fluid row mt-4">
              {" "}
              <div className="form-group col-6">
                <label>Date of Application</label>
                <input
                  type="date"
                  className="form-control"
                  name="idno"
                  //   value={this.state.username}
                  //   onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="form-group col-6">
                <label>Amount</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter loan amount"
                  name="idno"
                  //   value={this.state.username}
                  //   onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
          </form>
        </>
      );
    case 2:
      return (
        <>
          <form>
            <p className="forgot-password text-right">
              All fields are required
            </p>
            <div className="container-fluid row mt-4">
              {" "}
              <div className="form-group col-4">
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
              <div className="form-group col-4">
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
            <div className="form-group col-4">
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
            </div>
            <div className="container-fluid row mt-4">
            <div className="form-group col-4">
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
            <div className="form-group col-4">
              <label>Date of birth</label>
              <input
                type="date"
                className="form-control"
                name="idno"
                //   value={this.state.username}
                //   onChange={(e) => this.handleChange(e)}
              />
            </div>

            <div className="form-group col-4">
              <label>Relationship</label>
              <input
                type="text"
                className="form-control"
                name="idno"
                //   value={this.state.username}
                //   onChange={(e) => this.handleChange(e)}
              />
            </div>
            </div>
          </form>
        </>
      );
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Apply Loan" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
