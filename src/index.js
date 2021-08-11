import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import moment from "moment";

moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d s",
    m: "a m",
    mm: "%d m",
    h: "an h",
    hh: "%d h",
    d: "a d",
    dd: "%d d",
    w: "a w",
    ww: "%d w",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
