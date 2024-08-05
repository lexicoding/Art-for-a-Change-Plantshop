import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the useCart hook
import './CartPopup.css'; // Ensure this file exists and is properly styled

const CartPopup = ({ closePopup }) => {
  const { cartItems, getTotal } = useCart();

  return (
    <div className="cart-popup">
      <button className="close-button" onClick={closePopup}>×</button>
      <h3>Your Cart</h3>
      <ul>
        {cartItems.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))
        )}
      </ul>
      <div className="cart-total">
        <strong>Total: ${getTotal()}</strong>
      </div>
      <Link to="/checkout" className="checkout-button" onClick={closePopup}>Checkout</Link>
    </div>
  );
};

export default CartPopup;
