// JobCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobCard.css';

function JobCard({ job }) {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    // Redirect to the ApplicationForm component and pass job details
    navigate('/application-form', { state: { job } });
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Company:</strong> {job.company}</p>
      <button className="apply-button" onClick={handleApplyClick}>
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;
