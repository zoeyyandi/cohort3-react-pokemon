import React from 'react';

export const Display = ({ img, name }) => {
  return (
    <div>
      <img src={img} alt="pokemon" />
      <p> {name} </p>
    </div>
  );
};
