import React, { StrictMode } from "react";
import "./index.css";
import { render } from "react-dom";
import AuthContextProvider from "./contexts/AuthContext";
import MenuContextProvider from "./contexts/MenuContext";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = document.getElementById("root");

render(
  <StrictMode>
    <AuthContextProvider>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </AuthContextProvider>
  </StrictMode>,
  root
);

serviceWorkerRegistration.register();
