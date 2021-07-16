import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
const BannerPage = lazy(() => import("./pages/BannerPage"));
const BasicButtonPage = lazy(() => import("./pages/BasicButtonPage"));
const LoadingButtonPage = lazy(() => import("./pages/LoadingButtonPage"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Route component={LoadingButtonPage} exact path="/loading-button" />
    <Route component={BasicButtonPage} exact path="/basic-button" />
    <Route component={BannerPage} exact path="/top-banner" />
    <Route component={HomePage} path="/" />
  </Suspense>
);

const Loading = () => (
  <div
    style={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      height: `100vh`,
      width: `100vw`,
    }}
  >
    <h1 style={{ margin: `auto` }}>Loading...</h1>
  </div>
);

export default App;
