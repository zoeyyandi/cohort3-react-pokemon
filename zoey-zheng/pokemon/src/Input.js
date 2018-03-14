import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInputValue } from './actions/index';

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
        placeholder="search pokemon"
      />
    );
  }
}

const mapDispatchToProps = {
  updateInputValue: updateInputValue
};

export default connect(null, mapDispatchToProps)(Input);
