import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
const BannerPage = lazy(() => import("./pages/BannerPage"));
const BasicButtonPage = lazy(() => import("./pages/BasicButtonPage"));
const LoadingButtonPage = lazy(() => import("./pages/LoadingButtonPage"));

const App = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Router>
      <Switch>
        <Route component={BannerPage} exact path="/top-banner" />
        <Route component={BasicButtonPage} exact path="/basic-button" />
        <Route component={LoadingButtonPage} exact path="/loading-button" />
        <Route component={HomePage} path="/" />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
