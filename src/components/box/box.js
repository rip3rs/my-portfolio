import React from "react";
import classes from "./box.module.css";
import Icns from "../icns/icns";
import Medias from "./Medias/Medias";
import isArrayEmpty from "../../helpers/isArrayEmpty";
import isObjectEmpty from "../../helpers/isObjectEmpty";

const box = props => {
  let content = null;
  let title = null;
  let medias = null;
  let context = props.content.content ? <p> {props.content.content} </p> : null;
  let tools = props.content.tools ? (
    <div className={classes.toolsContainer}>
      <Icns select={props.content.tools} />
    </div>
  ) : null;

  if (props.content.title) {
    title = (
      <div className={classes.titleContainer}>
        <div className={classes.title}> {props.content.title} </div>
      </div>
    );
  }

  if (isObjectEmpty(props.content.medias)) {
    if (isArrayEmpty(props.content.medias.array)) {
      medias = (
        <Medias
          medias={props.content.medias}
          contentExist={props.content.content ? true : false}
        />
      );
    }
  }

  content =
    medias !== null || context !== null || tools !== null ? (
      <div className={classes.content}>
        {medias}
        {context}
        {tools}
      </div>
    ) : null;

  return (
    <div className={classes.box}>
      {title}
      {content}
    </div>
  );
};

export default box;

// typescript, Angular2, Knex, HapiJS, LESS, jQuery, AngularJS, Fetch, NodeJS, MySql, MongoDB, PHP, JSON, Apache, NGinx, Vagrant, NPM, Maya, Mudbox, Zbrush, Unity3D, WebOS, RPI.
