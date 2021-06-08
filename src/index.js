import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";
import GlobalStyleWrapper from "./styles/GlobalStyleWrapper.js";
import { BrowserRouter } from "react-router-dom";

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyleWrapper className="ultrawide-container">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStyleWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
//reportWebVitals();
