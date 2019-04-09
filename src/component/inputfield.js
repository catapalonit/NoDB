import React, { Component } from "react";
import "/Users/bhawk/devmtn/nodb/src/App.css";
import axios from "axios";
import Good from "./good";

export default class Inputfield extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            brand: "",
            pro: "",
            model: "",
            image: "",
            size: "",
            comments: "",
            likesBoard: false,
            allDecks: []
        };


        this.handleChange = this.handleChange.bind(this)
        this.handleGoodSubmit = this.handleGoodSubmit.bind(this);
        this.handleBadSubmit = this.handleBadSubmit.bind(this);
        this.refreshAllDecks = this.refreshAllDecks.bind(this);
    }

    refreshAllDecks(arr) {
        this.setState({ allDecks: arr }) //this handles refreshing the array so you dont refresh the page
    }

    componentDidMount() {
        axios.get("/api/data").then(response => {
            console.log(response);
            this.setState({ allDecks: response.data });
        });
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log("hit")
    }

    handleGoodSubmit(e) {
        e.preventDefault();

        axios.post("/api/data/", {
            image: this.state.image,
            brand: this.state.brand,
            pro: this.state.pro,
            model: this.state.model,
            size: this.state.size,
            comments: this.state.comments,
            likesBoard: true
        }).then(response => {
            console.log(response)
            this.setState({ allDecks: response.data }) //update allDecks in state
        });
    }
    handleBadSubmit(e) {
        e.preventDefault();

        axios.post("/api/data/", {
            image: this.state.image,
            brand: this.state.brand,
            pro: this.state.pro,
            model: this.state.model,
            size: this.state.size,
            comments: this.state.comments,
            likesBoard: false
        }).then(response => {
            console.log(response)
            this.setState({ allDecks: response.data }) //update allDecks in state
        });
    }


    render() {
        let likesBoard = this.state.allDecks.filter(val => val.likesBoard === true).map(val => <Good deck={val} refresh={this.refreshAllDecks} />) //Good.js holds what im rendering
        let dislikesBoard = this.state.allDecks.filter(val => val.likesBoard === false).map(val => <Good deck={val} refresh={this.refreshAllDecks} />)
        return (
            <div>
                <form>
                    <input type="text" name="brand" defaultValue={this.state.brand} placeholder="Brand" onChange={this.handleChange.bind(this)} />
                    <input type="text" name="pro" defaultValue={this.state.pro} placeholder="Pro" onChange={this.handleChange.bind(this)} />
                    <input type="text" name="model" defaultValue={this.state.model} placeholder="Model" onChange={this.handleChange.bind(this)} />
                    <input type="text" name="image" defaultValue={this.state.image} placeholder="Image" onChange={this.handleChange.bind(this)} />
                    <input type="text" name="size" defaultValue={this.state.size} placeholder="Size" onChange={this.handleChange.bind(this)} />

                    <input className="commentField" type="text" name="comments" defaultValue={this.state.comments} placeholder="Comments" onChange={this.handleChange.bind(this)} />
                    <br />
                    <button className="submitButton" type="reset" onClick={this.handleGoodSubmit.bind(this)} >I Liked This Board</button>
                    <button className="submitButton" type="reset" onClick={this.handleBadSubmit.bind(this)} >I Didn't Like This Board</button>
                </form>
                <div className="allBoards">
                    <div className="goodBoardsOuter">
                        <div className="goodBoards">
                            {likesBoard}
                        </div>
                    </div>
                    <div className="badBoardsOuter">
                        <div className="badBoards">
                            {dislikesBoard}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}