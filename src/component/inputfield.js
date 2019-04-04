import React, { Component } from "react";

// import axios from "axios";

export default class Inputfield extends Component {
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

    updateImg(event) {
        this.setState({ img: event.target.value })
    }

    updateBrand(event) {
        this.setState({ brand: event.target.value })
    }

    updatePro(event) {
        this.setState({ pro: event.target.value })
    }

    updateModel(event) {
        this.setState({ model: event.target.value })
    }

    updateSize(event) {
        this.setState({ size: event.target.value })
    }

    updateComments(event) {
        this.setState({ comments: event.target.value })
    }


    render() {
        return (
            <div>
                <input type="img" defaultValue={this.state.img} placeholder="Image" onChange={this.updateImg.bind(this)} />
                <input type="text" defaultValue={this.state.brand} placeholder="Brand" onChange={this.updateBrand.bind(this)} />
                <input type="text" defaultValue={this.state.pro} placeholder="Pro" onChange={this.updatePro.bind(this)} />
                <input type="text" defaultValue={this.state.model} placeholder="Model" onChange={this.updateModel.bind(this)} />
                <input type="text" defaultValue={this.state.size} placeholder="Size" onChange={this.updateSize.bind(this)} />
                <input type="text" defaultValue={this.state.comments} placeholder="Comments" onChange={this.updateComments.bind(this)} />
            </div>
        );
    }
}
