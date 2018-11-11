import React from "react";
import classes from "./header.module.css";
import Image from "./banner/image/image";
import Video from "./banner/video/video";
import Logo from "./logo/logo";

const header = props => {
  const logo = props.type === 'home' ? <Logo /> : null;
  let banner = null;

  if (props.banner) {
    switch (props.banner.type) {
      case 'image': banner = <Image config={props.banner} />; break;
      case 'video': banner = <Video src={props.banner.path} />; break;
      default: banner = null; break;
    }
  }

  return (
    <header className={classes.header}>
      {banner}
      {logo}
    </header>
  );
};

export default header;
