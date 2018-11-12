import React, { Component } from "react";

import "./styles/app.scss";

import Header from "./javascripts/containers/Header";
import Main from "./javascripts/containers/Main";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
