import React, { Component } from "react";
import ColorButton from "./colorButton";

class ColorButtons extends Component {
  render() {
    // filterType: colors
    // filterInputs: "blue, red, green, black"
    const { handleFilter, filterType, filterInputs } = this.props;

    return (
      <React.Fragment>
        {" "}
        {filterInputs.map((input, index) => (
          <ColorButton
            key={index}
            handleFilter={handleFilter}
            filterType={filterType}
            input={input}
            filterInputs={filterInputs}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ColorButtons;
