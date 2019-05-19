import React, { Component } from "react";
import LoadingFunctions from "./loadingFunctions";
import Creep from "./cardTypes/Creep";
import Improvement from "./cardTypes/Improvement";
import Hero from "./cardTypes/Hero";
import Spell from "./cardTypes/Spell";
import Item from "./cardTypes/Item";
class CardDetails extends LoadingFunctions {
  render() {
    let { card, data } = this.props.location.state;
    let passive;
    let cardComponent;
    switch (card.card_type) {
      case "Hero":
        return <Hero card={card} data={data} />;
      case "Creep":
        return <Creep card={card} data={data} />;
      case "Improvement":
        return <Improvement card={card} data={data} />;
      case "Spell":
        return <Spell card={card} data={data} />;
      default:
        return <Item card={card} data={data} />;
    }
    let signature = this.loadSignature(data, card);
    if (card.references[1] === true) {
      passive = this.loadPassive(data, card);
    }
    return (
      <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto  " }}>
        <div>
          {card.ingame_image.default && (
            <img
              src={card.ingame_image.default}
              alt=""
              className="mini-image"
            />
          )}
        </div>
        <div>
          <img src={card.large_image.default} alt="" className="large-image" />
        </div>
        <div>
          <div>
            <span>{passive && passive[0].card_name.english}</span>
          </div>
          <div>
            <span>{passive && passive[0].card_text.english}</span>
          </div>
        </div>
        <div>{signature}</div>
        <div>
          <button
            style={{ width: "30px", height: "30px" }}
            onClick={() => this.props.history.push("/cards")}
          />
        </div>
      </div>
    );
  }
}

export default CardDetails;
