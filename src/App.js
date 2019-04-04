import React, { Component } from "react";
import "./App.css";
import Good from "./component/good";
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
              <input
                type="img"
                value={this.state.img}
                placeholder="Image"
                onChange={this.updateImg}
              />
              <input
                type="text"
                value={this.state.brand}
                placeholder="Brand"
                onChange={this.updateBrand}
              />
              <input
                type="text"
                value={this.state.pro}
                placeholder="Pro"
                onChange={this.updatePro}
              />
              <input
                type="text"
                value={this.state.model}
                placeholder="Model"
                onChange={this.updateModel}
              />
              <input
                type="text"
                value={this.state.size}
                placeholder="Size"
                onChange={this.updateSize}
              />

              <Good />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
