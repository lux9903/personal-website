import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { LIGHT_ORANGE, ORANGE } from "../constants";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4, 10),
    margin: "8rem",
    textAlign: "left",
  },
  heading: {
    fontSize: "35px",
  },
  contacts: {
    fontSize: "31px",
  },
}));

const Contact = () => {
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
            <Fade in timeout={{ enter: 1100 }}>
              <div>
                <h4 className={classes.heading}>get in touch —</h4>
                <p className={classes.contacts}>
                  Connect with me on{" "}
                  <a
                    href="https://www.linkedin.com/in/su-lyn-low/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: LIGHT_ORANGE }}
                  >
                    Linkedin
                  </a>{" "}
                  🪐
                </p>
                <p className={classes.contacts}>
                  Don't hesitate to email me:{" "}
                  <a
                    href="mailto:lowsulynbsc@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: LIGHT_ORANGE }}
                  >
                    lowsulynbsc@gmail.com
                  </a>
                </p>
              </div>
            </Fade>
            <br />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Contact;
