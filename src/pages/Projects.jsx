// referenced from https://www.blog.karenying.com/posts/adding-transitions-to-a-react-carousel-with-material-ui
import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { OFF_WHITE, ORANGE, SLIDE_INFO } from "../constants";
import Card from "@material-ui/core/Card";
import { FaChevronLeft, FaChevronRight, FaCode } from "react-icons/fa";
import "../styles/Projects.css";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { HiExternalLink } from "react-icons/hi";

const Arrow = (props) => {
  const { direction, clickFunction } = props;
  const icon =
    direction === "left" ? (
      <FaChevronLeft
        style={{ color: "white", fontSize: "35px", cursor: "pointer" }}
      />
    ) : (
      <FaChevronRight
        style={{ color: "white", fontSize: "35px", cursor: "pointer" }}
      />
    );

  return <div onClick={clickFunction}>{icon}</div>;
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const { name, image, type, stack, website, description, repo } = content;
  const numSlides = SLIDE_INFO.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  const useStyles = makeStyles(() => ({
    projectCard: {
      backgroundColor: OFF_WHITE,
      borderRadius: "5%",
      padding: "10px",
      margin: "0px 25px",
      boxShadow: "20px 20px 20px grey",
      display: "flex",
      justifyContent: "center",
      width: "55rem",
      height: "23rem",
    },
    root: {
      padding: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "6rem",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Arrow direction="left" clickFunction={() => onArrowClick("left")} />
      <Slide in={slideIn} direction={slideDirection}>
        <div>
          <Card className={classes.projectCard}>
            <Grid item xs={12} sm={12} md={6}>
              <img src={image} alt="project" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <h2>{name}</h2>
              <h4>{type}</h4>
              <h5 style={{ color: ORANGE }}>{stack}</h5>
              <p style={{ color: "black", lineHeight: "28px" }}>
                {description}
              </p>
              <Grid container>
                <Grid item sm={12} md={12}>
                  <div className="buttons">
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<HiExternalLink />}
                        style={{ marginRight: "20px" }}
                      >
                        Website
                      </Button>
                    </a>

                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained" startIcon={<FaCode />}>
                        Code
                      </Button>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
      </Slide>
      <Arrow direction="right" clickFunction={() => onArrowClick("right")} />
    </div>
  );
};

export default Projects;
