import "react-phone-number-input/style.css";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import React, { useState } from "react";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormContext from "./formContext";

const useStyles = makeStyles((theme) => ({
  PhoneField: {
    marginLeft: "2px",
    marginRight: "5%",
    marginTop: "5%",
  },
  TextField: {
    marginRight: "2%",
    marginTop: "5%",
  },

  formControl: {
    minWidth: 100,
    marginRight: "3px",

    marginTop: "5%",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const { setForm1Data, form1Data } = React.useContext(FormContext);
  return (
    <Grid container spacing={0} direction="row">
      <FormControl
        style={{ maxWidth: 190 }}
        color="secondary"
        variant="outlined"
        className={classes.formControl}
      >
        <InputLabel htmlFor="outlined-country-native-simple">
          Country Code
        </InputLabel>
        <Select
          native
          value={form1Data.CountryCode}
          onChange={(e) =>
            setForm1Data({ ...form1Data, CountryCode: e.target.value })
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
              {en[country]} +{getCountryCallingCode(country)}
            </option>
          ))}
        </Select>
      </FormControl>

      <TextField
        value={form1Data.PhoneNumber}
        onChange={(e) =>
          setForm1Data({ ...form1Data, PhoneNumber: e.target.value })
        }
        className={classes.TextField}
        label="Phone Number"
        margin="normal"
        variant="outlined"
        color="secondary"
      ></TextField>
      <TextField
        value={form1Data.PhoneNumber2}
        onChange={(e) =>
          setForm1Data({ ...form1Data, PhoneNumber2: e.target.value })
        }
        className={classes.TextField}
        label="Secondary Phone"
        margin="normal"
        variant="outlined"
        color="secondary"
      ></TextField>
      <TextField
        value={form1Data.Landline}
        onChange={(e) =>
          setForm1Data({ ...form1Data, Landline: e.target.value })
        }
        className={classes.TextField}
        label="Landline"
        margin="normal"
        variant="outlined"
        color="secondary"
      ></TextField>

      <TextField
        value={form1Data.Email}
        onChange={(e) => setForm1Data({ ...form1Data, Email: e.target.value })}
        className={classes.TextField}
        label="Email"
        margin="normal"
        variant="outlined"
        color="secondary"
      ></TextField>
      <TextField
        className={classes.TextField}
        label="Confirm Email"
        margin="normal"
        variant="outlined"
        color="secondary"
      ></TextField>
    </Grid>
  );
}
