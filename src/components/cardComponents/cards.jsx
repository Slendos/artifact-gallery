import React, { Component } from "react";
import CardTypeImg from "./cardTypeImg";
import Card from "../card";

class Cards extends Component {
  isHidden(length) {
    if (length === 0) return "none";
    return 1;
  }
  render() {
    console.log("RUN");
    let { cards, filteredCards, filter } = this.props;
    let types = filter.types || ["Hero", "Spell", "Improvement", "Creep"];
    let colors = filter.colors || ["blue", "red", "green", "black"];
    // let rarity;
    // this.getSignatures(cards);
    return (
      <React.Fragment>
        {types.map(typ => (
          <React.Fragment key={typ}>
            {colors.map(color => (
              <ul
                key={color}
                style={{
                  display: this.isHidden(filteredCards[typ][color].length)
                }}
              >
                <CardTypeImg
                  type={typ}
                  count={filteredCards[typ][color].length}
                  key={`${typ}${color}`}
                />
                {filteredCards[typ][color].map(card => (
                  <Card
                    card={card}
                    cards={cards}
                    c={color}
                    key={card.card_id}
                  />
                ))}
              </ul>
            ))}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

export default Cards;
