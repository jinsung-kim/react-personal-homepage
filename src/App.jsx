import { React, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';
import Projects from './pages/Projects';
import posthog from 'posthog-js';

if (typeof window !== 'undefined') {
  posthog.init('phc_sCvHzrDj0HZWNdUT1LHFj44kF16g0loQPJzbRxROE1h', {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'always',
    // Enable debug mode in development.
    loaded: posthog => {
      if (process.env.NODE_ENV === 'development') {
        posthog.debug();
      }
    },
  });
}

const RedirectUrl = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return (
    <>
      <h5>Redirecting...</h5>
      <style jsx>{`
        h5 {
          font-size: 14px;
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </>
  );
};

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />

          {/* Just redirects to my other websites. */}
          <Route
            path="/blog"
            element={<RedirectUrl url="https://jinsung-kim.github.io/" />}
          />
          <Route
            path="/archive"
            element={<RedirectUrl url="https://archived-js.web.app/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
