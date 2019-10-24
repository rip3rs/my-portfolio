import React from "react";
import classes from "./image.module.css";
import { withRouter } from "react-router-dom";

const image = props => {
  let customClass = "";
  const style = {
    background: props.config.path
      ? `url(${props.config.path}) ${
          props.config.pos ? props.config.pos[0] + "px" : 0
        } ${props.config.pos ? props.config.pos[1] + "px" : 0}`
      : null,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  switch (props.match.path.split("/").pop()) {
    case "vfx":
      customClass = classes.vfx;
      break;
    case "code":
      customClass = classes.code;
      break;
    case "me":
      customClass = classes.me;
      break;

    default:
      customClass = null;
      break;
  }

  return (
    <div className={classes.bannerImage}>
      <div
        style={style}
        className={[classes.bannerImageBgr, customClass].join(" ")}
      />{" "}
    </div>
  );
};

export default withRouter(image);
