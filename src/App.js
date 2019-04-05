import React, { Component } from "react";
import "./App.css";
import Inputfield from "./component/inputfield";
import { Header } from "./component/header";
import { Searchbar } from "./component/searchbar";
import { Button } from "./component/button";

// import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      brand: "",
      pro: "",
      model: "",
      size: "",
      comments: ""
    };
  }

  render() {
    return (
      <div className="body">
        <div>
          <Header />
          <Searchbar />
          <Button />
          <Inputfield />
          <div />
          <main>
            <div>

            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
