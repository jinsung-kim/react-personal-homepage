import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";

export default function Work() {
    const { width } = useWindowDimensions();

    return (
        <div className="work-container">
            <Navbar />
            <p>Work page - { width }</p>
        </div>
    );
}