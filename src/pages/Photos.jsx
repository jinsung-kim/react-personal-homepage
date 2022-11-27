import React, { Component } from "react";

import Navbar from "../components/Navbar";
import "../styles/Photos.css";

var cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}

export default class Photos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: props.width
        }

        // Note from the docs -> Warning: The arguments passed to require.context must be literals!
        importAll(require.context("./photos", false, /\.(png|jpe?g|svg)$/));
    }

    render() {
        return (
            <div className={`photos-container${ this.props.width < 500 ? "-small" : ""}`}>
                <Navbar />
                <div className={`grid-view${ this.props.width < 500 ? "-small" : "-large"}`}>
                {Object.entries(cache).map(module => {
                    return (
                        <div style={{ padding: 10, margin: 10 }} key={ module }>
                            <img style={{width: this.props.width / 3, maxWidth: 200, margin: 'auto', display: 'block'}} src={module[1]} alt="this is "/>
                        </div>
                    )
                })}
                </div>
            </div>
        );
    }
}