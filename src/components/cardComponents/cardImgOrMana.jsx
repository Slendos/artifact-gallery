import React, { Component } from "react";

class CardImgOrMana extends Component {
  state = {};

  getImgOrMana = card => {
    const imgStyle = {
      width: "25px",
      height: "25px",
      verticalAlign: "middle",
      position: "absolute",
      top: -2,
      left: 0
    };

    return card.ingame_image.default === undefined ? (
      <span className="padding-left">{card.mana_cost}</span>
    ) : (
      <img
        style={imgStyle}
        src={card.ingame_image.default}
        className="img-hero"
        alt="hero_img"
      />
    );
  };

  render() {
    const divStyle = {
      position: "relative",
      textDecoration: "none",
      color: "white",
      float: "left",
      width: 20,
      marginRight: 5,
      size: "16px",
      fontFamily: "Times New Roman",
      fontWeight: "bold",
      verticalAlign: "middle",
      height: "10px"
    };
    let { card } = this.props;
    return (
      <div style={divStyle} className="span-img">
        {this.getImgOrMana(card)}
      </div>
    );
  }
}

export default CardImgOrMana;
