import React, { Component } from "react";
import Accessory from "../../img/cardType/acessory.png";
import Armor from "../../img/cardType/armor.png";
import Weapon from "../../img/cardType/weapon.png";
import Consumable from "../../img/cardType/consumable.png";

class CardTypeHeader extends Component {
  getImg = img => {
    const images = ["Accessory", "Armor", "Weapon", "Consumable"];
    const links = [Accessory, Armor, Weapon, Consumable];
    const index = images.indexOf(img);
    return links[index];
  };

  render() {
    return (
      <div
        style={{
          marginBottom: "1vh",
          marginTop: "1vh",
          width: "27.8vh",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          marginRight: 0
        }}
      >
        <div>
          <img
            style={{ width: "2.6vh", height: "2.5vh", marginRight: "0.6vh" }}
            src={this.getImg(this.props.typ)}
            alt={this.props.typ}
          />
          <span style={{ fontSize: "2vh", fontWeight: "bold" }}>
            {this.props.typ}
          </span>
        </div>
        <span style={{ position: "absolute", bottom: 0, right: 0 }}>{`${
          this.props.count
        }`}</span>
      </div>
    );
  }
}

export default CardTypeHeader;
