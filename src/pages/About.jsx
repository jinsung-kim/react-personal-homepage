import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";

export default function About() {
    const { width } = useWindowDimensions();

    return (
        <div className="about-container">
            <Navbar />
            <p>About page - { width }</p>
        </div>
    );
}