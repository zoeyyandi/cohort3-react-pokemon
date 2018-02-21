import React from 'react';

export const FetchingPlaceholder = () => {
  return (
    <div className="image-name">
      <img
        className="pokeball"
        src="http://www.pngmart.com/files/2/Pokeball-Transparent-Background.png"
        alt="poke-ball"
      />
      <p> fetching... </p>
    </div>
  );
};
