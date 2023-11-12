import React from "react";
import { Link } from "react-router-dom";
import { useWindowDimensions } from "../helpers/ScreenSize";

import "../styles/Navbar.css";

export default function Navbar() {
  const { width } = useWindowDimensions();
  const isWide = width >= 500;
  return (
    <div
      className={`navbar-container-${isWide ? "" : "compact"}`}
      style={{
        paddingLeft: isWide ? width / 10 : 0,
        paddingRight: isWide ? 10 : 0,
        textAlign: isWide ? "right" : "left",
      }}
    >
      <div className='nav-item'>
        <Link to='../' style={{ textDecoration: "none" }}>
          <p className='nav-item'>J.</p>
        </Link>
      </div>

      <div className='nav-item'>
        <Link to='../about' style={{ textDecoration: "none" }}>
          <p className='nav-item'>ABOUT</p>
        </Link>
      </div>

      <div className='nav-item'>
        <Link to='../work' style={{ textDecoration: "none" }}>
          <p className='nav-item'>WORK</p>
        </Link>
      </div>

      <div className='nav-item'>
        <Link to='../projects' style={{ textDecoration: "none" }}>
          <p className='nav-item'>PROJECTS</p>
        </Link>
      </div>

      <div className='nav-item'>
        <a
          target='_blank'
          href='https://jinsung-kim.github.io/'
          style={{ textDecoration: "none" }}
          rel='noreferrer'
        >
          <p className='nav-item'>BLOG</p>
        </a>
      </div>
    </div>
  );
}
