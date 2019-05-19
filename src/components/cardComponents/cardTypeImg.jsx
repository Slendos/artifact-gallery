import React, { Component } from "react";
import Hero from "../../img/cardType/hero.png";
import Creep from "../../img/cardType/creep.png";
import Improvement from "../../img/cardType/improvement.png";
import Spell from "../../img/cardType/spell.png";

class CardTypeImg extends Component {
  getTypeImg = type => {
    switch (type) {
      case "Hero":
        return Hero;
      case "Creep":
        return Creep;
      case "Improvement":
        return Improvement;
      case "Spell":
        return Spell;
      default:
        console.error("BAD CARD TYPE");
    }
  };
  render() {
    let { type, count } = this.props;
    return (
      <div
        style={{
          marginBottom: "10px",
          marginTop: "10px",
          width: "240px",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          marginRight: 0
        }}
      >
        <div>
          <img
            style={{ width: "24px", height: "28px", marginRight: "10px" }}
            src={this.getTypeImg(type)}
            alt="type"
          />
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>{type}</span>
        </div>

        <span
          style={{ position: "absolute", bottom: 0, right: 0 }}
        >{`${count}`}</span>
      </div>
    );
  }
}

export default CardTypeImg;
