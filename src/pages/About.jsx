import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";
// import Self from "../images/self.png";
import "../styles/About.css";

export default function About() {
    const { width } = useWindowDimensions();
    // var imgWidth = 0;
    // if (width < 500) {
    //     imgWidth = width - 100;
    // } else {
    //     imgWidth = width / 2;
    // }

    return (
        <div className={`about-container${ width < 500 ? "-small" : ""}`}>
            <Navbar />
            <div className={`main-content${ width < 500 ? "-small" : ""}`}>
                <h3>Hi, I'm Jin.</h3>
                <p>Based out of San Francisco, I am a multi-faceted software engineer specializing in full stack development.
                    I originate from Seoul, South Korea.
                </p>
                <p>I am a New York University graduate with a degree in Computer Science and a minor in mathematics.</p>

                {/* <img src={Self} style={{ width: imgWidth, height: imgWidth, justifySelf: "center", maxWidth: 300, maxHeight: 300 }} alt="self" /> */}

                <p>
                    My work often focuses on the intersection between technology and connection.
                    I enjoy subtle details and intentional design, aiming to create effortless experiences.
                </p>

                <p>Currently, my main interests are:</p>
                <ul>
                    <li>Frontend and Human Computer Interaction</li>
                    <li>Backend and infrastructure design</li>
                </ul>

                <p>Outside of my line of work, I really enjoy:</p>
                <ul>
                    <li>Clothes - boots and old denim</li>
                    <li>Reading - non-fiction and philosophy</li>
                    <li>Music - playing violin + bass guitar</li>
                    <li>Long distance running + heavy exercise</li>
                </ul>

                <p>
                    My resume can be viewed by clicking <a id="resume-link" target="_blank" href="https://us-central1-jinkim-backend.cloudfunctions.net/app/resume" rel="noreferrer">
                        here
                    </a>.
                </p>
            </div>
        </div>
    );
}