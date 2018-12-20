import React, { Component } from "react";
import CardContainer from "./CardContainer";

class SingleExperience extends Component {
  render() {
    const {experienceId} = this.props.match.params;
    return (
      <div className="SingleExperience">
        <h2>Single Experience</h2>
        <CardContainer limit={18} id={experienceId}/>
      </div>
    );
  }
}

export default SingleExperience;