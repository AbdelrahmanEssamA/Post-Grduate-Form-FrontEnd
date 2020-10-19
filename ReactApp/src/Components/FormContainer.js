import FirstForm from "./FirstForm.js";
import FormContext from "./formContext";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProgressContext from "./ProgressContext";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import { Grid } from "@material-ui/core";
import Logo from "../images/buelogo.jpg";
const useStyles = makeStyles((theme) => ({
  Typography: {
    marginLeft: "2%",
    marginTop: "2%",
    marginBottom: "3%",
    marginRight: "2%",
  },

  heading: {
    marginTop: "3%",
    marginBottom: "5%",
    textDecoration: "underline",
    textDecorationColor: "#bf112d",
  },
  button: {
    marginTop: "3%",
    marginBottom: "3%",
    marginRight: "2%",
  },

  paper: {
    padding: "100px 200px",
    margin: "2%",
    backgroundColor: "Green",
    color: "white",
  },
}));

function getSections() {
  return ["Section1", "Section2", "Section3"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <FirstForm />;
    case 1:
      return <SecondForm />;
    case 2:
      return <ThirdForm />;

    default:
      return "Unknown step";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const { currentStep, setCurrentStep } = useContext(FormContext);
  const [progress, setProgress] = React.useState("progress1");
  const steps = getSections();

  const handleReset = () => {
    setCurrentStep(0);
    setProgress("progress1");
  };

  return (
    <div className={classes.root}>
      <Typography
        className={classes.heading}
        align="center"
        variant="h2"
        component="h2"
        gutterBottom
      >
        PostGraduate Studies Registration
      </Typography>
      <div className="ProgressBar">
        <div className="bar-outer">
          <div id={progress} className="bar-inner">
            <div className="ball"></div>
          </div>
        </div>
        <div className="bar-text">
          <span>Personal Information</span>
          <span>Academic Information</span>
          <span>Program Selection</span>
          <span>Finish</span>
        </div>
      </div>
      <div>
        {currentStep === steps.length ? (
          <div className="form-wrapper">
            <Grid container spacing={0} alignItems="center" justify="center">
              <Typography className={classes.Typography} variant="h6">
                All steps completed{" "}
              </Typography>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
              <Button
                className={classes.button}
                variant="outlined"
                color="dark"
                onClick={handleReset}
              >
                Reset
              </Button>
            </Grid>
          </div>
        ) : (
          <div className="form-wrapper">
            <img style={{ width: "14%" }} src={Logo} alt="Smiley face" />
            <ProgressContext.Provider value={{ progress, setProgress }}>
              {getStepContent(currentStep)}
            </ProgressContext.Provider>
          </div>
        )}
      </div>
    </div>
  );
}
