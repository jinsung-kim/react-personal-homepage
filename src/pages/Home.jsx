import React from "react";

import Navbar from "../components/Navbar";

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
  return (
    <div className='home-container'>
      <Navbar currentIndex={0} />

      <div className='main-content'>
        <div className='desc-label'>
          During the week, you can find me programming at{" "}
          <a href='https://www.nudgetext.com' target='_blank' rel='noreferrer'>
            The Nudge
          </a>
          , a Series A start up.
        </div>
        <div className='desc-label'>
          On the weekends, I enjoy reading and writing about what I read (blog
          here), surfing/exercising, and playing bass guitar.
        </div>
        <div className='desc-label'>
          misc. I am based in San Francisco. I am a NYU CS grad. A proud plant
          father.
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
          .home-container {
            max-width: 500px;
            margin-left: 10%;
            margin-top: 10%;
          }

          .main-content {
            margin-top: 10px;
          }

          .desc-label {
            font-size: 16px;
            font-family: sans-serif;
            margin-bottom: 8px;
          }

          .desc-label a,
          .footer-links a {
            font-size: 16px;
            color: red;
          }

          .desc-label a:hover,
          .footer-links a:hover {
            color: green;
          }

          .footer-links {
            display: flex;
            flex-direction: row;
            margin-top: 8px;
          }

          .footer-links a {
          }

          .dot-separator {
            padding-left: 6px;
            padding-right: 6px;
          }
        `}
      </style>
    </div>
  );
}
