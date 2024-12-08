import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication logic
    if (email === 'User07@gmail.com' && password === 'password123') {
      // Redirect to the home page after successful login
      navigate('/');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            required
            className="email-input"
            value={email} // Bind value to state
            onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            required
            value={password} // Bind value to state
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>or</p>
      <div className="social-login">
        <button className="google-btn">sign in with Google</button>
        <button className="facebook-btn">sign in with Facebook</button>
      </div>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
}

export default Login;
