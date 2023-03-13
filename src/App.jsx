import { React, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

// Importing Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
// import Photos from "./pages/Photos";

const RedirectUrl = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <h5>Redirecting...</h5>;
};

export default function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/projects' element={<Projects />} />
          <Route
            path='/blog'
            element={<RedirectUrl url='https://jinsung-kim.github.io/' />}
          />
          <Route
            path='/books'
            element={<RedirectUrl url='https://jinsung-kim.github.io/' />}
          />
          <Route
            path='/archive'
            element={<RedirectUrl url='https://archived-js.web.app/' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
