import React from "react";
import { Link, useParams } from "react-router-dom";

import "../styles/Header.css";
import { BLUE, ORANGE, OFF_WHITE, LIGHT_GREY } from "../constants";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Hidden from "@material-ui/core/Hidden";

const HeaderLink = ({ title, color, edge, selected }) => {
  const padding = edge ? "0rem" : "0.5px 10px";
  let link = title === "Hi I'm Lyn" ? "" : title;

  return (
    <div className="header-link">
      <Link
        to={`/${link}`}
        style={{ textDecoration: "none" }}
        className={selected && "header-no-link"}
      >
        <h3 style={{ color, padding: padding, textAlign: "center" }}>
          {title}
        </h3>
        {title !== "Hi I'm Lyn" && (
          <div className={selected ? "header-line-active" : "header-line"}>
            <hr style={{ color }} />
          </div>
        )}
      </Link>
    </div>
  );
};

const Header = () => {
  const page = useParams().page || "about";

  const useStyles = makeStyles((theme) => ({
    headerContent: {
      [theme.breakpoints.up("sm")]: {
        position: "fixed",
        right: 0,
        paddingRight: "5rem",
      },
    },
    headerContainer: {
      [theme.breakpoints.down("sm")]: { justifyContent: "center" },
    },
  }));

  const classes = useStyles();
  const { headerContent, headerContainer } = classes;

  return (
    <div className={`header-container ${headerContainer}`}>
      <Hidden xsDown>
        <div className="header-logo">
          <HeaderLink
            title="Hi I'm Lyn"
            color={OFF_WHITE}
            selected={page === "about"}
          />
        </div>
      </Hidden>
      <div className={`header-content ${headerContent}`}>
        <HeaderLink title="about" color={BLUE} selected={page === "about"} />
        <HeaderLink
          title="projects"
          color={ORANGE}
          selected={page === "projects"}
        />
        <HeaderLink
          title="contact"
          color={LIGHT_GREY}
          selected={page === "contact"}
        />
      </div>
    </div>
  );
};

export default Header;
