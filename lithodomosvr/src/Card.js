import React, { Component } from "react";
import { Link } from "react-router-dom";


class Card extends Component {
  render() {
    const {title, slug, id, image} = this.props;
    return (
      <Link to={`/experience/${id}`}>
        <div className="Card">
          <h3>{title}</h3>
          <img src={image} alt=""/>
          <div>{slug}</div>        
        </div>
      </Link>
    );
  }
}

export default Card;
