// ApplicationForm.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ApplicationForm.css';

function ApplicationForm() {
  const location = useLocation();
  const job = location.state?.job || {}; // Get job details from the location state

  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to server)
    console.log({ companyName: job.company, applicantName, email, resume });
  };

  return (
    <div className="application-form-container">
      <h2 className="form-title">Job Application Form</h2>

      <div className="form-box">
        <form onSubmit={handleSubmit} className="application-form">
          <label>
            <span>Company Name:</span>
            <input
              type="text"
              value={job.company || ''} // Pre-fill the company name from job details
              readOnly
              className="input-field"
            />
          </label>
          <label>
            <span>Applicant Name:</span>
            <input
              type="text"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
              required
              className="input-field"
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field email-input"
            />
          </label>
          <label>
            <span>Resume:</span>
            <input
              type="file"
              onChange={(e) => setResume(e.target.files[0])}
              required
              className="input-field"
            />
          </label>
          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
