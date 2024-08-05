import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'; // Create and import a CSS file for styling

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Art for a Change Plantshop</h1>
      <p>Support our cause by planting trees and enjoy music tracks from Harmony for Earth.</p>
      <img src="/path/to/earth-image.jpg" alt="Earth" className="earth-image" /> {/* Make sure to replace with actual path */}
      <Link to="/plant-a-tree">
        <button className="plant-button">Plant a Tree Now</button>
      </Link>
    </div>
  );
};

export default Welcome;
