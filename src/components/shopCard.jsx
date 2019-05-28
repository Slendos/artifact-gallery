import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardName from "./cardComponents/cardName";
import CardRarity from "./cardComponents/cardRarity";
import HoveredImg from "./hoveredImg";
import ItemPrize from "./shopCardsComponents/itemPrize";

class ShopCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: {
        position: {
          x: 0,
          y: 0
        },
        visibility: false,
        cardImg: "",
        signatureImg: "",
        passive: "",
        card: ""
      }
    };
  }

  handleHover = (e, card, is_hovered) => {
    let positionX = e.pageX + 20;
    let signature = "";
    if (card.references[0]) {
      let signatureCard = this.props.cards.filter(
        c => card.references[0].card_id === c.card_id
      );
      signature = signatureCard[0].large_image.default;
    }
    this.setState({
      hover: {
        position: { x: positionX, y: e.pageY },
        visibility: is_hovered,
        cardImg: card.large_image.default,
        signatureImg: signature,
        passive: card.card_text.english,
        card: card
      }
    });
  };

  render() {
    const { card, cards } = this.props;
    const { hover } = this.state;

    const liStyle = {
      width: "27vh",
      height: "2.25vh",
      border: "2px solid black",
      padding: "0.56vh",
      borderRadius: "1.2vh",
      background: "linear-gradient(90deg, rgb(230, 160, 70), rgb(189, 123, 39))"
    };
    return (
      <React.Fragment>
        {" "}
        <Link
          to={{
            pathname: `/cards/${card.card_id}`,
            state: { card, data: cards }
          }}
          style={{ textDecoration: "none" }}
          key={`${card.card_id}`}
        >
          <li
            key={card.card_id}
            onMouseLeave={e => this.handleHover(e, card, false)}
            onMouseEnter={e => this.handleHover(e, card, true)}
            style={liStyle}
            className="liShopHover"
          >
            <ItemPrize price={card.gold_cost} />
            <CardName name={card.card_name.english} />
            <CardRarity rarity={card.rarity} />
            <div className="hover-test">
              <HoveredImg
                visibility={hover.visibility}
                cardImg={hover.cardImg}
                signatureImg={hover.signatureImg}
                position={hover.position}
                passive={hover.passive}
                card={hover.card}
              />
            </div>
          </li>
        </Link>
      </React.Fragment>
    );
  }
}

export default ShopCard;
