/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import "../styles/Contact.css";

export default function Contact() {
    const { width } = useWindowDimensions();
    const d = new Date();
    if (width < 500) {
        return (
            <div className="contact-container" style={{ width: width - 25 }}>
                <p className="email-container" onClick={()=> window.open("mailto:jinsungkim1210@gmail.com", "_blank")}>jinsungkim1210@gmail.com</p>
                <p>{ d.getFullYear() }</p>
            </div>
        );
    } else {
        return (
            <div className="contact-container-large" style={{ width: width - (width / 3), maxWidth: 700, paddingLeft: 20 }}>
                <p className="email-container" onClick={()=> window.open("mailto:jinsungkim1210@gmail.com", "_blank")}>jinsungkim1210@gmail.com</p>
                <p>{ d.getFullYear() }</p>
            </div>
        );
    }
}