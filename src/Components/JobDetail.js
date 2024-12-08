import React from 'react';
import { useParams } from 'react-router-dom';
import './JobDetail.css';

function JobDetail() {
  const { id } = useParams();
  // Replace with API call to fetch job details based on ID
  const jobDetail = {
    title: 'Software Engineer',
    company: 'Company A',
    description: 'Job description goes here...',
  };

  return (
    <div className="job-detail">
      <h2>{jobDetail.title}</h2>
      <h3>{jobDetail.company}</h3>
      <p>{jobDetail.description}</p>
    </div>
  );
}

export default JobDetail;
