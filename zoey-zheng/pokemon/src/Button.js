import React from 'react';

export const Button = ({ fetchData, inputValue, clearInput }) => {
  const handleOnClick = event => {
    event.preventDefault();
    fetchData(inputValue);
    clearInput();
  };

  return <button onClick={handleOnClick}> Submit </button>;
};
