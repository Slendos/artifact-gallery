import React, { Component } from "react";
import Buttons from "./button";
import ColorButtons from "./colorButtons";

class SortingButtons extends Component {
  styles = {
    parentStyle: {
      display: "flex",
      marginBottom: "4vh",
      paddingRight: "4vh",
      width: "90%",
      justifyContent: "space-between"
    },
    childStyle: {
      height: "5vh",
      flexDirection: "column",
      color: "white"
    },
    divStyle: {
      marginBottom: "7px"
    }
  };
  render() {
    const { handleFilter, handleInputFilter } = this.props;
    const { parentStyle, childStyle, divStyle } = this.styles;
    return (
      <div style={parentStyle}>
        <div style={childStyle}>
          <div style={divStyle}>
            <span className="sort-title">Color</span>
          </div>
          <div>
            <ColorButtons
              handleFilter={handleFilter}
              filterType="colors"
              filterInputs={["blue", "red", "green", "black"]}
            />
          </div>
        </div>
        <div style={childStyle}>
          <div style={divStyle}>
            <span className="sort-title">Card type</span>
          </div>
          <div>
            <Buttons
              handleFilter={handleFilter}
              filterType="types"
              filterInputs={["Hero", "Spell", "Improvement", "Creep"]}
            />
          </div>
        </div>
        <div style={childStyle}>
          <div style={divStyle}>
            <span className="sort-title">Rarity</span>
          </div>
          <div>
            <Buttons
              handleFilter={handleFilter}
              filterType="rarity"
              filterInputs={["Basic", "Common", "Uncommon", "Rare"]} // undefined is Basic
            />
          </div>
        </div>
        <div style={childStyle}>
          <div style={divStyle}>
            <span className="sort-title">Name</span>
          </div>
          <div>
            <input
              className="input-search"
              type="text"
              placeholder="Sort cards..."
              onChange={e => handleInputFilter(e)}
              onKeyDown={e => handleInputFilter(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SortingButtons;
