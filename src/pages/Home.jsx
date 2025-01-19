import React, { useCallback, useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Container from '../components/Container';
import posthog from 'posthog-js';

const EXTERNAL_LINKS = [
  { redirectTo: 'https://www.github.com/jinsung-kim', label: 'Github' },
  {
    redirectTo:
      'https://us-central1-jinkim-backend.cloudfunctions.net/app/resume',
    label: 'Resume',
  },
  { redirectTo: 'https://jinsung-kim.github.io', label: 'Writing' },
  { redirectTo: 'https://www.linkedin.com/in/jin-k', label: 'LinkedIn' },
  { redirectTo: 'https://vsco.co/code-jin/gallery', label: 'VSCO' },
];

export default function Home() {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    posthog.capture('HomePageView');
  }, []);

  const handleExternalLinkClick = useCallback(link => {
    posthog.capture('HomeExternalLinkClick', { link });
  }, []);

  const handleImagePress = () => {
    setImageVisible(s => !s);
    posthog.capture('HomeImageClick', { imageVisible });
  };

  return (
    <Container>
      <Navbar currentIndex={0} />

      <div className="main-content">
        <div className="desc-label">
          Throughout the week, you can find me writing code at{' '}
          <a href="https://www.nudgetext.com" target="_blank" rel="noreferrer">
            The Nudge
          </a>
          , a Series A start up that text users cool things to do.
        </div>

        <div className="desc-label">
          On the weekends, I can be found reading and writing{' '}
          <a
            href="https://jinsung-kim.github.io"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              handleExternalLinkClick('https://jinsung-kim.github.io')
            }
          >
            (see my book blog here)
          </a>
          , surfing/running, or jamming on my bass guitar.
        </div>

        <div className="desc-label">
          An NYU CS grad. Fashion archivist. Music enthusiast. Originally from
          Seoul, currently based in SF.
        </div>

        <div className="footer-links">
          {EXTERNAL_LINKS.map((link, index) => (
            <div
              className="footer-link-container"
              key={`external-link-${index}`}
            >
              <a
                href={link.redirectTo}
                target="_blank"
                className="footer-link"
                rel="noreferrer"
                onClick={() => handleExternalLinkClick(link.redirectTo)}
              >
                {link.label}
              </a>

              {index !== EXTERNAL_LINKS.length - 1 && (
                <div className="dot-separator">·</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .desc-label {
            font-size: 14px;
            font-family: 'Roboto', sans-serif;
            color: #000;
            margin-bottom: 12px;
          }

          .desc-label a,
          .footer-links a {
            font-size: 14px;
            font-family: 'Roboto', sans-serif;
            color: #000;
          }

          .desc-label a:hover,
          .footer-links a:hover {
            color: #6d712e;
          }

          .image-button {
            cursor: pointer;
            font-size: 14px;
            font-family: 'Roboto', sans-serif;
            margin-bottom: 12px;
            text-decoration: underline;
          }

          .image-container img {
            max-height: 300px;
          }

          .footer-links {
            display: flex;
            flex-direction: row;
            flex: 1;
            margin-top: 8px;
            flex-wrap: wrap;
          }

          .footer-link-container {
            display: flex;
            flex-direction: row;
          }

          .dot-separator {
            padding-left: 6px;
            padding-right: 6px;
          }
        `}
      </style>
    </Container>
  );
}
