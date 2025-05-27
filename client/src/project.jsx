/*project.jsx
Name: Chun YU Clement Chan
Student ID: 301454624
Date: 27/5/2025*/

import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Linux server',
      image: 'src/assets/project1.jpg',
      description: 'Buliding Linux ssh server allow computers to login with username and password to transfer files in between.'
    },
    {
      title: 'Fitness App design',
      image: 'src/assets/project2.jpg',
      description: 'Built a cross-platform tracker in React Native featuring workout logs, progress charts, and social sharing.'
    },
    {
      title: 'Multiple Choice APP',
      image: 'src/assets/project3.jpg',
      description: 'Built an interactive multiple-choice quiz application in java, answer validation, score tracking, and user feedback for instant learning.'
    },
  ];

  return (
   <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="img-wrapper">
              <img src={proj.image} alt={proj.title} className="project-img" />
            </div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
