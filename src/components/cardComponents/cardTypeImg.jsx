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
          marginBottom: "1vh",
          marginTop: "1vh",
          width: "26.5vh",
          position: "relative",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div>
          <img
            style={{
              width: "2.5vh",
              height: "3vh",
              marginRight: "0.5vw",
              justifyContent: "center"
            }}
            src={this.getTypeImg(type)}
            alt="type"
          />
          <span style={{ fontSize: "1.8vh", fontWeight: "bold" }}>{type}</span>
        </div>

        <span
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            fontSize: "1.9vh"
          }}
        >{`${count}`}</span>
      </div>
    );
  }
}

export default CardTypeImg;
