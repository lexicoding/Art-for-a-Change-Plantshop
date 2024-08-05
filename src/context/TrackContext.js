import React, { createContext, useState, useContext } from 'react';

const TrackContext = createContext();

export const useTrack = () => useContext(TrackContext);

export const TrackProvider = ({ children }) => {
  const [isTrackAvailable, setIsTrackAvailable] = useState(false);

  const markTrackAvailable = () => {
    setIsTrackAvailable(true);
  };

  return (
    <TrackContext.Provider value={{ isTrackAvailable, markTrackAvailable }}>
      {children}
    </TrackContext.Provider>
  );
};
