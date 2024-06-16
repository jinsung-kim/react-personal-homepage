import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";

export default function Projects() {
  const { width } = useWindowDimensions();

  return (
    <div className={`projects-container${width < 500 ? "-small" : ""}`}>
      <Navbar />
      <div className={`main-content${width < 500 ? "-small" : ""}`}>
        <h3>Projects</h3>
        <p>I work on things that interest me.</p>
        <ul>
          <li>
            <a href='https://romr.app/' target='_blank' rel='noreferrer'>
              ROMR
            </a>{" "}
            - a social map application for finding experiences from friends.
          </li>
          <li>
            <a
              href='https://github.com/jinsung-kim/chess-engine'
              target='_blank'
              rel='noreferrer'
            >
              chess
            </a>{" "}
            - a chess engine in Python, with customizable play styles.
          </li>
          <li>
            <a
              href='https://github.com/jinsung-kim/stylist-enhanced'
              target='_blank'
              rel='noreferrer'
            >
              algorithmic dressing
            </a>{" "}
            - generating combinations of clothes based on color blocking,
            silhouette, and weather with the aim to find new interesting looks.
          </li>
          <li>
            <a
              href='https://github.com/jinsung-kim/dinner-res'
              target='_blank'
              rel='noreferrer'
            >
              reservation bot (for resy)
            </a>{" "}
            - a flexible Resy bot that allows you to book reservations
            automatically for restaurants around any city for any group.
          </li>
        </ul>
      </div>
    </div>
  );
}
