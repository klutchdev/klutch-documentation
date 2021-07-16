import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
const BannerPage = lazy(() => import("./views/BannerPage"));
const CheckboxPage = lazy(() => import("./views/CheckboxPage"));
const TextInputPage = lazy(() => import("./views/TextInputPage"));
const MenuTogglePage = lazy(() => import("./views/MenuTogglePage"));
const IconButtonPage = lazy(() => import("./views/IconButtonPage"));
const ModalAlertPage = lazy(() => import("./views/ModalAlertPage"));
const BasicButtonPage = lazy(() => import("./views/BasicButtonPage"));
const PasswordInputPage = lazy(() => import("./views/PasswordInputPage"));
const OutlineButtonPage = lazy(() => import("./views/OutlineButtonPage"));
const LoadingButtonPage = lazy(() => import("./views/LoadingButtonPage"));

const App = () => (
  <Switch>
    <Route component={BasicButtonPage} exact path="/basic-button" />
    <Route component={CheckboxPage} exact path="/checkbox" />
    <Route component={IconButtonPage} exact path="/icon-button" />
    <Route component={LoadingButtonPage} exact path="/loading-button" />
    <Route component={MenuTogglePage} exact path="/menu-toggle" />
    <Route component={ModalAlertPage} exact path="/modal-alert" />
    <Route component={OutlineButtonPage} exact path="/outline-button" />
    <Route component={PasswordInputPage} exact path="/password-input" />
    <Route component={TextInputPage} exact path="/text-input" />
    <Route component={BannerPage} exact path="/top-banner" />
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;
