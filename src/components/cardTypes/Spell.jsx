import React from "react";
import LoadingFunctions from "../loadingFunctions";

class Spell extends LoadingFunctions {
  render() {
    let { card, data } = this.props;
    let signature;
    if (card.references.length !== 0) {
      signature = this.loadSignature(data, card);
    }
    return (
      <div className="card-detail-main">
        <div className="card-detail-large-image">
          <img
            src={card.large_image.default}
            alt=""
            className="card-detail-large-image"
          />
        </div>
        {signature && <div className="card-detail-signature">{signature}</div>}
      </div>
    );
  }
}

export default Spell;
