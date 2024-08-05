import React from 'react';
import { useDispatch } from 'react-redux';
import { addTrack } from '../redux/cartSlice';
import './TrackCard.css'; // Create and import a CSS file for styling

const TrackCard = ({ track }) => {
  const dispatch = useDispatch();

  const handleChooseTrack = () => {
    dispatch(addTrack(track));
  };

  return (
    <div className="track-card">
      <img src={track.albumArt} alt={track.name} />
      <h3>{track.name}</h3>
      <a href={track.youtubeLink} target="_blank" rel="noopener noreferrer">Preview</a>
      <button onClick={handleChooseTrack}>Choose Track</button>
    </div>
  );
};

export default TrackCard;
