import React from 'react';

export const Button = ({ fetchData, inputValue, clearInput }) => {
  const handleOnClick = event => {
    event.preventDefault();
    !inputValue
      ? alert('oops! please enter a Pokemon name!')
      : fetchData(inputValue);
    clearInput();
  };

  return <button onClick={handleOnClick}> Fetch </button>;
};
