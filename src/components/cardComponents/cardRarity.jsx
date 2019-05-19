import React, { Component } from "react";
import Basic from "../../img/rarities/basic.png";
import Uncommon from "../../img/rarities/uncommon.png";
import Common from "../../img/rarities/common.png";
import Rare from "../../img/rarities/rare.png";

class CardRarity extends Component {
  getRarityImg = rarity => {
    switch (rarity) {
      case "Rare":
        return Rare;
      case "Uncommon":
        return Uncommon;
      case "Common":
        return Common;
      case undefined:
        return Basic;
      case "Basic":
        return Basic;
      default:
        console.error("ERROR BAD RARITY");
        return;
    }
  };
  render() {
    let { rarity } = this.props;
    let rarityStyle =
      rarity === "Basic" || rarity === undefined
        ? {
            width: "2.2vh",
            height: "2.2vh",
            float: "right"
          }
        : {
            width: "2.2vh",
            height: "1.7vh",
            float: "right"
          };
    return (
      <img
        style={rarityStyle}
        src={this.getRarityImg(rarity)}
        alt="rarity"
        title={rarity}
      />
    );
  }
}

export default CardRarity;
