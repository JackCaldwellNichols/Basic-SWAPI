//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css'

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./App.jsx";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
