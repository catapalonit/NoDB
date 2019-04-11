import React, { Component } from "react";
import axios from "axios";


export default class Good extends Component {
  constructor() {
    super();

    this.state = {
      allDecks: []
    };
  }

  deleteDeck = (id) => {
    axios.delete(`/api/data/${id}`, { data: { id } }).then(response => {
      this.props.refresh(response.data)
    })
  }

  updateDeck = (id) => {
    console.log('hit')

    //change axios request so it sends along the text inside the conditionally rendered input field
    axios.put(`/api/data/${id}`, { data: { id } }).then(response => {
      this.props.refresh(response.data)
    })
  }

  // updateDeck = (id) => {
  //   console.log('hit')
  //   axios.put("/api/data/" + id, (data: this.state.inputText)).then(response => {
  //     this.props.refresh(response.data)
  //   })
  // }

  // mykenzies put example 
  // req.body = {}
  // app.put("/api/data/:id", (req, res) => {
  //     let { id } = req.params
  //     let index = data.findIndex((val) => val.id === +req.params.id)
  //     data[index].data = req.body.data
  //     res.status(200).json{ data }
  // });



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
          <button className="deleteButton" onClick={() => this.deleteDeck(this.props.deck.id)} > Delete </button>
          <button className="updateButton" onClick={() => this.updateDeck(this.props.deck.id)} > Update </button>

        </div>
        <br />
        <br />
      </div>
    );
  }
}
