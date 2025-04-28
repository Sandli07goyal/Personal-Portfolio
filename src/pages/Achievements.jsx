import React from "react";
import Section from "../components/Section";

import { BsTrophy } from "react-icons/bs"
import { RiFilePaper2Fill } from "react-icons/ri"

export default function Achievements() {
  return (
    <React.Fragment>
      <Section id="achievements" title="Achievements &amp; Certifications">
        <ul className="fa-ul mb-0">
         
          
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://drive.google.com/drive/u/0/my-drive">
              Completed Internship at OASIS INFOBYTE
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a >
              Contributed in Hacktoberfest 2022
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a>
            Google Solution Challenge 2022
            </a>
          </div>
         
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a>
              HackNSUT'22
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a>
              "Live the Code" Hackathon
            </a>
          </div>
        </ul>
      </Section>
    </React.Fragment>
  );
}
