import React from "react";
import { Link } from "react-router-dom";

const TABS = [
  {
    redirectTo: "../",
    label: "Jin Kim",
  },
  {
    redirectTo: "../work",
    label: "Work",
  },
  {
    redirectTo: "../projects",
    label: "Projects",
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

      <style jsx='true'>{`
        .navbar-container {
          display: flex;
          flex-direction: row;
          flex: 1;
          gap: 16px;
          margin-bottom: 16px;
        }

        .nav-item a {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          text-decoration: none;
          color: #6d712e;
        }

        .nav-item-bold a {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          text-decoration: none;
          color: #000;
        }
      `}</style>
    </div>
  );
}
