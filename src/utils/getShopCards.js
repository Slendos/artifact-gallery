export function getShopCards(cards, filter) {
  let allCards = [...cards];
  let { rarity: rarities, text } = filter;

  // get all items
  let items = allCards.filter(card => card.card_type === "Item");

  // undefined is basic becouse if card doesnt have rarity then it is basic
  rarities = rarities || [undefined, "Rare", "Uncommon", "Common"];

  // filtering input text
  let filterInput = items.filter(card => {
    const regex = new RegExp(text, "gi");
    return card.card_name.english.match(regex);
  });

  // filtering rarity
  let filterRarity = filterInput.filter(
    card => rarities.indexOf(card.rarity) !== -1
  );

  let shopCards = {
    Accessory: {},
    Weapon: {},
    Armor: {},
    Consumable: {}
  };

  let types = Object.keys(shopCards);
  let length = Object.keys(shopCards).length;
  for (let i = 0; i < length; i++) {
    shopCards[types[i]] = filterRarity
      .filter(card => {
        return card.sub_type === types[i];
      })
      .sort((a, b) => {
        if (a.gold_cost > b.gold_cost) return 1;
        return -1;
      });
  }
  return shopCards;
}
