import React, { Component } from "react";
import Box from "../../components/box/box";
import classes from "./Page.module.css";
import axios from "axios";
import Aux from "../../hoc/aux";
import Header from "../../components/header/header";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";

class Page extends Component {
  page = this.props.match.path.split("/").pop();
  state = {
    data: null
  };

  changeStateHandler = msg => {
    const state = { ...this.state };
    state.data = msg;
    this.setState(state);
  };

  componentDidMount = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    axios
      .get(`APIS/${this.page}.json`)
      .then(response => this.changeStateHandler(response.data))
      .catch(err => console.log(err));
  };

  render() {
    let ux = null;
    let header = null;

    if (this.state.data) {
      header = <Header type={this.page} banner={this.state.data.header} />;
      ux = this.state.data.content.map((content, i) => (
        <Box key={`${content.title}-${i}`} content={content} />
      ));
    }

    return (
      <Aux>
        {header}
        <div
          style={this.page === "home" ? { marginTop: "6em" } : null}
          className={classes.mainContainer}
        >
          {ux}
        </div>
      </Aux>
    );
  }
}

export default withRouter(Page);
