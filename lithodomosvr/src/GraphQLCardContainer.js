import React, { Component } from "react";
import Card from "./Card";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_EXERIENCES = gql`
  {
    getPublicPlaylists(input: { _: true }) {
      id
      name
      tagline
      thumbnail {
        file
      }
      scenes(limit: 2) {
        id
        name
        tagline
        imageMedium {
          file
        }
      }
    }
  }
`;

const GET_SINGLE_EXPERIENCE = gql`
  {
    getPublicPlaylist(input: { playlistID: "5bf5da707c04b3000744a098" }) {
      id
      name
      tagline
      thumbnail {
        file
      }
      scenes(limit: 2) {
        id
        name
        tagline
        imageMedium {
          file
        }
      }
    }
  }
`;

const GCardContainer = props => (
  <Query query={props.id ? GET_SINGLE_EXPERIENCE : GET_EXERIENCES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading!</p>;
      if (error) return <p>Error</p>;
      const trimmedData = props.id
        ? data.getPublicPlaylist.scenes.slice(0, props.limit)
        : data.getPublicPlaylists.slice(0, props.limit);
      return trimmedData.map(el => (
        <Card
          key={el.id}
          tagline={el.tagline}
          id={el.id}
          name={el.name}
          image={el.thumbnail || el.imageMedium}
          singleExperience={!!el.imageMedium}
        />
      ));
    }}
  </Query>
);

export default GCardContainer;
