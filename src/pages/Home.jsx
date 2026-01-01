import React, { useCallback, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Container from '../components/Container';
import posthog from 'posthog-js';

const EXTERNAL_LINKS = [
  { redirectTo: 'https://www.github.com/jinsung-kim', label: 'Github' },
  {
    redirectTo:
        'https://jsk-blog-images.s3.us-west-2.amazonaws.com/JinKimResume.pdf',
    label: 'Resume',
  },
  { redirectTo: 'https://vsco.co/code-jin/gallery', label: 'VSCO' },
  { redirectTo: 'https://www.thereadingcorner.net', label: 'Writing' },
  { redirectTo: 'https://www.linkedin.com/in/jin-k', label: 'LinkedIn' },
];

export default function Home() {
  useEffect(() => {
    posthog.capture('HomePageView');
  }, []);

  const handleExternalLinkClick = useCallback(link => {
    posthog.capture('HomeExternalLinkClick', { link });
  }, []);

  return (
    <Container>
      <Navbar currentIndex={0} />

      <div className="main-content">
        <div className="desc-label">
          Throughout the week, you can find me writing code at{' '}
          <a href="https://tech.facebook.com/reality-labs/" target="_blank" rel="noreferrer">
            Meta
          </a>
          {" "}in the Reality Labs org.
        </div>

        <div className="desc-label">
          On the weekends, I alternate between reading{' '}
          <a
            href="https://www.thereadingcorner.net"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              handleExternalLinkClick('https://www.thereadingcorner.net')
            }
          >
            (see my book blog here)
          </a>
          , catching waves, bouldering, and jamming on my bass guitar.
            I also spend an excessive amount of time
            making espresso.
        </div>

        <div className="desc-label">
          An NYU CS grad. Originally from
          Seoul, raised in SF, currently based in NYC.
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
