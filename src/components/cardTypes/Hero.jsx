import React from "react";
import LoadingFunctions from "../loadingFunctions";

class Hero extends LoadingFunctions {
  render() {
    let passive;
    let { card, data } = this.props;
    console.log(card);
    let signature = this.loadSignature(data, card);
    if (card.references[1] === true) {
      passive = this.loadPassive(data, card);
    }
    console.log(Object.keys(card.card_text), passive);
    return (
      <div className="card-detail-main">
        <div className="card-detail-large-image">
          <img
            src={card.large_image.default}
            alt=""
            className="card-detail-large-image"
          />
          {Object.keys(card.card_text).length !== 0 && (
            <div className="card-detail-active-description">
              <span
                dangerouslySetInnerHTML={{ __html: card.card_text.english }}
              />
            </div>
          )}
        </div>
        <div className="card-detail-signature">{signature}</div>
      </div>
    );
  }
}

export default Hero;
