import React from 'react';
import './MostSearchedJobs.css';

function MostSearchedJobs() {
  return (
    <div className="most-searched-jobs">
      <h2>Most Searched Jobs This Year!</h2>
      <ul className="job-list">
        <li>Data Scientist</li>
        <li>Full-Stack Developer</li>
        <li>Machine Learning Engineer</li>
        <li>Cybersecurity Specialist</li>
        <li>Cloud Architect</li>
        <li>AI Researcher</li>
        <li>Product Manager</li>
      </ul>
    </div>
  );
}

export default MostSearchedJobs;
