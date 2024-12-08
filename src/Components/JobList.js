// JobList.js
import React from 'react';
import JobCard from './JobCard';
import './JobList.css';

function JobList() {
  const jobs = [
    {
      id: 1,
      title: 'AI Engineer',
      description: 'Develop AI models for our platform.',
      location: 'Bengaluru',
      company: 'TechCorp',
    },
    {
      id: 2,
      title: 'Data Scientist',
      description: 'Analyze large datasets to extract insights.',
      location: 'New York',
      company: 'DataWave',
    },
    {
      id: 3,
      title: 'Frontend Developer',
      description: 'Build responsive user interfaces.',
      location: 'Remote',
      company: 'Web Solutions',
    },
  ];

  return (
    <div className="job-list">
      {/* Add the title here */}
      <h2 className="job-list-title">AI Recommended Jobs Based on your skills!</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
