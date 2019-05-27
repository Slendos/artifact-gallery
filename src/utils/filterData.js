export function filterData(data, filter) {
  let allCards = [...data];
  let { types, colors: color, rarity: rarities, text } = filter;
  types = types || ["Hero", "Spell", "Improvement", "Creep"];
  color = color || ["blue", "red", "green", "black"];
  let rarity = ["", "Rare", "Uncommon", "Common"];
  rarities = rarities || ["Basic", "Rare", "Uncommon", "Common"];

  // filtering cards with input text by card name
  let filterInput;
  if (text !== "") {
    filterInput = allCards.filter(card => {
      const regex = new RegExp(text, "gi");
      return card.card_name.english.match(regex);
    });
  } else {
    filterInput = allCards;
  }

  // filtering card rarity

  let filterRarity = filterInput.filter(
    card => rarities.indexOf(card.rarity) !== -1
  );

  let cards = {
    Hero: { blue: [], red: [], green: [], black: [] },
    Spell: { blue: [], red: [], green: [], black: [] },
    Improvement: { blue: [], red: [], green: [], black: [] },
    Creep: { blue: [], red: [], green: [], black: [] }
  };

  // filtering card color and card type buttons
  for (let i = 0; i < types.length; i++) {
    for (let k = 0; k < color.length; k++) {
      cards[types[i]][color[k]] = filterRarity
        .filter(
          card => card.card_type === types[i] && card[`is_${color[k]}`] === true
        )
        .sort((a, b) => {
          if (a.card_name.english < b.card_name.english) return 1;
          return -1;
        })
        .sort((a, b) => {
          if (rarity.indexOf(a.rarity) > rarity.indexOf(b.rarity)) return 1;
          return -1;
        });
    }
  }

  return cards;
}
