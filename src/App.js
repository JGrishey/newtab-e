import React, { Component } from "react";
import Welcome from "./Welcome";
import Time from "./Time";
import Sites from "./Sites";
import { Smile } from "react-feather";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Time />
        <Smile size={40} style={{ zIndex: 3 }} />
        <Welcome />
        <Sites />
        <div className="overlay" />
      </div>
    );
  }
}

export default App;
