import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/index';

const _Button = ({ inputValue, clearInput, fetchData }) => {
  const handleOnClick = event => {
    event.preventDefault();
    fetchData(inputValue);
    clearInput();
  };

  return <button onClick={handleOnClick}>Fetch</button>;
};

const mapStateToProps = state => {
  return {
    inputValue: state.pokemon.inputValue
  };
};

const mapDispatchToProps = {
  fetchData: fetchData
};

const Button = connect(mapStateToProps, mapDispatchToProps)(_Button);

export default Button;
