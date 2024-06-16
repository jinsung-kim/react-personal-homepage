import React from "react";

import Navbar from "../components/Navbar";
import Container from "../components/Container";
import DataTable from "../components/DataTable";

const PROJECTS = [
  {
    redirectTo: undefined,
    title: "alternatives",
    subtitle:
      "Developed a full-stack application that aggregates clothes from various boutiques/middlemen into a search engine",
  },
  {
    redirectTo: "https://archived-js.web.app/",
    title: "archived.js",
    subtitle:
      "Created a JavaScript server and blog page to showcase my writing and photography",
  },
  {
    redirectTo: "https://github.com/jinsung-kim/chess-engine",
    title: "Trompowsky Engine",
    subtitle:
      "Built a Python chess engine utilizing various game theory strategies, including alpha-beta pruning, minimax, and opening lines",
  },
  {
    redirectTo: undefined,
    title: "Virtual Closet",
    subtitle:
      "Designed and implemented a SwiftUI app for organizing my closet, with an algorithm to generate outfits based on color palette, weather, and silhouette",
  },
  {
    redirectTo: "https://github.com/jinsung-kim/dinner-res",
    title: "Resy Bot",
    subtitle:
      "Developed a reservation bot that secures available time slots for up to 6 people at popular restaurants on the platform",
  },
];

export default function Projects() {
  return (
    <Container>
      <Navbar currentIndex={2} />

      <div>
        <div className='projects-label'>Projects</div>
        <DataTable data={PROJECTS} secondaryColor='#808080' />
        <div className='projects-disclaimer'>
          * Links not available for closed sourced projects
        </div>
      </div>

      <style jsx>{`
        .projects-label {
          font-size: 16px;
          font-family: "Roboto", sans-serif;
          margin-bottom: 6px;
        }

        .projects-disclaimer {
          font-size: 12px;
          font-family: "Roboto", sans-serif;
          color: #c7c7c7;
          margin-top: 8px;
        }
      `}</style>
    </Container>
  );
}
