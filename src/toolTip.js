import React from "react";

class ToolTip extends React.Component {
  pos = {};
  render() {
    const { positionName } = this.props;
    if (positionName === "top") {
      this.pos = {
        bottom: "110%",
        left: "13%",
      };
    } else if (positionName === "bottom") {
      this.pos = {
        top: "110%",
        left: "13%",
      };
    } else if (positionName === "left") {
      this.pos = {
        top: "0%",
        right: "110%",
      };
    } else {
      this.pos = {
        top: "0%",
        left: "110%",
      };
    }
    console.log(this.pos);
    return (
      <div className="tooltip" style={this.pos}>
        ToolTipText
      </div>
    );
  }
}

export default ToolTip;
