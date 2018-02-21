import React, { Component } from 'react';
import './style/index.css';
import { Header } from './Header.js';
import { Display } from './Display.js';
import Input from './Input.js';
import { Button } from './Button.js';
import { FetchingPlaceholder } from './FetchingPlaceholder.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      inputValue: null,
      name: 'pikachu',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    };
  }

  updateInputValue = inputValue => {
    this.setState({ ...this.state, inputValue });
  };

  fetchData = input => {
    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${input}`;
    return fetch(pokemonUrl)
      .then(res => res.json())
      .then(value => {
        let name = value.name;
        let img = value.sprites.front_default;
        this.setState({ name, img, isFetching: false });
      })
      .catch(error => {
        console.error(error);
        alert('Opps, we could not find the Pokemon you were looking for :(');
      });
  };

  clearInput = () => {
    this.textInput.value = '';
  };

  updateIsFetching = () => {
    this.setState({ isFetching: true });
  };

  render() {
    return (
      <div className="App">
        <Header title={'Gotta Fetch em all!'} />{' '}
        {this.state.isFetching && <FetchingPlaceholder />}
        {!this.state.isFetching && (
          <Display img={this.state.img} name={this.state.name} />
        )}
        <div className="SearchField">
          <Input
            refProp={input => {
              this.textInput = input;
            }}
            updateInputValue={this.updateInputValue}
          />
          <Button
            clearInput={this.clearInput}
            inputValue={this.state.inputValue}
            fetchData={this.fetchData}
            updateIsFetching={this.updateIsFetching}
          />
        </div>
      </div>
    );
  }
}

export default App;
