import React, { Component } from "react";

import Navbar from "../components/Navbar";

export default class Photos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: props.width
        }
    }

    render() {
        return (
            <div className="photos-container">
                <Navbar />
                <p>Photos page - { this.state.width }</p>
            </div>
        );
    }
}