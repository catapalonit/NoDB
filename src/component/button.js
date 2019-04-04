import React from "react";

export const Button = props => {
  return (
    <div className="buttons">
      <button onClick={() => this.addToGoodDeck()}>I liked this board</button>
      <button onClick={() => this.addDeck()}>Add a new board</button>
      <button onClick={() => this.addToBadDeck()}>I hated this board</button>
    </div>
  );
};
