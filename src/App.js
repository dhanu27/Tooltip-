import React from "react";
import "./App.css";
import ToolTip from "./toolTip";

class App extends React.Component {
  constructor() {
    super();
    this.state = { position: "top" };
  }
  setPosittion = () => {
    let element = document.getElementById("selection");
    this.setState({
      position: element.value,
    });
  };
  render() {
    return (
      <div className="App">
        <select id="selection" onChange={this.setPosittion}>
          <option value="top">Top</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="bottom">Bottom</option>
        </select>
        <div class="container">
          <div className="box">
            ToolTip
            <ToolTip positionName={this.state.position} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
