import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { skin: "night" };
    this.changeSkin = this.changeSkin.bind(this);
  }

  changeSkin() {
    const newState = this.state;
    this.state.skin === "night"
      ? (newState.skin = "day")
      : (newState.skin = "night");
    this.setState(newState);
  }

  render() {
    return (
      <div className={this.state.skin}>
        <header className="App-header">
          <p
            onClick={this.changeSkin}
            style={{ fontSize: "50px", cursor: "pointer" }}
          >
            Change Skin
          </p>
        </header>
      </div>
    );
  }
}

export default App;
