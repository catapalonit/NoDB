import React, { Component } from "react";
import "./App.css";
import Good from "./component/good";
import { Header } from "./component/header";
import { Searchbar } from "./component/searchbar";
import { Button } from "./component/button";

// import axios from "axios";

class App extends Component {
  // constructor(props){}
  //   super(props)

  //     this.state ={

  //     }

  //     addDeck(){
  // this.setState({
  //     // goodDeck: this.state.deck
  // })    }

  //     deleteDeck(){
  //       //add a bad deck
  //     }

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
