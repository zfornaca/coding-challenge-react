import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const { name, scenes, id, image, tagline } = this.props;
    return (
      <div className="Card">
        <h3>{name}</h3>
        {image ? (
          <img src={`http://assets.lithodomosvr.com/${image.file}`} alt="" />
        ) : (
          <div>no image</div>
        )}
        <div>{tagline}</div>
      </div>
    );
  }
}

export default Card;
