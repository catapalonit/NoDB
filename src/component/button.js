import React from "react";

export const Button = props => {
  return (
    <div className="buttons">
      <button onClick={() => this.addGoodDeck()}>Liked this board</button>
      <button>+</button>
      <button onClick={() => this.addBadDeck()}>hated this board</button>
    </div>
  );
};
