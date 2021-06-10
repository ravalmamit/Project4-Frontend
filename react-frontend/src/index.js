import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Video from "./components/Video/Video";
import Photos from "./components/Photos/Photos";
import Agent from "./components/Agent/Agent";
import Login from "./components/Login/Login";
import MapT from "./components/Map/MapT";
import MapS from "./components/Map/MapS";
import MapSM from "./components/Map/MapSM";
import MapN from "./components/Map/MapN";
import Visit from "./components/Visit/Visit";

ReactDOM.render(
  <Router>
    <App />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/video" component={Video} />
      <Route exact path="/photos" component={Photos} />
      <Route exact path="/agent" component={Agent} />
      <Route exact path="/transport" component={MapT} />
      <Route exact path="/school" component={MapS} />
      <Route exact path="/market" component={MapSM} />
      <Route exact path="/nightlife" component={MapN} />
      <Route exact path="/visit" component={Visit} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
