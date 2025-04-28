import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">MAHARAJA AGARSEN INSTITUTE OF TECHNOLOGY</h3>
          <div className="subheading mb-3">B.TECH IN ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</div>
          <div>Data Structures, Algorithms, OOPs, OS, DBMS, Web Development, Deep Learning, Machine Learning, Artificial Intelligence</div>
          <p>CGPA: 8.3</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">September 2022 - Present</span>
        </div>
      </div>
    </Section>
  );
}
