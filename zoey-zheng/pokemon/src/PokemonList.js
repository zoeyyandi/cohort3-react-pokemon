import React from 'react';
import { connect } from 'react-redux';
import { EachPokemon } from './EachPokemon.js';

const _PokemonList = ({ pokemonList }) => {
  return (
    <ul className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <EachPokemon key={index} pokemon={pokemon} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    pokemonList: state.pokemon.pokemonList
  };
};

const PokemonList = connect(mapStateToProps, null)(_PokemonList);

export default PokemonList;
