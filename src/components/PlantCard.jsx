import React from 'react';
import { useCart } from '../context/CartContext'; // Import the useCart hook
import './PlantCard.css'; // Ensure this file exists and is properly styled

const PlantCard = ({ plant }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(plant);
  };

  return (
    <div className="plant-card">
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;
