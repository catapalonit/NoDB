import React from "react";

export const Button = props => {
  return (
    <div className="buttons">
      <button onClick={() => this.addToGood()}>I Liked These Boards</button>
      <button onClick={() => this.addDeck()}>Add A New Board</button>
      <button onClick={() => this.addToBad()}>I Hated These Boards</button>
    </div>
  );
};
