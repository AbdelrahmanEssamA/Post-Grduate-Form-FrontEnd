import React, { useContext } from "react";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  StepContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Personal1 from "./Personal-Section1";
import Residential from "./Residential-Section.js";
import Contact from "./Contact-Section";
import RequiredFiles from "./RequiredFiles";
import FormContext from "./formContext";
import ProgressContext from "./ProgressContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "rgb(255, 251, 246)",
    fontSize: "30",
  },
  button: {
    marginTop: theme.spacing(10),
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
  return [
    "User Information",
    "Residential Information",
    "Contact Information",
    "Required Files",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Personal1 />;
    case 1:
      return <Residential />;
    case 2:
      return <Contact />;
    case 3:
      return <RequiredFiles />;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { currentStep, setCurrentStep, finalData } = useContext(FormContext);
  const { progress, setProgress } = useContext(ProgressContext);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNextSection = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep + 1);
    setProgress("progress2");
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <div>{getStepContent(index)}</div>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>
            All steps completed - you&apos;re finished with this section
          </Typography>
          <Button
            color="primary"
            onClick={handleNextSection}
            className={classes.button}
          >
            Next Section
          </Button>
        </Paper>
      )}
    </div>
  );
}
