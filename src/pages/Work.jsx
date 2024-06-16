import React from "react";

import Navbar from "../components/Navbar";
import Container from "../components/Container";
import DataTable from "../components/DataTable";

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
      "‘Are They Doing Better In The Clinic Or At Home?’: Understanding Clinicians’ Needs When Visualizing Wearable Sensor Data Used In Remote Gait Assessments For People With Multiple Sclerosis",
  },
];
const WORK_EXPERIENCES = [
  { redirectTo: "", title: "", subtitle: "" },
  { redirectTo: "", title: "", subtitle: "" },
  { redirectTo: "", title: "", subtitle: "" },
  { redirectTo: "", title: "", subtitle: "" },
  { redirectTo: "", title: "", subtitle: "" },
];

export default function Work() {
  return (
    <Container>
      <Navbar currentIndex={1} />

      <div className='main-content'>
        <div className='academic-label'>Academic Publications</div>
        <DataTable data={ACADEMIC_PUBLICATIONS} />

        <div className='work-label'>Work Experience</div>
        <DataTable data={WORK_EXPERIENCES} />
      </div>

      <style jsx>{`
        .academic-label,
        .work-label {
          font-size: 16px;
          font-family: "Roboto", sans-serif;
          margin-bottom: 6px;
        }

        .work-label {
          margin-top: 12px;
        }
      `}</style>
    </Container>
  );
}
