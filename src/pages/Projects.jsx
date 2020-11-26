// referenced from https://www.blog.karenying.com/posts/adding-transitions-to-a-react-carousel-with-material-ui
import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { OFF_WHITE, SLIDE_INFO } from "../constants";
import Card from "@material-ui/core/Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Projects.css";
const Arrow = (props) => {
  const { direction, clickFunction } = props;
  const icon = direction === "left" ? <FaChevronLeft /> : <FaChevronRight />;

  return <div onClick={clickFunction}>{icon}</div>;
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const { backgroundColor, color, name, type, stack, site } = content;
  const numSlides = SLIDE_INFO.length;

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  };

  const useStyles = makeStyles(() => ({
    projectCard: {
      backgroundColor: OFF_WHITE,
      borderRadius: "5%",
      // padding: "20px 40px",
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
      marginTop: "10rem",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Arrow direction="left" clickFunction={() => onArrowClick("left")} />
      <Card className={classes.projectCard}>
        <h2>{name}</h2>
      </Card>
      <Arrow direction="right" clickFunction={() => onArrowClick("right")} />
    </div>
  );
};

export default Projects;
