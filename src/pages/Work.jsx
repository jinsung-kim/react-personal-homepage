import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";
import "../styles/Work.css";

export default function Work() {
    const { width } = useWindowDimensions();

    return (
        <div className={`work-container${ width < 500 ? "small" : ""}`}>
            <Navbar />
            <div className={`main-content${ width < 500 ? "-small" : ""}`}>
                <h3>Work</h3>

                <p>
                    My resume can be viewed <a id="resume-link" target="_blank" href="https://us-central1-jinkim-backend.cloudfunctions.net/app/resume" rel="noreferrer">
                        here
                    </a>.
                </p>

                <p>I am currently a SDE at <a target="_blank" href="https://www.nudgetext.com/" rel="noreferrer">The Nudge</a>, a digital planner start up.</p>

                <p>I co-authored two conference papers researching for the NYU Langone Hospital. I helped create 
                    prototypes to track mobility progress for low vision patients and those affected by MS.</p>

                <div className="list-links">
                    <ul>
                        <li>
                            <a id="list-links" href="https://dl.acm.org/doi/10.1145/3491102.3501989" target="_blank" rel="noreferrer">
                                ‘Are They Doing Better In The Clinic Or At Home?’: Understanding Clinicians’ Needs When Visualizing Wearable Sensor Data Used In Remote Gait Assessments For People With Multiple Sclerosis (ACM CHI 2022)
                            </a>
                        </li>
                        <li>
                            <a id="list-links" href="https://dl.acm.org/doi/10.1145/3555622" target="_blank" rel="noreferrer">
                                Digital Technologies In Orientation And Mobility Instruction For People Who Are Blind Or Have Low Vision (CSCW 2022)
                            </a>
                        </li>
                    </ul>
                </div>

                <p>In the past,</p>
                <ul>
                    <li><a href="https://www.amazon.com/b?ie=UTF8&node=23676409011" target="_blank" rel="noreferrer">Amazon</a> - designed and developed a sort and filtering system to allow customers to seamlessly sort through categories of clothing in the Amazon Style application.</li>
                    <li><a href="https://maps.trimble.com/" target="_blank" rel="noreferrer">Trimble Maps</a> - helped clients with API usage, enhanced web request services through caching keys, and improved debugging features for geocoding requests.</li>
                    <li><a href="https://coffeecard.nyc/" target="_blank" rel="noreferrer">Coffee Card</a> - redesigned the app with a light mode UI, created a discount system, and managed orders for the corresponding vendor app.</li>
                    <li><a href="https://www.edgilearning.com/" target="_blank" rel="noreferrer">Edgi Learning</a> - created a mobile application for students to view account information, and designed an automatic Flask tool to see discussion statistics and engagement.</li>
                </ul>
            </div>
        </div>
    );
}