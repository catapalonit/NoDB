import React, { Component } from "react";
import "./App.css";
import Good from "./component/good";
import Inputfield from "./component/inputfield";
import { Header } from "./component/header";
import { Searchbar } from "./component/searchbar";
import { Button } from "./component/button";
// import { Post } from "./component/post";

// import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      brand: "",
      pro: "",
      model: "",
      size: ""
    };
  }

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
              <Inputfield />
              <Good />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
