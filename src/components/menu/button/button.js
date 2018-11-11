import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./button.module.css";

const button = props => (
  <NavLink
    className={classes.container}
    activeClassName={classes.active}
    to={props.path}
  >
    {props.name}
  </NavLink>
);

export default button;
