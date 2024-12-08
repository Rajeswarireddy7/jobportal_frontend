// Profile.js
import React from 'react';
import './Profile.css';

// Use a reliable link to a passport-sized image of an office woman
const profilePicture = 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='; // A known image URL of a woman in an office setting

function Profile() {
  const profileData = {
    name: 'User',
    email: 'User07@gmail.com',
    age: '29',
    gender: 'Female',
    interests: 'Reading, Traveling, Technology, Cooking',
    skills: 'JavaScript, React, Node.js, MongoDB, Python',
    experience: '3 years as a Full Stack Developer at PixelCrayons. Developed various web applications using the MERN stack. Led a team of 5 developers to complete projects on time.',
    profilePicture: profilePicture // Use the random image URL here
  };

  return (
    <div className="profile-container">
      <h2>User Profile&Details</h2>
      <div className="profile-picture">
        <img 
          src={profileData.profilePicture} 
          alt="Profile" 
          style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} 
        />
      </div>
      <div className="profile-field">
        <strong>Name:</strong> <span>{profileData.name}</span>
      </div>
      <div className="profile-field">
        <strong>Email:</strong> <span>{profileData.email}</span>
      </div>
      <div className="profile-field">
        <strong>Age:</strong> <span>{profileData.age}</span>
      </div>
      <div className="profile-field">
        <strong>Gender:</strong> <span>{profileData.gender}</span>
      </div>
      <div className="profile-field">
        <strong>Interests:</strong> <span>{profileData.interests}</span>
      </div>
      <div className="profile-field">
        <strong>Skills:</strong> <span>{profileData.skills}</span>
      </div>
      <div className="profile-field">
        <strong>Experience:</strong> <span>{profileData.experience}</span>
      </div>
    </div>
  );
}

export default Profile;
