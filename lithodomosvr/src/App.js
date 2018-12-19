import React, { Component } from "react";
import logo from "./logo_full.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Experiences from "./Experiences";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/experiences/:experienceId" component={Experience} />
          <Route path="/experiences/" component={Experiences} />
        </Switch>
      </div>
    );
  }
}

export default App;
