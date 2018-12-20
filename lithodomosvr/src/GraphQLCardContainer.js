import React, { Component } from "react";
import Card from "./Card";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_EXERIENCES = gql`
{
  getPublicPlaylists(input: {_:true}) {
    id
    name
    tagline
    thumbnail {
      file
    }
    scenes(limit: 2) {
      name
      imageMedium {
        file
      }
    }
  }
}
`

const GCardContainer = () => (
  <Query query={GET_EXERIENCES}>
    {({loading, error, data}) => {
      if (loading) return <p>Loading!</p>;
      if (error) return <p>Error</p>;
      console.log(data.getPublicPlaylists, "PUBLIC")
      console.log(data.getPublicPlaylists[0].thumbnail.file)
      return data.getPublicPlaylists.map(({id, name, scenes, thumbnail, tagline}) => (
        <Card key={id} tagline={tagline} id={id} name={name} image={thumbnail} scenes={scenes}></Card>
      ))
    }}
  </Query>
)

export default GCardContainer;