import React from "react";
import LoadingFunctions from "../loadingFunctions";

class Hero extends LoadingFunctions {
  loadPassive = (data, card) => {
    if (!card.references[0]) return null;
    let signature = data.filter(c => c.card_id === card.references[0].card_id);
    return signature;
  };

  render() {
    let passive;
    let { card, data } = this.props;

    let signature = this.loadSignature(data, card);
    if (card.references[1] === true) {
      passive = this.loadPassive(data, card);
    }

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
