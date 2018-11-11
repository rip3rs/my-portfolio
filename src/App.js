import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import classes from "./App.module.css";

import Page from "./containers/Page/Page";

import Menu from "./components/menu/menu";

const app = props => {
  const routesArr = [
    {
      name: "Me",
      path: "/home",
      redirect: "/",
      component: () => <Page />
    },
    {
      name: "Code",
      path: "/code",
      component: () => <Page />
    },
    {
      name: "Vfx",
      path: "/vfx",
      component: () => <Page />
    }
  ];

  const routes = routesArr.map((route, i) => {
    const r = <Route key={`${route.name}-${i}`} path={route.path} exact component={route.component} />;
    const redirect = route.redirect ? <Route exact path={route.redirect}><Redirect to={route.path} /></Route> : null;

    return route.redirect ? [r, redirect] : r;
  });

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Switch>
          {routes}
        </Switch>
        <Menu btns={routesArr} />
      </div>
    </BrowserRouter>
  );

}

export default app;
