import React, { Component } from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import NavBar from "./navBar";
import CardDetails from "./cardDetails";
import ArtifactCards from "./artifactCards";
import NotFound from "./not-found";

class ArtifactSite extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main-div">
          <Link to={{ pathname: "/cards" }} style={{ textDecoration: "none" }}>
            <NavBar />
          </Link>
          <Switch>
            <Route path="/cards" exact component={ArtifactCards} />
            <Route path="/cards/:id" component={CardDetails} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/cards" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default ArtifactSite;
