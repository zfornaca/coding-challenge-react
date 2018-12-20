import React, { Component } from "react";
import logo from "./logo_full.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import SingleExperience from "./SingleExperience";
import Experiences from "./Experiences";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.lithodomosvr.com/graphql"
})
class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <img src={logo} alt="" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/experiences/" component={Experiences} />
            <Route path="/experience/:experienceId" component={SingleExperience} />
          </Switch>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
