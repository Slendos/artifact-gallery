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
      <div className="card-type-wrapper">
        <div>
          <img
            className="card-type-img"
            src={this.getTypeImg(type)}
            alt="type"
          />
          <span className="card-type-title">{type}</span>
        </div>

        <span className="card-type-count">{`${count}`}</span>
      </div>
    );
  }
}

export default CardTypeImg;
