export function addRaritiesToSignatures(signatures, heroes) {
  let arr = [];
  signatures.forEach(card => {
    let filteredCard = heroes.filter(
      c => c.references[0].card_id === card.card_id
    );
    card.rarity = filteredCard[0].rarity;
    card.signature = true;
    arr.push(card);
  });
  return arr;
}
