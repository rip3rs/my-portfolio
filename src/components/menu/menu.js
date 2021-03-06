import React from "react";
import classes from "./menu.module.css";

import Button from "./button/button";

const menu = props => {
  const btns = props.btns.map(btn => (
    <li key={btn.name + "_" + btn.index} className={classes.list}>
      <Button name={btn.name} path={btn.path} />
    </li>
  ));

  return (
    <ul id="main-menu" className={classes.menuContainer}>
      {btns}
    </ul>
  );
};

export default menu;
