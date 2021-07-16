import React, { StrictMode, Suspense } from "react";
import "./index.css";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
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

render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);
