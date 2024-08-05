import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import './PlantCard.css'; // Create and import a CSS file for styling

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...plant, quantity: 1 }));
  };

  return (
    <div className="plant-card">
      <h3>{plant.name}</h3>
      <p>€{plant.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;
