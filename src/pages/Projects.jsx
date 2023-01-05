import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";
import "../styles/Projects.css";

export default function Projects() {
    const { width } = useWindowDimensions();

    return (
        <div className={`projects-container${ width < 500 ? "-small" : ""}`}>
            <Navbar />
            <div className={`main-content${ width < 500 ? "-small" : ""}`}>
                <h3>Projects</h3>

                <p>I try to work on things that I want to learn more about or enhance the way that I interact with technology.
                    Some notable ideas from the past,
                </p>

                <ul>
                    <li><a href="https://romr.app/" target="_blank" rel="noreferrer">ROMR</a> - a social map application for finding experiences from friends. Currently in Beta testing and in process of funding.</li>
                    <li><a href="https://main.d2i0srt2n31is8.amplifyapp.com/" target="_blank" rel="noreferrer">alternatives</a> - a fashion focused search engine to help people find alternatives for pieces.</li>
                    <li><a href="https://github.com/jinsung-kim/chess-engine" target="_blank" rel="noreferrer">chess</a> - a chess engine in Python, with customizable play styles and chess theory using mini max game theory.</li>
                    <li><a href="https://github.com/jinsung-kim/stylist-enhanced" target="_blank" rel="noreferrer">Algorithmic Dressing</a> - generating combinations of clothes based on color blocking, silhouette, and weather with the aim to find new interesting looks.</li>
                </ul>
            </div>
        </div>
    );
}