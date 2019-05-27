import { addRaritiesToSignatures } from "./addRaritiesToSignatures";

export function fixSignaturesRarity(data) {
  let heroes = data.filter(c => c.card_type === "Hero");
  heroes.map(card => {
    if (!card.rarity) {
      return (card.rarity = "Basic");
    }
    return card.rarity;
  });

  // mapping all signatures id's
  let signaturesReference = heroes.map(c => {
    return c.references[0].card_id;
  });

  // getting signatures cards
  let signatures = data.filter(
    card => signaturesReference.indexOf(card.card_id) !== -1
  );

  signatures.map((card, index) => {
    card.rarity = heroes[index].rarity;
  });

  addRaritiesToSignatures(signatures, heroes);

  return data;
}
