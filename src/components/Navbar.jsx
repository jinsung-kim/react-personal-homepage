import React from "react";
import { Link } from "react-router-dom";
import { useWindowDimensions } from "../helpers/ScreenSize";

import "../styles/Navbar.css";

export default function Navbar() {
    const { width } = useWindowDimensions();
    if (width < 500) {
        return (
            <div className="navbar-container-compact">
                <div className="nav-item">
                    <Link to="../" style={{ textDecoration: 'none' }}>
                        <p className="nav-item">J.</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to="../about" style={{ textDecoration: 'none' }}>
                        <p className="nav-item">ABOUT</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to="../work" style={{ textDecoration: 'none' }}>
                        <p className="nav-item">WORK</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to="../projects" style={{ textDecoration: 'none' }}>
                        <p className="nav-item">PROJECTS</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to="../photos" style={{ textDecoration: 'none' }}>
                        <p className="nav-item">PHOTOS</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <a target="_blank" href="https://jinsung-kim.github.io/" style={{ textDecoration: 'none' }} rel="noreferrer">
                        <p className="nav-item">BLOG</p>
                    </a>
                </div>

                <div className="nav-item">
                    <a target="_blank" href="https://archived-js.web.app/" style={{ textDecoration: 'none' }} rel="noreferrer">
                        <p className="nav-item">ARCHIVE</p>
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="navbar-container" style={{paddingLeft: width / 10, width: 100}}>
                <div className="nav-item">
                    <Link to="../" style={{ textDecoration: 'none' }}>
                        <p className="nav-item">J.</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to="../about" style={{ textDecoration: 'none' }}>
                        <p className="nav-item">ABOUT</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to="../work" style={{ textDecoration: 'none' }}>
                        <p className="nav-item">WORK</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to="../projects" style={{ textDecoration: 'none' }}>
                        <p className="nav-item">PROJECTS</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to="../photos" style={{ textDecoration: 'none' }}>
                        <p className="nav-item">PHOTOS</p>
                    </Link>
                </div>

                <div className="nav-item">
                    <a target="_blank" href="https://jinsung-kim.github.io/" style={{ textDecoration: 'none' }} rel="noreferrer">
                        <p className="nav-item">BLOG</p>
                    </a>
                </div>

                <div className="nav-item">
                    <a target="_blank" href="https://archived-js.web.app/" style={{ textDecoration: 'none' }} rel="noreferrer">
                        <p className="nav-item">ARCHIVE</p>
                    </a>
                </div>
            </div>
        );
    }
}