import React, { Component } from "react";
import GCardContainer from "./GraphQLCardContainer";

class SingleExperience extends Component {
  render() {
    const { experienceId } = this.props.match.params;
    return (
      <div className="SingleExperience">
        <h2>Single Experience</h2>
        <GCardContainer limit={18} id={experienceId} />
      </div>
    );
  }
}

export default SingleExperience;
