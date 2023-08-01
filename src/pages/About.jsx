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
          and a minor in mathematics. I shortly pursued a Master's degree at NYU
          - but put it aside to work in the industry.
        </p>

        <p>Outside of my line of work, I really enjoy:</p>
        <ul>
          <li>Clothes - boots and old denim</li>
          <li>Reading and writing - particularly non-fiction + philosophy</li>
          <li>Bass guitar</li>
          <li>Distance running and exercise</li>
        </ul>

        <p>
          My resume and contact information can be viewed by clicking{" "}
          <a
            id='resume-link'
            target='_blank'
            href='https://us-central1-jinkim-backend.cloudfunctions.net/app/resume'
            rel='noreferrer'
          >
            here
          </a>
          . Feel free to reach out for potential contract work, interesting
          opportunities or even just to say hello.
        </p>
      </div>
    </div>
  );
}
