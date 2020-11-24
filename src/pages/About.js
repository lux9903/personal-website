import React from "react";
import { Link } from "react-router-dom";
import Lyn from "../assets/lyn.jpg";
import { makeStyles } from "@material-ui/core/styles";
import ProgressiveImage from "react-progressive-image";
import "../styles/About.css";
import { BLUE, YELLOW, LIGHT_PINK, DARK_PINK } from "../constants";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

const About = () => {
  const useStyles = makeStyles((theme) => ({
    aboutGrid: {
      textAlign: "left",
      maxWidth: "80rem",
      [theme.breakpoints.up("sm")]: {
        padding: "20rem 0px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "8rem 4.5rem 3rem",
        minHeight: "calc(100vh - 3.5rem)",
      },
    },
    image: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        justifyContent: "left",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "2rem 0px 3rem 0px",
        justifyContent: "center",
      },
    },
  }));

  const classes = useStyles();
  const { aboutGrid, image } = classes;

  return (
    <div className="about-container">
      <Grid className={aboutGrid} container>
        <Grid item sm={12} md={4} className={image}>
          <ProgressiveImage src={Lyn} placeholder="lyn image">
            {(src, loading) => (
              <img style={{ opacity: loading ? 0.8 : 1 }} src={src} alt="lyn" />
            )}
          </ProgressiveImage>
        </Grid>
        <Grid item sm={12} md={8}>
          <Fade in timeout={{ enter: 1200 }}>
            <div>
              <p>
                Hi, Su Lyn here ~
                <br />
                <br />
                I'm a final year student from KL, Malaysia, currently studying
                Computing and Software Systems at University of Melbourne. My
                interests lie in anything tech - especially UI/UX design and
                FinTech.
                <br />
                <br />
                During my free time, I like to explore architectural spaces,
                obsessively learn facts about films and watch historical dramas
                on Netflix.
                <br />
                <br />
                Feel free to browse my past{" "}
                <Link
                  to={"/projects"}
                  style={{ color: DARK_PINK }}
                  className="internal-link"
                >
                  works
                </Link>{" "}
                or{" "}
                <Link
                  to={"/contact"}
                  style={{ color: BLUE }}
                  className="internal-link"
                >
                  reach out
                </Link>
                !
              </p>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
