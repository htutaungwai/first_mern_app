import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Theme
import "simplebar/dist/simplebar.min.css";
import { ThemeProvider } from "@mui/material";
import lightTheme from "./themes/lightTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
