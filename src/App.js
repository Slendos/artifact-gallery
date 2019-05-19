import React, { Component } from 'react';
import './App.css';
import ArtifactSite from './components/artifactSite';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter><ArtifactSite /></BrowserRouter>
    );
  }
}

export default App;
