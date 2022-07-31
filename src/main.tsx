import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./components/GlobalStyle";
import { GlobalTheme } from "./components/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalTheme>
      <GlobalStyle />
      <App />
    </GlobalTheme>
  </React.StrictMode>
);
