import React, { Component } from "react";
import axios from "axios";


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

        <div key={this.props.deck.id}>
          <img src={this.props.deck.image} alt="deck" />
          <h2>{this.props.deck.brand}</h2>
          <h3>{this.props.deck.pro}</h3>
          <h3>{this.props.deck.model}</h3>
          <h3>{this.props.deck.size}</h3>
          <h3>{this.props.deck.comments}</h3>
          <button className="deleteButton" onClick={() => axios.delete("/api/data" + this.props.name)
            .then(response => this.props.deleteData())}> Delete </button>

        </div>
        <br />
        <br />
      </div>
    );
  }
}


//jonathons delete

  // deleteDeck = () => {
  //   axios.delete("/api/data", { id })
  // }
