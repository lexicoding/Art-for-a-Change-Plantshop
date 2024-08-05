import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'; // Import the CSS for styling
import logo from '../assets/logo.png'; // Update this path to where your logo is stored

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={logo} alt="Harmony for Earth Logo" className="logo" />
      <h1 className="welcome-text">Welcome to Harmony for Earth</h1>
      <Link to="/plant-a-tree">
        <button className="start-button">Get Started</button>
      </Link>
    </div>
  );
};

export default Welcome;