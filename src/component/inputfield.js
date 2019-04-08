import React, { Component } from "react";
import "/Users/bhawk/devmtn/nodb/src/App.css";
import axios from "axios";
import Good from "./good";

export default class Inputfield extends Component {
    constructor() {
        super();
        this.state = {
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

    }

    componentDidMount() {
        axios.get("/api/data").then(results => {
            console.log(results);
            this.setState({ allDecks: results.data });
        });
    }


    handleChange(e) {
        //image: vfdknd
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
            // this.setState({ [e.target.name]: e.target.value })

            //update allDecks in state
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
            // this.setState({ [e.target.name]: e.target.value })

            //update allDecks in state

        });
    }


    render() {
        let likesBoard = this.state.allDecks.filter(val => val.likesBoard === true).map(val => <Good deck={val} />)
        let dislikesBoard = this.state.allDecks.filter(val => val.likesBoard === false).map(val => <Good deck={val} />)
        // let totalBoard = this.state.allDecks.map(val => <Good deck={val} />)
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
                {/* {totalBoard} */}
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