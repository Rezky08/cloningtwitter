import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import moment from "moment";

localStorage.setItem(
  "authorization",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBmYjFjY2UwZTM4YzNiZjgwYjQ5NzgiLCJ1c2VybmFtZSI6InJlemt5MDYiLCJpYXQiOjE2Mjg0NzMxNTksImV4cCI6MTYyODQ3Njc1OX0.CA65SPTy4NKqD-9vQm23BxAXEpQAo-PqoVNe3muZoSI"
);

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
