import React from "react";
import classes from "./image.module.css";

const image = props => {
  const style = {
    background: props.config.path ? `url(${props.config.path}) ${props.config.pos ? props.config.pos[0] + 'px' : 0} ${props.config.pos ? props.config.pos[1] + 'px' : 0}` : null,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div className={classes.bannerImage}>
      <div style={style} className={classes.bannerImageBgr} />
    </div>
  )
};

export default image;
