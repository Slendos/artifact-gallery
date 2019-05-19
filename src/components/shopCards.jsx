import React, { Component } from "react";
import CardTypeHeader from "./shopCardsComponents/cardTypeHeader";
import ShopCard from "./shopCard";

class ShopCards extends Component {
  render() {
    const { cards, shopCards } = this.props;
    console.log(shopCards);
    let arr = Object.keys(shopCards);
    console.log(arr);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", width: "50%" }}>
        {arr.map(typ => (
          <React.Fragment>
            <ul style={{ width: "25vh" }}>
              <CardTypeHeader typ={typ} count={shopCards[typ].length} />
              {shopCards[typ].map(card => (
                <ShopCard card={card} cards={cards} key={card.card_id} />
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default ShopCards;
