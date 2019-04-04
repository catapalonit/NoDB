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
      this.setState({ allDecks: results.data });
    });
  }

  updateData(val, deck) {
    axios.put(`api/data?id=${val}`, { deck }).then(results => {
      this.setState({ allDecks: results.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.allDecks.map((deck, i) => (
          // key of i keeps the warning from saying each child needs a unique key prop

          <article key={i}>
            <img src={deck.image} alt="deck" />
            <h2>{deck.brand}</h2>
            <h3>{deck.pro}</h3>
            <h3>{deck.model}</h3>
            <h3>{deck.width}</h3>
            <h3>{deck.comments}</h3>
          </article>
        ))}
      </div>
    );
  }
}
