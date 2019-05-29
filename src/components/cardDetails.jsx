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
  }
}

export default CardDetails;
