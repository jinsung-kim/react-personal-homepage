import React from "react";

import Navbar from "../components/Navbar";
import Container from "../components/Container";

const EXTERNAL_LINKS = [
  { redirectTo: "https://www.github.com/jinsung-kim", label: "Github" },
  {
    redirectTo:
      "https://us-central1-jinkim-backend.cloudfunctions.net/app/resume",
    label: "Resume",
  },
  { redirectTo: "https://jinsung-kim.github.io", label: "Writing" },
  { redirectTo: "https://www.linkedin.com/in/jin-k", label: "LinkedIn" },
  { redirectTo: "https://vsco.co/code-jin/gallery", label: "VSCO" },
];

export default function Home() {
  // TODO: Add analytic for page visits. PostHog?
  return (
    <Container>
      <Navbar currentIndex={0} />

      <div className='main-content'>
        <div className='desc-label'>
          During the week, you can find me writing code at{" "}
          <a href='https://www.nudgetext.com' target='_blank' rel='noreferrer'>
            The Nudge
          </a>
          , a Series A start up that texts users things to do.
        </div>
        <div className='desc-label'>
          On the weekends, I enjoy reading and writing{" "}
          <a
            href='https://jinsung-kim.github.io'
            target='_blank'
            rel='noreferrer'
          >
            (see my blog here)
          </a>
          , surfing/exercising, and playing bass guitar.
        </div>
        <div className='desc-label'>
          A NYU CS grad. A proud plant father. Currently based in SF.
        </div>

        <div className='footer-links'>
          {EXTERNAL_LINKS.map((link, index) => (
            <>
              <a
                href={link.redirectTo}
                target='_blank'
                className='footer-link'
                rel='noreferrer'
              >
                {link.label}
              </a>

              {index !== EXTERNAL_LINKS.length - 1 && (
                <div className='dot-separator'>·</div>
              )}
            </>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .desc-label {
            font-size: 16px;
            font-family: "Roboto", sans-serif;
            color: #000;
            margin-bottom: 12px;
          }

          .desc-label a,
          .footer-links a {
            font-size: 16px;
            font-family: "Roboto", sans-serif;
            color: #000;
          }

          .desc-label a:hover,
          .footer-links a:hover {
            color: #6d712e;
          }

          .footer-links {
            display: flex;
            flex-direction: row;
            flex: 1;
            margin-top: 8px;
            flex-wrap: wrap;
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
