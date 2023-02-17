import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import "../styles/Photos.css";

export default function Photos({ width }) {
  const [cache, setCache] = useState({});

  const importAll = (r) => {
    var tempCache = {};
    r.keys().forEach((key) => (tempCache[key] = r(key)));
    setCache(tempCache);
  };

  useEffect(() => {
    // Note from the docs -> Warning: The arguments passed to require.context must be literals!
    importAll(require.context("./photos", false, /\.(png|jpe?g|svg)$/));
  }, []);

  return (
    <div className={`photos-container${width < 500 ? "-small" : ""}`}>
      <Navbar />
      <div className={`grid-view${width < 500 ? "-small" : "-large"}`}>
        {Object.entries(cache).map((module) => {
          return (
            <div style={{ padding: 10, margin: 10 }} key={module}>
              <img
                style={{
                  width: width / 3,
                  maxWidth: 200,
                  margin: "auto",
                  display: "block",
                }}
                src={module[1]}
                alt='this is '
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
