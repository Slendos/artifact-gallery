import React, { Component } from "react";
import Buttons from "./button";
import ColorButtons from "./colorButtons";

class SortingButtons extends Component {
  styles = {
    parentStyle: {
      display: "flex",
      marginBottom: "2vh"
    },
    childStyle: {
      flexGrow: 1,
      flexWrap: "wrap",
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
            <span className="sort-title">Sort by color</span>
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
            <span className="sort-title">Sort by card type</span>
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
            <span className="sort-title">Sort by rarity</span>
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
            <span className="sort-title">Sort card name</span>
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
