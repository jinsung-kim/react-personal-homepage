import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";
// import Contact from "../components/Contact";
import "../styles/About.css";

export default function About() {
    const { width } = useWindowDimensions();

    return (
        <div className={`about-container${ width < 500 ? "-small" : ""}`}>
            <Navbar />
            <div className={`main-content${ width < 500 ? "-small" : ""}`}>
                <h3>Hi, I'm Jin.</h3>
                <p>Based out of San Francisco, I am a multi-faceted software engineer specializing in full stack development.
                    I originate from Seoul, South Korea.
                </p>
                <p>I am a New York University graduate with a degree in Computer Science and a minor in mathematics.</p>

                <p>
                    My work often marries the intersection between technology and the intricacies of societal connection.
                    I enjoy subtle details and intentional design in everyday objects and tools. I aim to create effortless experiences.
                </p>

                <p>Currently, my main interests are:</p>
                <ul>
                    <li>Frontend and mobile application development</li>
                    <li>Human computer interaction and UX tools</li>
                    <li>Data analysis and machine learning</li>
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