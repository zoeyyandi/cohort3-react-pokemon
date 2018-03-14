import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style/index.css';
import { Header } from './Header.js';
import Display from './Display.js';
import Input from './Input.js';
import Button from './Button.js';
import { FetchingPlaceholder } from './FetchingPlaceholder.js';
import PokemonList from './PokemonList.js';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   isFetching: false,
  //   inputValue: '',
  //   isList: false,
  //   pokemonList: [],
  //   error: null,
  //   name: 'pikachu',
  //   img:
  //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  // };
  // }

  // updateInputValue = inputValue => {
  //   this.setState({ ...this.state, inputValue });
  // };

  // fetchData = (input = '') => {
  //   let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${input}`;
  //   return fetch(pokemonUrl)
  //     .then(res => {
  //       if (res.status === 404) {
  //         this.setState({
  //           error: 'Pokemon not found!',
  //           isFetching: false
  //         });
  //       } else {
  //         return res.json().then(value => {
  //           if (input === '') {
  //             let pokemonList = value.results.map(pokemon => pokemon.name);
  //             this.setState({
  //               pokemonList,
  //               isFetching: false,
  //               isList: true,
  //               error: null
  //             });
  //           } else {
  //             let name = value.name;
  //             let img = value.sprites.front_default;
  //             this.setState({ name, img, isFetching: false, error: null });
  //           }
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       this.setState({
  //         error: 'Oops! Something went wrong!',
  //         isFetching: false
  //       });
  //     });
  // };

  clearInput = () => {
    this.textInput.value = '';
  };

  // updateIsFetching = () => {
  //   this.setState({ isFetching: true });
  // };

  render() {
    const { isFetching, isList, error } = this.props;
    return (
      <div className="App">
        <Header title={'Gotta Fetch em all!'} />
        {isFetching && <FetchingPlaceholder />}
        {!isFetching && !error && !isList && <Display />}
        {!isFetching && !error && isList && <PokemonList />}
        {!isFetching && error && <p className="errorMessage">{error}</p>}
        <div className="SearchField">
          <Input
            refProp={input => {
              this.textInput = input;
            }}
          />
          <Button clearInput={this.clearInput} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isList: state.pokemon.pokemonList.length !== 0,
    error: state.pokemon.error,
    isFetching: state.pokemon.isFetching
  };
};

export default connect(mapStateToProps, null)(App);
