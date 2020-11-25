import React, { Fragment } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import "../styles/Error.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4, 10),
    margin: "10rem",
  },
  img: {
    maxWidth: "600px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "350px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  heading: {
    fontSize: "50px",
  },
  button: {
    textDecoration: "none !important",
  },
}));

const Error = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={12} sm={12} md={12}>
            <h4 className={classes.heading}>I have bad news for you 🪐</h4>
            <h5>
              The page you're looking for might be removed or temporarily
              unavailable.
            </h5>
            <br />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Error;
