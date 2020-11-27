import React from "react";
import "../styles/Footer.css";
import { LIGHT_GREY, DARK_GREY, BLUE, ORANGE } from "../constants";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Hidden from "@material-ui/core/Hidden";
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    [theme.breakpoints.down("xs")]: {
      position: "static",
      padding: 0,
      paddingBottom: "1rem",
      // bottom: 0 - ensures footer stuck to bottom of screen
    },
  },
  footerContent: {
    [theme.breakpoints.down("xs")]: {
      position: "static",
      marginLeft: "auto",
      paddingRight: "1rem",
    },
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: LIGHT_GREY,
    color: DARK_GREY,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  arrow: {
    color: LIGHT_GREY,
  },
}))(Tooltip);

const Footer = () => {
  const classes = useStyles();
  const { footerContainer, footerContent } = classes;

  return (
    <div className={`footer-container ${footerContainer}`}>
      <Hidden xsDown>
        <div className="footer-copyright">
          <p style={{ marginRight: "1rem", color: ORANGE }}>©</p>
          <p style={{ marginRight: "1rem", color: LIGHT_GREY }}>
            Low Su Lyn 2020
          </p>
        </div>
      </Hidden>
      <div className={`footer-links-container ${footerContent}`}>
        <div className="footer-link">
          <LightTooltip title="Email" placement="top" arrow>
            <a
              href="mailto:lowsulynbsc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail color={LIGHT_GREY} style={{ animationDelay: "100ms" }} />
            </a>
          </LightTooltip>
        </div>
        <div className="footer-link">
          <LightTooltip title="Linkedin" placement="top" arrow>
            <a
              href="https://www.linkedin.com/in/su-lyn-low/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color={BLUE} style={{ animationDelay: "100ms" }} />
            </a>
          </LightTooltip>
        </div>
        <div className="footer-link">
          <LightTooltip title="GitHub" placement="top" arrow>
            <a
              href="https://github.com/lux9903"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color={ORANGE} style={{ animationDelay: "100ms" }} />
            </a>
          </LightTooltip>
        </div>
        <div className="footer-link">
          <LightTooltip title="Instagram" placement="top" arrow>
            <a
              href="https://www.instagram.com/sulyn_low/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                color={DARK_GREY}
                style={{ animationDelay: "100ms" }}
              />
            </a>
          </LightTooltip>
        </div>
      </div>
    </div>
  );
};

export default Footer;
