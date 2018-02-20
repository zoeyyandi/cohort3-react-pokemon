import React, { Component } from 'react';
import './style/App.css';
import { Header } from './Header.js';
import { Display } from './Display.js';
import Input from './Input.js';
import { Button } from './Button.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.setState({ name, img });
      });
  };

  clearInput = () => {
    this.textInput.value = '';
  };

  render() {
    return (
      <div className="App">
        <Header title={'Gotta Fetch em all!'} />
        <Display img={this.state.img} name={this.state.name} />
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
        />
      </div>
    );
  }
}

export default App;
