// src/pages/PlantATree.jsx
import React from 'react';
import PlantCard from '../components/PlantCard';
import { Link } from 'react-router-dom';
import './PlantATree.css'; // Import the CSS for styling

const plants = [
  { id: 1, name: 'Oak', price: 5, image: 'https://greatplainsnursery.com/wp-content/uploads/2016/12/oak-tree-pic.jpg' },
  { id: 2, name: 'Maple', price: 5, image: '/path/to/maple.jpg' },
  { id: 3, name: 'Pine', price: 5, image: '/path/to/pine.jpg' },
  { id: 4, name: 'Birch', price: 5, image: '/path/to/birch.jpg' },
  { id: 5, name: 'Cherry', price: 5, image: '/path/to/cherry.jpg' },
  { id: 6, name: 'Willow', price: 5, image: '/path/to/willow.jpg' },
  { id: 7, name: 'Cedar', price: 5, image: '/path/to/cedar.jpg' },
  { id: 8, name: 'Elm', price: 5, image: '/path/to/elm.jpg' },
  { id: 9, name: 'Spruce', price: 5, image: '/path/to/spruce.jpg' },
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
