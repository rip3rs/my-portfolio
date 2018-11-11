import React from "react";
import { Link } from "react-router-dom";

const button = props => <Link to={props.path}>{props.name}</Link>;

export default button;
