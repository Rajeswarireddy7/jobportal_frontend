import React from 'react';
import './MostRecruitedCompanies.css';

function MostRecruitedCompanies() {
  const companies = [
    { name: 'TechCorp', location: 'San Francisco' },
    { name: 'DataWave', location: 'New York' },
    { name: 'Web Solutions', location: 'Remote' },
    { name: 'InnovaTech', location: 'Boston' },
    { name: 'CloudNet', location: 'Seattle' }
  ];
 
  return (
    <div className="company-list-container">
      <h1>Top Recruited Companies</h1>
      <div className="company-list">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>
            <h3>{company.name}</h3>
            <p>{company.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostRecruitedCompanies;
