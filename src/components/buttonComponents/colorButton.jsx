import React, { Component } from "react";

class ColorButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  getButtonStyle = input => {
    const filterType = ["blue", "red", "green", "black"];
    const colors = ["#215e7d", "#962d3b", "#597640", "#302a2c"];
    let index = filterType.indexOf(input);
    return this.state.clicked
      ? {
          outline: "none",
          background: `${colors[index]}`,
          width: "4.6vh",
          height: "4.6vh",
          marginRight: "0.6vh",
          borderColor: "rgb(242, 236, 75)",
          borderRadius: "10%",
          borderShadow: "rgb(242, 236, 75) 0px 0px 3px 3px",
          borderWidth: "0.3vh",
          borderStyle: "solid"
        }
      : {
          outline: "none",
          background: `${colors[index]}`,
          width: "4.6vh",
          height: "4.6vh",
          marginRight: "0.6vh",
          borderColor: "white",
          borderRadius: "10%"
        };
  };

  render() {
    const { input, filterType, handleFilter } = this.props;
    const style = this.getButtonStyle(input, filterType);
    return (
      <button
        key={`${input}${filterType}`}
        onClick={() => {
          handleFilter(input, filterType);
          this.handleClick();
        }}
        style={style}
        title={input}
      />
    );
  }
}

export default ColorButton;
