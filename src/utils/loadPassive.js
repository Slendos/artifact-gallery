export function loadPassive(data, card) {
  if (!card.references[0]) return null;
  let signature = data.filter(c => c.card_id === card.references[0].card_id);
  return signature;
}
