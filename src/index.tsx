import * as React from "react";
import * as ReactDOM from "react-dom";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './assets/main.css';

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="Typescript" framework="React"/>,
    document.getElementById("root")
);
