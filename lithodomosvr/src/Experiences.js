import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import GCardContainer from "./GraphQLCardContainer";

class Experiences extends Component {
  render() {
    return (
      <div className="Experiences">
        <h2>Experience Library</h2>
        <GCardContainer limit={18} />
      </div>
    );
  }
}

export default Experiences;
