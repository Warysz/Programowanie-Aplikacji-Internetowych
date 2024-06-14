import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#257526",
    },
    secondary: {
      main: "#ffa000",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ff9800",
    },
  },
};

const theme = createTheme(themeOptions);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
