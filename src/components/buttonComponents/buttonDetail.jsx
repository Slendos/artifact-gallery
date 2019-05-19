import React, { Component } from "react";

import Hero from "../../img/cardType/hero.png";
import Improvement from "../../img/cardType/improvement.png";
import Spell from "../../img/cardType/spell.png";
import Creep from "../../img/cardType/creep.png";

import Basic from "../../img/rarities/basic.png";
import Common from "../../img/rarities/common.png";
import Uncommon from "../../img/rarities/uncommon.png";
import Rare from "../../img/rarities/rare.png";

class ButtonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  getImgStyle(type, input) {
    if (input === "Basic") {
      return { width: "20px", height: "20px" };
    }

    if (type === "rarity") {
      return { width: "25px", height: "20px" };
    } else if (type === "types") {
      return { width: "24px", height: "32px" };
    } else {
      return { width: "25px", height: "20px" };
    }
  }

  getButtonStyle(clicked) {
    return clicked
      ? {
          outline: "none",
          width: "40px",
          height: "40px",
          background: "none",
          borderRadius: "10%",
          marginRight: "5px",
          marginLeft: "2px",
          padding: "3px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#f2ec4b",
          boxShadow: `rgb(242, 236, 75) 0px 0px 2px 2px`
        }
      : {
          outline: "none",
          width: "40px",
          height: "40px",
          background: "none",
          borderRadius: "10%",
          marginRight: "5px",
          marginLeft: "2px",
          padding: "3px"
        };
  }

  getBackground(type, input) {
    const types = this.props.filterInputs;
    let images;
    let index;
    let img = Hero;
    switch (input) {
      case "types":
        images = [Hero, Spell, Improvement, Creep];
        index = types.indexOf(type);
        img = images[index];
        break;
      case "rarity":
        images = [Basic, Common, Uncommon, Rare];
        index = types.indexOf(type);
        index = index === -1 ? 0 : index;
        img = images[index];
        break;
      case "colors":
        images = ["#215e7d", "#962d3b", "#59764", "#302a2c"];
        index = types.indexOf(type);
        img = images[index];
        break;
      default:
    }
    return img;
  }
  render() {
    const { input, filterType, handleFilter } = this.props;
    return (
      <button
        key={`${input}${filterType}`}
        onClick={() => {
          handleFilter(input, filterType);
          this.handleClick();
        }}
        style={this.getButtonStyle(this.state.clicked)}
      >
        {
          <img
            style={this.getImgStyle(filterType, input)}
            src={this.getBackground(input, filterType)}
            alt="button"
            title={input}
          />
        }
      </button>
    );
  }
}

export default ButtonDetail;
