import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const API_KEY = process.env.REACT_APP_CODE;
const URL = "https://api.giphy.com/v1/gifs/";
// const SINGLE_URL = "https://api.giphy.com/v1/gifs/"

class CardContainer extends Component {
  state = { gifs: [], loading: true };

  componentDidMount() {
    const ENDPOINT = this.props.id ? this.props.id : "trending";
    axios
      .get(`${URL}${ENDPOINT}`, {
        params: {
          api_key: "KdpYtENdZIbVcvy4BGZEDKNameGAKyaw",
          limit: this.props.limit
        }
      })
      .then(res => {
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
          image={images.fixed_height.url}
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
