import React from "react";
import logo from "./img/logo.png";

export const Header = props => {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <h1>Welcome to Deck Tracker</h1>
    </header>
  );
};
