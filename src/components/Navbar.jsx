import React from "react";
import { Link } from "react-router-dom";

const TABS = [
  {
    redirectTo: "../",
    label: "JIN KIM",
  },
  {
    redirectTo: "../work",
    label: "WORK",
  },
  {
    redirectTo: "../projects",
    label: "PROJECTS",
  },
];

export default function Navbar({ currentIndex }) {
  return (
    <div className='navbar-container'>
      {TABS.map((tab, index) => (
        <div
          className={`nav-item${currentIndex === index ? "-bold" : ""}`}
          key={`nav-${index}`}
        >
          <Link to={tab.redirectTo}>{tab.label}</Link>
        </div>
      ))}

      <style jsx>{`
        .navbar-container {
          display: flex;
          flex-direction: row;
          flex: 1;
          gap: 8px;
        }

        .nav-item a {
          font-size: 16px;
          text-decoration: none;
          color: #c7c7c7;
        }

        .nav-item-bold a {
          font-size: 16px;
          text-decoration: none;
          color: #000;
        }
      `}</style>
    </div>
  );
}
