import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormContext from "./formContext";
const useStyles = makeStyles((theme) => ({
  TextField: {
    marginRight: "5%",
    marginTop: "5%",
  },
  ArabicTextField: {
    marginTop: "5%",
    marginRight: "5%",
    textAlign: "right",
  },
}));

export default function Personal1() {
  const classes = useStyles();
  const { setForm1Data, form1Data } = React.useContext(FormContext);

  return (
    <Grid container spacing={0} alignItems="center" justify="center">
      <TextField
        required
        onChange={(e) =>
          setForm1Data({ ...form1Data, ArabicThirdName: e.target.value })
        }
        value={form1Data.ArabicThirdName}
        dir="rtl"
        placeholder="الاسم الثالث"
        label="الاسم الثالث"
        className={classes.ArabicTextField}
        variant="outlined"
        color="secondary"
      />
      <TextField
        required
        onChange={(e) =>
          setForm1Data({ ...form1Data, ArabicSecondName: e.target.value })
        }
        value={form1Data.ArabicSecondName}
        dir="rtl"
        placeholder="الاسم الثاني"
        label="الاسم الثاني"
        className={classes.ArabicTextField}
        variant="outlined"
        color="secondary"
      />
      <TextField
        required
        onChange={(e) =>
          setForm1Data({ ...form1Data, ArabicFirstName: e.target.value })
        }
        value={form1Data.ArabicFirstName}
        dir="rtl"
        placeholder="الاسم الاول"
        label="الاسم الاول"
        className={classes.ArabicTextField}
        variant="outlined"
        color="secondary"
      />

      <TextField
        required
        onChange={(e) =>
          setForm1Data({ ...form1Data, FirstName: e.target.value })
        }
        value={form1Data.FirstName}
        className={classes.TextField}
        label="first Name"
        margin="normal"
        variant="outlined"
        color="secondary"
      ></TextField>
      <TextField
        required
        onChange={(e) =>
          setForm1Data({ ...form1Data, SecondName: e.target.value })
        }
        value={form1Data.SecondName}
        className={classes.TextField}
        label="Second Name"
        margin="normal"
        variant="outlined"
        color="secondary"
      ></TextField>
      <TextField
        required
        onChange={(e) =>
          setForm1Data({ ...form1Data, ThirdName: e.target.value })
        }
        value={form1Data.ThirdName}
        className={classes.TextField}
        label="Third Name"
        margin="normal"
        variant="outlined"
        color="secondary"
      ></TextField>
    </Grid>
  );
}
