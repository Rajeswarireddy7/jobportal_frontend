import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleMostSearchedJobsClick = () => {
    navigate('/most-searched-jobs');
  };

  const handleMostRecruitersClick = () => {
    navigate('/most-recruiters'); // Navigate to the Most Recruiters page
  };

  const handleMostRecruitedCompaniesClick = () => {
    navigate('/most-recruited-companies');
  };

  return (
    <div className="home-container">
      <h1 className="welcome-title">on the Hunt for the one!!</h1>
      <div className="home-cards">
        <div className="card job-searchers"> {/* Added class to increase size */}
          <h3>Job Searchers</h3>
          <p>Find jobs that suit your skills and career goals and click to see most searched jobs.</p>
          <button className="card-btn" onClick={handleMostSearchedJobsClick}>
            Most Searched Jobs
          </button>
        </div>

        <div className="card">
          <h3>Recruiters</h3>
          <p>Post job listings and find the right candidates for your organization and top recruiters.</p>
          <button className="card-btn" onClick={handleMostRecruitersClick}>
            See our top Recruiters
          </button>
        </div>
        <div className="card">
          <h3>Companies</h3>
          <p>Join the network to hire top talent using AI-powered matching and most recruted compaines.</p>
          <button className="card-btn" onClick={handleMostRecruitedCompaniesClick}>
            Most Recruited Companies
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
