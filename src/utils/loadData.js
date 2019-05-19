import React from "react";

export function loadData() {
  const url2 =
    "https://steamcdn-a.akamaihd.net//apps/583950/resource/card_set_0.47C9D7C59717EF6C1191E7AC55E7F60C88360B93.json";
  const url3 =
    "https://steamcdn-a.akamaihd.net//apps/583950/resource/card_set_1.29AA36A590C46C60AF09F5E97D6D5C168FCE7AB1.json";

  fetch(url2)
    .then(blob => blob.json())
    .then(data => {
      let set00 = data.card_set.card_list;
      this.setState({ cards: set00 });
      console.log("state", this.state.cards);
    });

  fetch(url3)
    .then(blob => blob.json())
    .then(data => {
      let set01 = data.card_set.card_list;
      let set00 = [...this.state.cards];
      let allCards = set01.concat(set00);
      this.setState({ cards: allCards });
    });
}

export const loadSignature = (data, card) => {
  if (card.card_type !== "Hero") return null;
  let signature = data.filter(c => c.card_id === card.references[0].card_id);
  return (
    <img
      src={signature[0].large_image.default}
      alt="asd"
      className="signature-image"
    />
  );
};

export function loadPassive(data, card) {
  if (card.card_type !== "Hero") return null;
  let signature = data.filter(c => c.card_id === card.references[1].card_id);
  return signature;
}
