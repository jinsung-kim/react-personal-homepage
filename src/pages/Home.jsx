import React from "react";
import { useWindowDimensions } from "../helpers/ScreenSize";

import Navbar from "../components/Navbar";
import HomeImage from "../images/HOME.jpg";
import "../styles/Home.css";

import Contact from "../components/Contact";

export default function Home() {
  const { width } = useWindowDimensions();
  if (width < 500) {
    return (
      <div className='home-container-small'>
        <Navbar />
        <img src={HomeImage} alt='SF is home' style={{ width: width - 25 }} />
        <Contact width={width} />
      </div>
    );
  } else {
    return (
      <div className='home-container'>
        <Navbar />
        <div className='main-content'>
          <img
            src={HomeImage}
            alt='SF is home'
            style={{ width: width - width / 3, maxWidth: 700, paddingLeft: 20 }}
          />
          <Contact width={width} />
        </div>
      </div>
    );
  }
}
