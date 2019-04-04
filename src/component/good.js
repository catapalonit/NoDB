import React, { Component } from "react";
import axios from "axios";

export default class Good extends Component {
  constructor() {
    super();

    this.state = {
      allDecks: []
    };
  }

  componentDidMount() {
    axios.get("/api/data").then(results => {
      this.setState({ good: results.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.allDecks.map(deck => (
          <article>
            <img src={deck.image} alt="deck" />
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
