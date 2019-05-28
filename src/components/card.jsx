import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardImgOrMana from "./cardComponents/cardImgOrMana";
import CardName from "./cardComponents/cardName";
import CardRarity from "./cardComponents/cardRarity";
import HoveredImg from "./hoveredImg";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: {
        visibility: false,
        cardImg: "",
        signatureImg: "",
        passive: "",
        card: ""
      }
    };
  }

  handleHover = (card, is_hovered) => {
    let signature = "";
    if (card.references[0]) {
      let signatureCard = this.props.cards.filter(
        c => card.references[0].card_id === c.card_id
      );
      signature = signatureCard[0].large_image.default;
    }
    this.setState({
      hover: {
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
            onMouseLeave={() => this.handleHover(card, false)}
            onMouseEnter={() => this.handleHover(card, true)}
            className={`li${card.card_type} ${this.props.c} licards`}
          >
            <CardImgOrMana card={card} />
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

export default Card;
