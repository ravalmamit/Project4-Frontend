import React from "react";
import Video from "./components/Video/Video";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";

function App(props) {
  return (
    <div>
      {/* <Route exact path="/video" component={Video} />

      <Link to="/video">Video Chat</Link> */}
      {/* <Register /> */}
    </div>

    //  <Router>
    //    <Switch>
    //      <Route exact path="/" component={Register} />
    //      <Route exact path="/home" component={Home} />
    //    </Switch>
    //  </Router>
  );
}

export default App;
