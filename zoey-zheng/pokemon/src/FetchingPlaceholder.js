import React from 'react';
import pokeball from './style/images/pokeball.png';

export const FetchingPlaceholder = () => {
  return (
    <div className="image-name">
      <img className="pokeball" src={pokeball} alt="poke-ball" />
      <p>fetching...</p>
    </div>
  );
};
