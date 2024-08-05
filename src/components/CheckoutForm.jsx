import React from 'react';
import './CheckoutForm.css'; // Create and import a CSS file for styling

const CheckoutForm = () => {
  return (
    <div>
      <h2>Payment Options</h2>
      <button>Pay with PayPal</button>
      <button>Pay with GooglePay</button>
    </div>
  );
};

export default CheckoutForm;
