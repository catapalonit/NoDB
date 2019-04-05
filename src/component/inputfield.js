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
            comments: ""
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleGoodSubmit = this.handleGoodSubmit.bind(this);
        this.handleBadSubmit = this.handleBadSubmit.bind(this);

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
            comments: this.state.comments
        }).then(response => {
            console.log(response)

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
            comments: this.state.comments
        }).then(response => {
            console.log(response)

        });
    }


    render() {
        return (
            <div>
                <form>
                    <input type="text" name="brand" defaultValue={this.state.brand} placeholder="Brand" onChange={this.handleChange.bind(this)} />
                    <input type="text" name="pro" defaultValue={this.state.pro} placeholder="Pro" onChange={this.handleChange.bind(this)} />
                    <input type="text" name="model" defaultValue={this.state.model} placeholder="Model" onChange={this.handleChange.bind(this)} />
                    <input type="text" name="image" defaultValue={this.state.image} placeholder="Image" onChange={this.handleChange.bind(this)} />
                    <input type="text" name="size" defaultValue={this.state.size} placeholder="Size" onChange={this.handleChange.bind(this)} />
                    {/* <br /> */}
                    <input className="commentField" type="text" name="comments" defaultValue={this.state.comments} placeholder="Comments" onChange={this.handleChange.bind(this)} />
                    <br />
                    <button className="submitButton" onClick={this.handleGoodSubmit.bind(this)} >I Liked This Board</button>
                    <button className="submitButton" onClick={this.handleBadSubmit.bind(this)} >I Didn't Like This Board</button>
                </form>
                <Good />

            </div>
        );
    }
}



/* <input className="submitButton" type="submit" value="I liked this board" onChange={this.handleSubmit.bind(this)} /> */
                // <input className="submitButton" type="submit" value="I didn't like this board" onChange={this.handleSubmit.bind(this)} />

  // updateImg(event) {
    //     this.setState({ img: event.target.value })
    // }
    // updateBrand(event) {
    //     this.setState({ brand: event.target.value })
    // }
    // updatePro(event) {
    //     this.setState({ pro: event.target.value })
    // }
    // updateModel(event) {
    //     this.setState({ model: event.target.value })
    // }
    // updateSize(event) {
    //     this.setState({ size: event.target.value })
    // }
    // updateComments(event) {
    //     this.setState({ comments: event.target.value })
    // }