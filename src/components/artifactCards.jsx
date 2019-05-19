import React, { Component } from "react";
import Cards from "./cardComponents/cards";
import SortingButtons from "./buttonComponents/sortingButtons";
import ShopCards from "./shopCards";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
class ArtifactCards extends Component {
  state = {
    loading: true,
    cards: [],
    filteredCards: [],
    shopCards: [],
    signatures: [],
    filter: {
      types: "",
      colors: "",
      rarity: "",
      text: ""
    }
  };

  componentDidMount() {
    const urlSet00 =
      "https://steamcdn-a.akamaihd.net//apps/583950/resource/card_set_0.47C9D7C59717EF6C1191E7AC55E7F60C88360B93.json";
    const urlSet01 =
      "https://steamcdn-a.akamaihd.net//apps/583950/resource/card_set_1.29AA36A590C46C60AF09F5E97D6D5C168FCE7AB1.json";

    fetch(urlSet00)
      .then(blob => blob.json())
      .then(data => {
        let set00 = data.card_set.card_list;
        this.setState({ cards: set00 });
      });

    fetch(urlSet01)
      .then(blob => blob.json())
      .then(data => {
        let set01 = data.card_set.card_list;
        let set00 = [...this.state.cards];
        let allCards = set01.concat(set00);
        this.setState({ cards: allCards });
      })
      .then(data => {
        let fixed = this.fixSignaturesRarity([...this.state.cards]);
        this.setState({ cards: fixed });
      })
      .then(data => {
        let cards = [...this.state.cards];
        // let filteredCards = this.filterData(cards);
        this.setState({ filteredCards: cards });
        console.log(this.state);
        console.log("finished");
        this.setState({ loading: false });
      });
  }

  fixSignaturesRarity = data => {
    let dataTest = [...data];
    let heroes = dataTest.filter(c => c.card_type === "Hero");
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
    let signatures = dataTest.filter(
      card => signaturesReference.indexOf(card.card_id) !== -1
    );

    signatures.map((card, index) => {
      card.rarity = heroes[index].rarity;
    });

    this.addRaritiesToSignatures(signatures, heroes);

    return data;
  };

  addRaritiesToSignatures = (signatures, heroes) => {
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
  };

  handleFilter = (filter, type) => {
    let stateFilter = Object.assign({}, this.state.filter);
    let test = "abcd";
    let duplicate = false;
    if (!stateFilter[type]) {
      stateFilter[type] = [];
    }
    if (stateFilter[type].some(s => s === filter)) {
      test = stateFilter[type].filter(s => s !== filter);
      duplicate = true;
    }
    if (test.length === 0) {
      stateFilter[type] = "";
    } else if (duplicate) {
      stateFilter[type] = stateFilter[type].filter(s => s !== filter);
    } else {
      stateFilter[type].push(filter);
    }

    this.setState({
      filter: stateFilter
    });
  };

  handleInputFilter = e => {
    let inputText = e.target.value;
    let filter = Object.assign({}, this.state.filter);
    filter.text = inputText;
    this.setState({
      filter
    });
  };

  // filtering all data
  filterData = (data, filter) => {
    let allCards = [...data];
    let { types, colors: color, rarity: rarities, text } = this.state.filter;
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
            card =>
              card.card_type === types[i] && card[`is_${color[k]}`] === true
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
  };

  getShopCards = (cards, filter) => {
    let allCards = [...cards];

    let items = allCards.filter(card => card.card_type === "Item");
    let { rarity: rarities, text } = filter;
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
    console.log(shopCards);
    return shopCards;
  };

  render() {
    let { cards, filter, loading } = this.state;
    // let fixed = this.fixSignaturesRarity(cards);

    let filteredCards = this.filterData(cards);
    let shopCards = this.getShopCards(cards, filter);
    return (
      <div className="parent">
        <SortingButtons
          handleFilter={this.handleFilter}
          handleInputFilter={this.handleInputFilter}
        />
        <div className="flex-parent">
          <div style={{ width: "73%", display: "flex", flexWrap: "wrap" }}>
            {!loading ? (
              <Cards
                cards={this.state.cards}
                filteredCards={filteredCards}
                filter={this.state.filter}
              />
            ) : (
              <div style={{ margin: "0 auto" }}>
                <LoadingSpinner />
              </div>
            )}
          </div>
          <div style={{ width: "25%" }}>
            <ShopCards
              cards={cards}
              shopCards={shopCards}
              filter={this.state.filter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ArtifactCards;
