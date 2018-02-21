import React from 'react';

export const Button = ({
  fetchData,
  inputValue,
  clearInput,
  updateIsFetching
}) => {
  const handleOnClick = event => {
    event.preventDefault();
    if (!inputValue) {
      alert('oops! please enter a Pokemon name!');
    } else {
      updateIsFetching();
      fetchData(inputValue);
    }
    clearInput();
  };

  return <button onClick={handleOnClick}> Fetch </button>;
};
