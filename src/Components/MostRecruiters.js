import React from 'react';
import './MostRecruiters.css';

function MostRecruiters() {
  const recruiters = [
    { name: 'John Doe from Samsung', place: 'Japan' },
    { name: 'shriya from JP Morgan', place: 'Mumbai' },
    { name: 'Arun reddy HR from wipro', place: 'Banglore' },
    { name: 'mahesh from Health edge', place: 'Hyderabad' },
    { name: 'David Wilson from LAVA', place: 'Japan' },
  ];

  return (
    <div className="recruiters-container">
      <h1>see our Top Recruiters</h1>
      <div className="recruiters-list">
        {recruiters.map((recruiter, index) => (
          <div className="recruiter-card" key={index}>
            <h3>{recruiter.name}</h3>
            <p>{recruiter.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostRecruiters;
