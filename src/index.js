import React, { StrictMode } from "react";
import "./index.css";
import { render } from "react-dom";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";
import MenuContextProvider from "./contexts/MenuContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

render(
  <StrictMode>
    <AuthContextProvider>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </AuthContextProvider>
  </StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
