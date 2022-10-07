import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './styles/App.css';
import { useWindowDimensions } from "./helpers/ScreenSize";

// Importing Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Photos from "./pages/Photos";

export default function App() {
    const { width } = useWindowDimensions();
    return (
        <div className="app-container">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={ <About /> } />
                  <Route path="/work" element={ <Work /> } />
                  <Route path="/projects" element={ <Projects /> } />
                  <Route path="/photos" element={ <Photos width={ width }/> } />
              </Routes>
          </BrowserRouter>
        </div>
    );
}