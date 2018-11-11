import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import classes from "./App.module.css";
import Page from "./containers/Page/Page";
import Menu from "./components/menu/menu";
import ReactGA from "react-ga";
ReactGA.initialize("XXXXXXXX");

class App extends Component {
  routesArr = [
    {
      name: "Me",
      path: "/home",
      redirect: "/",
      component: () => (
        <Page menuPositionHandler={this.menuPositionHandler.bind(this)} />
      )
    },
    {
      name: "Code",
      path: "/code",
      component: () => (
        <Page menuPositionHandler={this.menuPositionHandler.bind(this)} />
      )
    },
    {
      name: "Vfx",
      path: "/vfx",
      component: () => (
        <Page menuPositionHandler={this.menuPositionHandler.bind(this)} />
      )
    }
  ];

  routes = this.routesArr.map((route, i) => {
    const r = (
      <Route
        key={`${route.name}-${i}`}
        path={route.path}
        exact
        component={route.component}
      />
    );
    const redirect = route.redirect ? (
      <Route exact path={route.redirect}>
        <Redirect to={route.path} />
      </Route>
    ) : null;

    return route.redirect ? [r, redirect] : r;
  });

  menuPositionHandler = headerRef => {
    window.addEventListener(
      "scroll",
      event => {
        if (window.innerWidth > 1020 && headerRef) {
          if (headerRef.scrollHeight <= window.scrollY) {
            document.querySelector("#main-menu").classList.add("menu-is-fixed");
          }
          if (headerRef.scrollHeight > window.scrollY) {
            document
              .querySelector("#main-menu")
              .classList.remove("menu-is-fixed");
          }
        }
      },
      false
    );
  };

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Switch>{this.routes}</Switch>
          <Menu btns={this.routesArr} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
