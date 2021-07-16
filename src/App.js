import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
const BannerPage = lazy(() => import("./views/BannerPage"));
const BasicButtonPage = lazy(() => import("./views/BasicButtonPage"));
const LoadingButtonPage = lazy(() => import("./views/LoadingButtonPage"));

const App = () => (
  <Switch>
    <Route component={LoadingButtonPage} exact path="/loading-button" />
    <Route component={BasicButtonPage} exact path="/basic-button" />
    <Route component={BannerPage} exact path="/top-banner" />
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;
