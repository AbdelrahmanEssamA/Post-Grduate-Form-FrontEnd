import React, { useContext } from "react";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import FormContext from "./formContext";
import ProgressContext from "./ProgressContext";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },

  SmallDrop: {
    marginRight: "5%",
    minWidth: "300px",
    marginTop: "40px",
  },
  DropFormControl: {
    marginRight: "5%",

    marginTop: "40px",
    minWidth: "300px",
  },
  TextField: {
    marginRight: "5%",
    minwidth: "300px",
    marginTop: "40px",
  },

  button: {
    marginTop: "60px",
    marginRight: "50px",
  },
  input: {
    display: "none",
  },
}));

export default function SecondForm() {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  const { setCurrentStep, setForm2Data, form2Data } = useContext(FormContext);
  const { progress, setProgress } = useContext(ProgressContext);
  const formik = useFormik({
    initialValues: {
      Specialization: "",
      University: "",
    },
  });

  const handleNextSection = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep + 1);
    setProgress("progress3");
  };

  const handleBackSection = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1);
    setProgress("progress1");
  };

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <Grid Grid container spacing={0} alignItems="center" justify="center">
        <FormControl variant="outlined" className={classes.DropFormControl}>
          <InputLabel
            color="secondary"
            id="University-simple-select-outlined-label"
          >
            University
          </InputLabel>
          <Select
            required
            color="secondary"
            labelId="University-simple-select-outlined-label"
            id="University-simple-select-outlined"
            value={form2Data.University}
            onChange={(e) =>
              setForm2Data({ ...form2Data, University: e.target.value })
            }
            label="University"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          value={form2Data.Specialization}
          onChange={(e) =>
            setForm2Data({ ...form2Data, Specialization: e.target.value })
          }
          className={classes.TextField}
          label="Specialization"
          variant="outlined"
          color="secondary"
          name="email"
        ></TextField>
        <FormControl variant="outlined" className={classes.DropFormControl}>
          <InputLabel
            color="secondary"
            id="Highest-Level-Of-Education-simple-select-outlined-label"
          >
            Highest Level Of Education
          </InputLabel>
          <Select
            required
            color="secondary"
            labelId="Highest-Level-Of-Education-simple-select-outlined-label"
            id="Highest-Level-Of-Education-simple-select-outlined"
            value={form2Data.HighestLevelOfEdu}
            onChange={(e) =>
              setForm2Data({ ...form2Data, HighestLevelOfEdu: e.target.value })
            }
            label="Highest Level Of Education"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Bachelor"}>Bachelor</MenuItem>
            <MenuItem value={"Masters"}>Masters</MenuItem>
            <MenuItem value={"Doctorate"}>Doctorate</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          className={classes.TextField}
          label="Percentage"
          variant="outlined"
          color="secondary"
        ></TextField>
        <TextField
          required
          value={form2Data.Percentage}
          onChange={(e) =>
            setForm2Data({ ...form2Data, Percentage: e.target.value })
          }
          className={classes.TextField}
          label="GPA"
          variant="outlined"
          color="secondary"
        ></TextField>
        <TextField
          required
          value={form2Data.LetterGrade}
          onChange={(e) =>
            setForm2Data({ ...form2Data, LetterGrade: e.target.value })
          }
          className={classes.TextField}
          label="Letter Grade"
          variant="outlined"
          color="secondary"
        ></TextField>
        <input
          required
          className={classes.input}
          id="Transcript"
          type="file"
          value={form2Data.Transcript}
          onChange={(e) =>
            setForm2Data({ ...form2Data, Transcript: e.target.value })
          }
        />
        <label htmlFor="Transcript">
          <Button
            component="span"
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            UploadTranscript
          </Button>
        </label>
        <input
          required
          className={classes.input}
          id="BirthCer-Img"
          type="file"
          value={form2Data.Certificate}
          onChange={(e) =>
            setForm2Data({ ...form2Data, Certificate: e.target.value })
          }
        />
        <label htmlFor="BirthCer-Img">
          <Button
            component="span"
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            UploadCertificate
          </Button>
        </label>
        <Button
          color="dark"
          onClick={handleBackSection}
          className={classes.button}
        >
          Last Section
        </Button>
        <Button
          onClick={handleNextSection}
          type="submit"
          color="primary"
          className={classes.button}
        >
          Next Section
        </Button>
      </Grid>
    </form>
  );
}
