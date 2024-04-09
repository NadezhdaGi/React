import React from "react";
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import { App } from "./App";
import './index.css';

const rootElement = document.getElementById("root");
render(<App />, rootElement);

reportWebVitals();

