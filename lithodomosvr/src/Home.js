import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CardContainer from "./CardContainer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Featured experiences</h2>
        <CardContainer limit={3}/>
        <h6>This is where the link goes</h6>
      </div>
    );
  }
}

export default Home;
