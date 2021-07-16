import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import CheckboxPage from "./views/CheckboxPage";
import Home from "./views/Home";
import IconButtonPage from "./views/IconButtonPage";
import OutlineButtonPage from "./views/OutlineButtonPage";
const BannerPage = lazy(() => import("./views/BannerPage"));
const BasicButtonPage = lazy(() => import("./views/BasicButtonPage"));
const LoadingButtonPage = lazy(() => import("./views/LoadingButtonPage"));
const MenuTogglePage = lazy(() => import("./views/MenuTogglePage"));
const PasswordInputPage = lazy(() => import("./views/PasswordInputPage"));
const TextInputPage = lazy(() => import("./views/TextInputPage"));

const App = () => (
  <Switch>
    <Route component={CheckboxPage} exact path="/checkbox" />
    <Route component={MenuTogglePage} exact path="/menu-toggle" />
    <Route component={BasicButtonPage} exact path="/basic-button" />
    <Route component={IconButtonPage} exact path="/icon-button" />
    <Route component={OutlineButtonPage} exact path="/outline-button" />
    <Route component={LoadingButtonPage} exact path="/loading-button" />
    <Route component={PasswordInputPage} exact path="/password-input" />
    <Route component={TextInputPage} exact path="/text-input" />
    <Route component={BannerPage} exact path="/top-banner" />
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;
