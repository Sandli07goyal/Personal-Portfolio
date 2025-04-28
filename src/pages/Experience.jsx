import React from "react";
import Section from "../components/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Machine Learning Intern</h3>
          <div className="subheading mb-3">OASIS INFOBYTE</div>
          <p>
            <strong>Roles/Responsibilities</strong><br />
            <li>Data Analysis & Preprocessing: Collected, cleaned, and preprocessed datasets for model training and evaluation using tools like Pandas and NumPy.</li>
            <li>Model Development: Built and trained supervised ML models (e.g., Logistic Regression, Decision Trees, SVM) for real-world applications such as sentiment analysis and fraud detection.</li>
            <li>Feature Engineering: Identified and selected key features to improve model accuracy and performance.</li>
            <li>Model Evaluation: Assessed model performance using metrics like accuracy, precision, recall, F1-score, and confusion matrix.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">June 2024 - July 2024</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">         
        </div>
        <div className="flex-shrink-0">
        </div>
      </div>
    </Section>
  );
}
