import React, { Component } from "react";

class CardImgOrMana extends Component {
  state = {};

  getImgOrMana = card => {
    const imgStyle = {
      width: "2.9vh",
      height: "2.9vh",
      verticalAlign: "middle",
      // position: "absolute",
      marginTop: "-2px",
      top: -3.5,
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
      // position: "relative",
      textDecoration: "none",
      color: "white",
      float: "left",
      width: "2vh",
      marginRight: 5,
      size: "1.7vh",
      fontFamily: "Times New Roman",
      fontWeight: "bold",
      verticalAlign: "middle",
      height: "1.1vh"
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
