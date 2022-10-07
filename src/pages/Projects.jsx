import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";

export default function Projects() {
    const { width } = useWindowDimensions();

    return (
        <div className="projects-container">
            <Navbar />
            <p>Projects page - { width }</p>
        </div>
    );
}