import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { TextField, Grid } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { getCountries } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import FormContext from "./formContext";
const useStyles = makeStyles((theme) => ({
  TextField: {
    marginRight: "3%",
    marginTop: "5%",
    marginBottom: "5%",
  },

  formControl: {
    minWidth: 100,
    marginRight: "3%",
    marginTop: "5%",
  },

  DateField: {
    marginRight: "5%",
    width: 200,
  },
}));
export default function Residential() {
  const classes = useStyles();

  const { setForm1Data, form1Data } = React.useContext(FormContext);

  return (
    <Grid container spacing={0}>
      <FormControl
        style={{ maxWidth: 130 }}
        variant="outlined"
        className={classes.formControl}
      >
        <InputLabel color="secondary" id="demo-simple-select-outlined-label">
          Country
        </InputLabel>
        <Select
          native
          value={form1Data.Country}
          onChange={(e) =>
            setForm1Data({ ...form1Data, Country: e.target.value })
          }
          label="International"
          inputProps={{
            name: "country--code",
            id: ' id="simple-select-outlined"',
          }}
        >
          <option value=""></option>
          {getCountries().map((country) => (
            <option key={country} value={country}>
              {en[country]}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel color="secondary" id="city-label">
          City
        </InputLabel>
        <Select
          color="secondary"
          labelId="city-label"
          id="city"
          value={form1Data.City}
          onChange={(e) => setForm1Data({ ...form1Data, City: e.target.value })}
          label="City"
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
        value={form1Data.Street}
        onChange={(e) => setForm1Data({ ...form1Data, Street: e.target.value })}
        className={classes.TextField}
        label="Street"
        margin="normal"
        variant="outlined"
        color="secondary"
      ></TextField>
      <TextField
        value={form1Data.Zip}
        onChange={(e) => setForm1Data({ ...form1Data, Zip: e.target.value })}
        className={classes.TextField}
        label="Zip Code"
        margin="normal"
        variant="outlined"
        color="secondary"
      ></TextField>
      <form className={classes.DateField} noValidate>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          onChange={(e) =>
            setForm1Data({ ...form1Data, birthDate: e.target.value })
          }
          value={form1Data.birthDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={form1Data.Gender}
          onChange={(e) =>
            setForm1Data({ ...form1Data, Gender: e.target.value })
          }
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
