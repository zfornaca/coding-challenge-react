import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        {this.props.title}
        {this.props.slug}
        {this.props.id}
        {console.log(this.props.image)}
      </div>
    );
  }
}

export default Card;
