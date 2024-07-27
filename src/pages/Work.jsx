import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Container from "../components/Container";
import DataTable from "../components/DataTable";
import posthog from "posthog-js";

const ACADEMIC_PUBLICATIONS = [
  {
    redirectTo: "https://dl.acm.org/doi/10.1145/3491102.3501989",
    title: "ACM CHI 2022",
    subtitle:
      "‘Are They Doing Better In The Clinic Or At Home?’: Understanding Clinicians’ Needs When Visualizing Wearable Sensor Data Used In Remote Gait Assessments For People With Multiple Sclerosis",
  },
  {
    redirectTo: "https://dl.acm.org/doi/10.1145/3555622",
    title: "CSCW 2022",
    subtitle:
      "‘Digital Technologies In Orientation And Mobility Instruction For People Who Are Blind Or Have Low Vision",
  },
];

const WORK_EXPERIENCES = [
  {
    redirectTo: "https://www.nudgetext.com",
    title: "The Nudge",
    subtitle:
      "Currently building out texting services, map features, and internal tools",
  },
  {
    redirectTo:
      "https://www.aboutamazon.com/news/retail/amazon-reimagines-in-store-shopping-with-amazon-style",
    title: "Amazon",
    subtitle:
      "Developed a sort and filtering system to allow retail customers to seamlessly sort through categories in the Amazon Style app",
  },
  {
    redirectTo: "https://maps.trimble.com/",
    title: "Trimble Maps",
    subtitle:
      "Assisted clients with API usage, enhanced web request services, improved debugging features for geocoding requests",
  },
  {
    redirectTo: "https://dl.acm.org/doi/10.1145/3491102.3501989",
    title: "NYU Langone Mobility App",
    subtitle:
      "Developed a native iOS app in partnership with Lighthouse specialists to help clinicians analyze gait",
  },
];

const FREELANCING = [
  {
    redirectTo: "https://romr.app/",
    title: "ROMR App",
    subtitle: "Created a social network app for sharing food and experiences",
  },
  {
    redirectTo: "https://coffeecard.nyc/",
    title: "Coffee Card",
    subtitle:
      "Redesigned app with a light mode UI, architected a discount system, managed orders in vendor app",
  },
];

export default function Work() {
  useEffect(() => {
    posthog.capture("WorkPageView");
  }, []);

  return (
    <Container>
      <Navbar currentIndex={1} />

      <div>
        <div className='academic-label'>Academic Contributions</div>
        <DataTable data={ACADEMIC_PUBLICATIONS} secondaryColor='#808080' />

        <div className='work-label'>Work Experience</div>
        <DataTable data={WORK_EXPERIENCES} secondaryColor='#808080' />

        <div className='work-label'>Freelancing</div>
        <DataTable data={FREELANCING} secondaryColor='#808080' />

        <div className="footer">* References available upon request</div>
      </div>

      <style jsx='true'>{`
        .academic-label,
        .work-label {
          font-size: 16px;
          font-family: "Roboto", sans-serif;
          margin-bottom: 6px;
        }

        .work-label {
          margin-top: 16px;
        }
        
        .footer {
          font-size: 12px;
          font-family: "Roboto", sans-serif;
          color: #c7c7c7;
          margin-top: 8px;
        }
      `}</style>
    </Container>
  );
}
