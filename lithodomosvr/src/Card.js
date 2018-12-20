import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const { name, id, image, tagline } = this.props;
    return (
      <Link to={`/experience/${id}`}>
        <div className="Card">
          <h3>{name}</h3>
          {image ? (
            <img src={`http://assets.lithodomosvr.com/${image.file}`} alt="" />
          ) : (
            <div>no image</div>
          )}
          <div>{tagline}</div>
        </div>
      </Link>
    );
  }
}

export default Card;
