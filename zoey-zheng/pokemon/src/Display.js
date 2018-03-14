import React from 'react';
import { connect } from 'react-redux';

const _Display = ({ img, name }) => {
  console.log(img);
  return (
    <div className="image-name">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.pokemon.name,
    img: state.pokemon.img
  };
};

const Display = connect(mapStateToProps, null)(_Display);

export default Display;
