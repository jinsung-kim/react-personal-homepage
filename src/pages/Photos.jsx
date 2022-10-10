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
            <div className={`about-container${ this.state.width < 500 ? "-small" : ""}`}>
                <Navbar />
                <div className="grid-view">
                    
                </div>
            </div>
        );
    }
}