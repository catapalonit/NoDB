import React, { Component } from "react";

export default class Good extends Component {
  constructor() {
    super();

    this.state = {
      allDecks: []
    };
  }




  render() {
    return (
      <div>

        <div>
          <img src={this.props.deck.image} alt="deck" />
          <h2>{this.props.deck.brand}</h2>
          <h3>{this.props.deck.pro}</h3>
          <h3>{this.props.deck.model}</h3>
          <h3>{this.props.deck.size}</h3>
          <h3>{this.props.deck.comments}</h3>
        </div>
      </div>
    );
  }
}
