// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './Chatbot';
import './Header.css';

function Header() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
  };

  return (
    <header className="header">
      <h1 className="main-heading">Job Portal with AI-Based Matching</h1> {/* Main Heading on the left */}
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/matches">Matches</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li onClick={toggleChatbot} style={{ cursor: 'pointer' }}>Chatbot Help</li>
        </ul>
      </nav>
      {showChatbot && <Chatbot onClose={toggleChatbot} />}
    </header>
  );
}

export default Header;
