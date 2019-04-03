import React, { Component } from "react";

export default class Good extends Component {
  constructor() {
    super();

    this.state = {
      goodDeck: [
        {
          brand: "Baker",
          pro: "Cyril Jackson",
          model: "Issa Knife",
          image:
            "https://www.warehouseskateboards.com/images/products/preview/1DBAKJACISK847Y.jpg",
          width: '8.47"'
        },
        {
          brand: "Mother",
          pro: "Jake Johnson",
          model: "Bukkake",
          image:
            "http://cdn.companybe.com/cowtown/product_photos/rd_images/rd_quasi-skateboards-bukkake-deck-8.375.jpg",
          width: '8.6"'
        },
        {
          brand: "Polar",
          pro: "Pontus Alv",
          model: "No Complies Forever",
          image:
            "https://www.aylesburyskateboards.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/p/a/pa-amtk.jpg",
          width: '8.375"'
        },
        {
          brand: "Deathwish",
          pro: "Lizard King",
          model: "Permanent Vacation",
          image:
            "https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ70DD0-1.1506664642.jpg",
          width: '8.125"'
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.goodDeck.map(deck => (
          <article key="good deck">
            <img src={deck.image} alt="picture of deck" />
            <h2>{deck.brand}</h2>
            <h3>{deck.pro}</h3>
            <h3>{deck.model}</h3>
            <h3>{deck.width}</h3>
          </article>
        ))}
      </div>
    );
  }
}
