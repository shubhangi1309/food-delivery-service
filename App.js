import React from "react";
import ReactDOM from "react-dom/client";

// React Element is an OBJECT equivalent to DOM elements
// when we render react element to DOM it becomes HTML element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Shubhangi knows React 🚀"
);
const root = ReactDOM.createRoot(document.getElementById("root")); //root of app

root.render(heading);