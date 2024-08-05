import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import './Checkout.css'; // Create and import a CSS file for styling

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm />
      <p>Thank you for your support! Follow us for more:</p>
      {/* Add social media icons here */}
    </div>
  );
};

export default Checkout;
