import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CardContainer from "./CardContainer";

class Experiences extends Component {
  render() {
    return (
      <div className="Experiences">
        <h2>Experience Library</h2>
        <CardContainer limit={18}/>
      </div>
    );
  }
}

export default Experiences;
