import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";
import "../styles/Projects.css";

export default function Projects() {
  const { width } = useWindowDimensions();

  return (
    <div className={`projects-container${width < 500 ? "-small" : ""}`}>
      <Navbar />
      <div className={`main-content${width < 500 ? "-small" : ""}`}>
        <h3>Projects</h3>

        <p>I work on things that genuinely interest me.</p>

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
            - a chess engine in Python, with customizable play styles and chess
            theory using mini max game theory.
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
          <li>
            <a
              href='https://github.com/jinsung-kim/project-euler'
              target='_blank'
              rel='noreferrer'
            >
              project euler
            </a>{" "}
            - challenging mathematical/computer programming problems for fun.
          </li>
          <li>
            <a
              href='https://github.com/jinsung-kim/'
              target='_blank'
              rel='noreferrer'
            >
              a bunch more you can see clicking here.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
