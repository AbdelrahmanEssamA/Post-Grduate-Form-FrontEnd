import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  PhotoCamera: {
    margin: "auto",
  },
  Typography: {},
}));

export default function RequiredFiles() {
  const classes = useStyles();
  const [profileImage, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTg6FRpBIWpe4w9iStHT2G-LxQQo7QhxkrMg&usqp=CAU"
  );
  const [nationalID, setNationalID] = useState(
    "https://cdn.elwatannews.com/watan/840x473/9329604941555756506.jpg"
  );
  const [birthCer, setBirthCer] = useState(
    "https://www.weladelbalad.com/app/uploads/sites/13/2016/07/1469962314_692_1141349_born-e1469962394669.jpg"
  );

  const nationalIDHandler = (x) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setNationalID(reader.result);
      }
    };
    reader.readAsDataURL(x.target.files[0]);
  };

  const profilePicHandler = (url) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(url.target.files[0]);
  };

  const bCertificateHandler = (z) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBirthCer(reader.result);
      }
    };
    reader.readAsDataURL(z.target.files[0]);
  };

  return (
    <Grid container spacing={0}>
      <div className="ImgContainer">
        <Typography variant="subtitle1">Add your Image</Typography>
        <div className="imageHolder">
          <img
            src={profileImage}
            alt=""
            id="profileImg"
            className="profilePic"
          ></img>
        </div>

        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={profilePicHandler}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
      </div>
      <div className="ImgContainer">
        <Typography variant="subtitle1">Add your Birth Certificate</Typography>
        <div className="imageHolder">
          <img src={birthCer} alt="" id="birthCer" className="profilePic"></img>
        </div>

        <input
          accept="image/*"
          className={classes.input}
          id="BC-button-file"
          type="file"
          onChange={bCertificateHandler}
        />
        <label htmlFor="BC-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
      </div>
      <div className="ImgContainer">
        <Typography variant="subtitle1">Add your National ID</Typography>
        <div className="imageHolder">
          <img
            src={nationalID}
            alt=""
            id="nationalID"
            className="profilePic"
          ></img>
        </div>

        <input
          accept="image/*"
          className={classes.input}
          id="ID-button-file"
          type="file"
          onChange={nationalIDHandler}
        />
        <label htmlFor="ID-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
      </div>
    </Grid>
  );
}
