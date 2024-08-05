import React from 'react';
import PlantCard from '../components/PlantCard';
import { Link } from 'react-router-dom';
import './PlantATree.css'; // Create and import a CSS file for styling

const plants = [
  { id: 1, name: 'Oak', price: 5 },
  { id: 2, name: 'Maple', price: 5 },
  { id: 3, name: 'Pine', price: 5 },
  { id: 4, name: 'Birch', price: 5 },
  { id: 5, name: 'Cherry', price: 5 },
  { id: 6, name: 'Willow', price: 5 },
  { id: 7, name: 'Cedar', price: 5 },
  { id: 8, name: 'Elm', price: 5 },
  { id: 9, name: 'Spruce', price: 5 },
];

const PlantATree = () => {
  return (
    <div>
      <h1>Choose a Plant to Donate</h1>
      <div className="plant-list">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
      <Link to="/choose-track">
        <button className="track-button">Choose Your Track</button>
      </Link>
    </div>
  );
};

export default PlantATree;
