import React, { Component } from "react";
import ButtonDetail from "./buttonDetail";

class Buttons extends Component {
  render() {
    const { handleFilter, filterType, filterInputs } = this.props;

    return (
      <React.Fragment>
        {" "}
        {filterInputs.map((input, index) => (
          <ButtonDetail
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

export default Buttons;
