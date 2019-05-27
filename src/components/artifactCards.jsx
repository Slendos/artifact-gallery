import React, { Component, Fragment } from "react";

import Cards from "./cardComponents/cards";
import SortingButtons from "./buttonComponents/sortingButtons";
import ShopCards from "./shopCards";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

import { filterData } from "../utils/filterData";
import { getShopCards } from "../utils/getShopCards";
import { fixSignaturesRarity } from "../utils/fixSignaturesRarity";
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

    let cards;
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
        let fixed = fixSignaturesRarity([...this.state.cards]);
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

  handleFilter = (filter, type) => {
    let stateFilter = Object.assign({}, this.state.filter);
    let test = "abcd";
    // let data = filterData(stateFilter, type);
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
    let filter = { ...this.state.filter };
    filter.text = inputText;
    this.setState({
      filter
    });
  };

  render() {
    let { cards, filter, loading } = this.state;

    let filteredCards = filterData(cards, filter);

    let shopCards = getShopCards(cards, filter);
    return (
      <div className="parent">
        <SortingButtons
          handleFilter={this.handleFilter}
          handleInputFilter={this.handleInputFilter}
        />
        <div className="flex-parent">
          {!loading ? (
            <Fragment>
              <div style={{ width: "73%", display: "flex", flexWrap: "wrap" }}>
                <Cards
                  cards={cards}
                  filteredCards={filteredCards}
                  filter={filter}
                />
              </div>
              <div style={{ width: "25%" }}>
                <ShopCards
                  cards={cards}
                  shopCards={shopCards}
                  filter={filter}
                />
              </div>
            </Fragment>
          ) : (
            <div style={{ margin: "0 auto" }}>
              <LoadingSpinner />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ArtifactCards;
