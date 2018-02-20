import React from 'react';

export const Display = ({ img, name }) => {
  return (
    <div className="image-name">
      <img src={img} alt="pokemon" />
      <p> {name} </p>
    </div>
  );
};
