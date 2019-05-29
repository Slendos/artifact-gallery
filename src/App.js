import React, { Component } from "react";
import "./App.css";
import ArtifactSite from "./components/artifactSite";
import { HashRouter } from "react-router-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ArtifactSite />
      </HashRouter>
    );
  }
}

export default App;
