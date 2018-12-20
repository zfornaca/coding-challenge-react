import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import GCardContainer from "./GraphQLCardContainer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Featured experiences</h2>
        <GCardContainer limit={3}/>
        <h6>This is where the link goes</h6>
      </div>
    );
  }
}

export default Home;
