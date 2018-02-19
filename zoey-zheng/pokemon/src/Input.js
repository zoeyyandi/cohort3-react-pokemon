import React, { Component } from 'react';

class Input extends Component {
  handleChange = event => {
    let input = event.target.value.toLowerCase();
    this.props.updateInputValue(input);
  };

  render() {
    return (
      <input
        autoFocus
        className="inputBox"
        ref={this.props.refProp}
        onChange={this.handleChange}
        type="text"
        placeholder="Search Pokemon"
        required
      />
    );
  }
}

export default Input;
