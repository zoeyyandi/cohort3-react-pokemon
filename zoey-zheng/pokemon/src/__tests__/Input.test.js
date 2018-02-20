import React from 'react';
import Input from '../Input.js';
import renderer from 'react-test-renderer';

describe('input component tests', () => {
  it('renders input component', () => {
    const input = renderer.create(<Input />);
    expect(input.toJSON()).toMatchSnapshot();
  });
});
