import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";

export default function Home() {
    const { width } = useWindowDimensions();
    if (width < 500) {
        return (
            <div className="home-container-small">
                <Navbar />
                <p>Home page 1</p>
            </div>
        );
    } else {
        return (
            <div className="home-container-large">
                <Navbar />
                <p>Home page 2</p>
            </div>
        );
    }
}