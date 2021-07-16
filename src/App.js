import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
const BannerPage = lazy(() => import("./pages/BannerPage"));
const BasicButtonPage = lazy(() => import("./pages/BasicButtonPage"));
const LoadingButtonPage = lazy(() => import("./pages/LoadingButtonPage"));

// import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  // const [user, loading, error] = useAuthState(auth);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  // else if (error) {
  //   return <h1>Error: {error}</h1>;
  // }
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Switch>
          <Route exact path="/top-banner" component={BannerPage} />
          <Route exact path="/basic-button" component={BasicButtonPage} />
          <Route exact path="/loading-button" component={LoadingButtonPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
