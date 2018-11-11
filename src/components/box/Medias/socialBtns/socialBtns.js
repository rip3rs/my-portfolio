// I dont like this... making less abstract will remove the entire concept of reusability...

import React from "react";
import Icns from "../../../icns/icns";
import classes from "./socialBtns.module.css";
import ReactGA from "react-ga";

const socialBtns = props => (
  <ReactGA.OutboundLink
    className={classes.socialContainer}
    eventLabel={`Clicked on: ${props.icon} page`}
    to={props.path}
    target="_blank"
  >
    <Icns select={[props.icon]} />
  </ReactGA.OutboundLink>
);

export default socialBtns;
