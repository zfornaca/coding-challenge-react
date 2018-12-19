import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const API_KEY = process.env.REACT_APP_CODE;
const URL = "https://api.giphy.com/v1/gifs/trending";

class CardContainer extends Component {
  state = { gifs: [], loading: true };

  componentDidMount() {
    console.log("cDM");
    console.log(process.env);
    axios
      .get(URL, {
        params: {
          api_key: "KdpYtENdZIbVcvy4BGZEDKNameGAKyaw",
          limit: 18
        }
      })
      .then(res => {
        console.log("promise then");
        console.log(res.data.data);
        this.setState({ gifs: res.data.data, loading: false });
      });
  }

  render() {
    // map function to make cards
    console.log(this.state.gifs);
    const cards = this.state.gifs.map(gif => {
      const { id, slug, title, images } = gif;
      return (
        <Card
          id={id}
          key={id}
          slug={slug}
          title={title}
          image={images.preview}
        />
      );
    });
    return (
      <div className="CardContainer">
        {this.state.loading ? <div>Loading...</div> : cards}
        {/* is loading ? spinner : cards */}
        {/* cards will be given props */}
        {/* container will hold state after API call */}
      </div>
    );
  }
}

export default CardContainer;
