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
          width: "40px",
          height: "40px",
          marginRight: "5px",
          borderColor: "rgb(242, 236, 75)",
          borderRadius: "10%",
          borderShadow: "rgb(242, 236, 75) 0px 0px 3px 3px",
          borderWidth: "3px",
          borderStyle: "solid"
        }
      : {
          outline: "none",
          background: `${colors[index]}`,
          width: "40px",
          height: "40px",
          marginRight: "5px",
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
