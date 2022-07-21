//Main JS file of the React app
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // selects "root" id in the single HTML page
root.render(<App />); //renders MAIN component in react app
