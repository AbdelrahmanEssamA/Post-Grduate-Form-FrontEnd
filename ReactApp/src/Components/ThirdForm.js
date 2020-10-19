import React, { useContext } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormContext from "./formContext";
import ProgressContext from "./ProgressContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  dropDown: {
    marginRight: "3%",
    marginLeft: "3%",
    marginTop: "3%",
    marginBottom: "3%",
    minWidth: "300px",
  },
  button: {
    marginRight: "4%",
  },
}));
export default function ThirdForm() {
  const onSubmit = (values) => console.log(values);

  const classes = useStyles();

  const { setCurrentStep, setForm3Data, form3Data } = useContext(FormContext);
  const { progress, setProgress } = useContext(ProgressContext);

  const handleNextSection = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep + 1);
    setProgress("progress4");
  };

  const handleBackSection = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1);
    setProgress("progress2");
  };
  return (
    <form>
      <Grid container spacing={1} alignItems="center" justify="center">
        <FormControl variant="outlined" className={classes.dropDown}>
          <InputLabel color="secondary" id="Faculty-label">
            Faculty
          </InputLabel>
          <Select
            color="secondary"
            labelId="Faculty-label"
            id="Faculty-label"
            value={form3Data.Faculty}
            onChange={(e) =>
              setForm3Data({ ...form3Data, Faculty: e.target.value })
            }
            label="Faculty"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"ICS"}>ICS</MenuItem>
            <MenuItem value={"Business"}>Business</MenuItem>
            <MenuItem value={"Political Science"}>Political Science</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.dropDown}>
          <InputLabel color="secondary" id="Program-label">
            Master's Program
          </InputLabel>
          <Select
            color="secondary"
            labelId="Program-label"
            id="Program-label"
            value={form3Data.Program}
            onChange={(e) =>
              setForm3Data({ ...form3Data, Program: e.target.value })
            }
            label="Master's Program"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.dropDown}>
          <InputLabel color="secondary" id="EntryTerm-label">
            Expected Entry Term
          </InputLabel>
          <Select
            color="secondary"
            labelId="EntryTerm-label"
            id="EntryTerm-label"
            value={form3Data.EntryTerm}
            onChange={(e) =>
              setForm3Data({ ...form3Data, EntryTerm: e.target.value })
            }
            label="Expected Entry Term"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button
          color="dark"
          onClick={handleBackSection}
          className={classes.button}
        >
          Last Section
        </Button>
        <Button
          color="primary"
          onClick={handleNextSection}
          className={classes.button}
        >
          Next Section
        </Button>
      </Grid>
    </form>
  );
}
