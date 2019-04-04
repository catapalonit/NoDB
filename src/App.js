import React, { Component } from "react";
import "./App.css";
import Good from "./component/good";
import { Header } from "./component/header";
import { Searchbar } from "./component/searchbar";
import { Button } from "./component/button";

// import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="body">
        <div>
          <Header />
          <Searchbar />
          <Button />
          <div />
          <main>
            <div>
              <Good />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
