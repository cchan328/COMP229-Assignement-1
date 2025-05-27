/*about.jsx
Name: Chun YU Clement Chan
Student ID: 301454624
Date: 27/5/2025*/

import React from 'react';

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <img src="src/assets/profile.jpg" alt="Profile" className="profile-img" />
      <p>Hi, I’m Clement Chan, a developer passionate about web technologies and user-centered design.</p>
      <a href="src/assets/ClementCV.pdf" target="_blank" download="ClementChan_Resume.pdf">Download Resume (PDF)</a>
    </div>
  );
}

export default About;
