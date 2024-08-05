import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import PlantATree from './pages/PlantATree';
import ChooseTrack from './pages/ChooseTrack';
import Checkout from './pages/Checkout';
import Download from './pages/Download'; // Import the Download page
import CartButton from './components/CartButton'; // Import the CartButton component
import { CartProvider } from './context/CartContext'; // Import the CartProvider
import { TrackProvider } from './context/TrackContext'; // Import the TrackProvider
import './App.css'; // Create and import a CSS file for global styling

function App() {
  return (
    <Router>
      <CartProvider>
        <TrackProvider>
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/plant-a-tree" element={<PlantATree />} />
              <Route path="/choose-track" element={<ChooseTrack />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/download" element={<Download />} /> {/* Add the Download route */}
            </Routes>
            <CartButton /> {/* Add the CartButton here */}
          </div>
        </TrackProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
