import React from "react";
import classes from "./video.module.css";

const video = props => (
  <div className={classes.bannerVideo}>
    <video
      muted
      autoPlay
      loop
      playsInline
      width="auto"
      height="auto"
      src={props.src}
    />
  </div>
);

export default video;
