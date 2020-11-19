import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import "./HotStar.css";

import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";

import App from "./App";
ReactDom.render(
    <Router>
        <App/>
    </Router>,
    document.querySelector("#root")
);
