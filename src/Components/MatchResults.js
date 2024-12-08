import React from 'react';
import './MatchResults.css';

function MatchResults() {
  const trendingJobs = [
    {
      title: 'Full Stack Developer',
      skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      vacancies: 5,
      package: '15LPA'
    },
    {
      title: 'Data Scientist',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'TensorFlow'],
      vacancies: 3,
      package: '20-45LPA'
    },
    {
      title: 'UI/UX Designer',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping'],
      vacancies: 2,
      package: '12LPA'
    },
    {
      title: 'Cloud Engineer',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps'],
      vacancies: 4,
      package: '35LPA'
    },
    {
      title: 'Mobile App Developer',
      skills: ['React Native', 'Swift', 'Kotlin', 'Android/iOS Development'],
      vacancies: 6,
      package: '25LPA'
    }
  ];

  return (
    <div className="trending-jobs-container">
      <h1>Current Trending Job Titles!</h1>
      <div className="job-list">
        {trendingJobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h3 className="job-title">{job.title}</h3>
            <div className="skills-list">
              <strong>Required Skills:</strong>
              <ul>
                {job.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
            <div className="job-details">
              <p><strong>Vacancies:</strong> {job.vacancies}</p>
              <p><strong>Package:</strong> {job.package}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchResults;
