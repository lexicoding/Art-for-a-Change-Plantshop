import React from 'react';
import TrackCard from '../components/TrackCard';
import { Link } from 'react-router-dom';
import './ChooseTrack.css'; // Create and import a CSS file for styling

const tracks = [
  { id: 1, name: 'Track 1', albumArt: '/path/to/album-art.jpg', youtubeLink: 'https://youtube.com/...' },
  // Add more track options here
];

const ChooseTrack = () => {
  return (
    <div>
      <h1>Choose a Track</h1>
      <div className="track-list">
        {tracks.map(track => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
      <Link to="/checkout">
        <button className="checkout-button">Check Out</button>
      </Link>
    </div>
  );
};

export default ChooseTrack;
