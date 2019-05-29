import React, { Component } from "react";

class LoadingFunctions extends Component {
  loadSignature = (data, card) => {
    // if (card.card_type !== "Hero") return null;
    let signature = data.filter(c => c.card_id === card.references[0].card_id);
    return (
      <img
        src={signature[0].large_image.default}
        alt="asd"
        className="signature-image"
      />
    );
  };
}

export default LoadingFunctions;
