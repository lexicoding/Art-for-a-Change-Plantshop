import React, { useState } from 'react';
import CartPopup from './CartPopup';
import { useCart } from '../context/CartContext'; // Import the useCart hook
import './CartButton.css'; // Ensure this file exists and is properly styled

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart-button-container">
      <button className="cart-button" onClick={togglePopup}>
        🛒 Cart ({cartItems.length})
      </button>
      {isOpen && <CartPopup closePopup={togglePopup} />}
    </div>
  );
};

export default CartButton;
