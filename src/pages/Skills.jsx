import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import Skill from '../components/Skill'; 


import Pie3D from "../components/Chart/Pie3D";

const SocialIcon = ({ icon, link }) => (
  <div className="list-inline-item dev-icons">
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  </div>
);

const Skills = () => {
  const [repoItems, setRepoItems] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = {
    skills: [
      { title: "Python", progress: "85%" },
      { title: "C++", progress: "70%" },
      { title: "HTML", progress: "90%" },
      { title: "CSS", progress: "85%" },
      { title: "JavaScript", progress: "70%" },
      { title: "SQL", progress: "65%" },
    ],
    frameworks: [
      { title: "Scikit-learn", progress: "80%" },
      { title: "Pandas / NumPy", progress: "85%" },
      { title: "Matplotlib / Seaborn", progress: "80%" },
      { title: "Supervised Learning", progress: "85%" },
      { title: "Unsupervised Learning", progress: "70%" },
      { title: "Pandas / NumPy", progress: "85%" },
      { title: "Matplotlib / Seaborn", progress: "80%" },
      { title: "Data Cleaning & Preprocessing", progress: "85%" },
      { title: "Jupyter / Google Colab", progress: "90%" },
    ],
  };
  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/dhruvsethi708/repos?per_page=100");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setRepoItems(data);
      } catch (error) {
        setError("Error fetching data from GitHub API");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (repoItems.length > 0) {
      let languages = repoItems.reduce((total, item) => {
        const { language, stargazers_count } = item;
        if (!language) return total;

        if (!total[language]) {
          total[language] = { label: language, value: 1, stars: stargazers_count || 0 };
        } else {
          total[language].value += 1;
          total[language].stars += stargazers_count || 0;
        }

        return total;
      }, {});

      const mostUsed = Object.values(languages)
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);
      setDataSource(mostUsed);
    }
  }, [repoItems]);

  const skillsJsx = data.skills.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} />
    </div>
  ));

  const frameworksJsx = data.frameworks.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} secondary />
    </div>
  ));

  const languagesUsedChart = (
    <div className="col-md-6 py-1">
      <Pie3D data={dataSource} />
    </div>
  );

  return (
    <Section id="skills" title="Skills">
      <div className="subheading mb-3">Coding Languages</div>
      <div className="row mb-4">{skillsJsx}</div>

      <div className="subheading mb-3">Frameworks / Libraries</div>
      <div className="row mb-4">{frameworksJsx}</div>

      <div className="subheading mb-3">Languages used as per GitHub</div>
      <div className="row mb-4">{languagesUsedChart}</div>

      {/* Social media section */}
      <div className="subheading mb-3"></div>
      <div className="list-inline">
        <SocialIcon icon={<i className="fab fa-github"></i>} link="https://github.com/dhruvsethi708" />
        <SocialIcon icon={<i className="fab fa-linkedin"></i>} link="https://linkedin.com/in/dhruvsethi708" />
        {/* Add more SocialIcons as needed */}
      </div>

      {/* Error Handling */}
      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {/* Loading State */}
      {loading && <div>Loading GitHub data...</div>}
    </Section>
  );
};

export default Skills;
