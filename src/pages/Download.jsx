import React from 'react';
import { useTrack } from '../context/TrackContext'; // Import the useTrack hook

const Download = () => {
  const { isTrackAvailable } = useTrack(); // Use the isTrackAvailable value

  return (
    <div>
      <h2>Download Your Track</h2>
      {isTrackAvailable ? (
        <div>
          <p>Your track is available for download!</p>
          <a href="/path-to-your-track.mp3" download>
            Download Track
          </a>
        </div>
      ) : (
        <p>You need to complete a purchase to access the download.</p>
      )}
    </div>
  );
};

export default Download;
