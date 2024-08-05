// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/plant-a-tree">Plant a Tree</Link></li>
          <li><Link to="/choose-track">Choose Track</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/cart">Cart</Link></li> {/* Link to Cart */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
