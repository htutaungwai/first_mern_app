import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Theme
import "simplebar/dist/simplebar.min.css";
import { ThemeProvider } from "@mui/material";
import lightTheme from "./themes/lightTheme";
import AuthState from "./context/auth_context/AuthState";
import BlogState from "./context/blog_context/BlogState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthState>
      <BlogState>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </BlogState>
    </AuthState>
  </React.StrictMode>
);
