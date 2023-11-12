import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";
import "../styles/About.css";

export default function About() {
  const { width } = useWindowDimensions();
  return (
    <div className={`about-container${width < 500 ? "-small" : ""}`}>
      <Navbar />
      <div className={`main-content${width < 500 ? "-small" : ""}`}>
        <h3>Hi, I'm Jin.</h3>
        <p>
          Based out of San Francisco, I am a multi-faceted software engineer
          specializing in full stack development. I originate from Seoul, South
          Korea.
        </p>
        <p>
          I am a New York University graduate with a degree in Computer Science
          and a minor in mathematics.
        </p>

        <p>Outside of work, I really enjoy:</p>
        <ul>
          <li>Clothes</li>
          <li>Reading</li>
          <li>Bass guitar</li>
          <li>Surfing</li>
        </ul>
      </div>
    </div>
  );
}
