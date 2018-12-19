import React, { Component } from "react";

class Card extends Component {
  render() {
    const {title, slug, id, image} = this.props;
    return (
      <div className="Card">
        <h3>{title}</h3>
        <img src={image} alt=""/>
        <div>{slug}</div>        
      </div>
    );
  }
}

export default Card;
