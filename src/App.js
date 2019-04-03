import React, { Component } from "react";
import logo from "./img/logodeckorator.png";
import "./App.css";
import Good from "./component/good.js";
// import axios from "axios";

class App extends Component {
  render() {
    return (
      <body>
        <div>
          <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <h1>Welcome to Deckorator</h1>
          </header>

          <a href="https://www.google.com">Google your deck</a>
          <main>
            <div>
              <button>Liked this board</button>
              <button>+</button>
              <button>hated this board</button>
            </div>
            <div>
              <Good />
            </div>
          </main>
        </div>
      </body>
    );
  }
}

export default App;
